import crypto from 'node:crypto';

function getSessionSecret() {
  return process.env.ADMIN_SESSION_SECRET || process.env.ADMIN_PASSWORD || '';
}

function sign(value) {
  return crypto.createHmac('sha256', getSessionSecret()).update(value).digest('base64url');
}

export function createAdminSession() {
  if (!getSessionSecret()) {
    const error = new Error('Seller dashboard credentials are not configured.');
    error.statusCode = 503;
    throw error;
  }

  const expiresAt = Date.now() + 8 * 60 * 60 * 1000;
  const payload = Buffer.from(JSON.stringify({ role: 'seller', expiresAt })).toString('base64url');
  return `${payload}.${sign(payload)}`;
}

export function verifyAdminPassword(password) {
  const configuredPassword = process.env.ADMIN_PASSWORD;
  if (!configuredPassword) {
    const error = new Error('Seller dashboard credentials are not configured.');
    error.statusCode = 503;
    throw error;
  }

  const supplied = Buffer.from(String(password || ''));
  const configured = Buffer.from(configuredPassword);
  if (
    supplied.length !== configured.length ||
    !crypto.timingSafeEqual(supplied, configured)
  ) {
    const error = new Error('Invalid password.');
    error.statusCode = 401;
    throw error;
  }
}

export function requireAdmin(req, res, next) {
  const authorization = req.get('authorization') || '';
  const token = authorization.startsWith('Bearer ') ? authorization.slice(7) : '';
  const [payload, signature] = token.split('.');
  const expectedSignature = payload ? sign(payload) : '';

  if (!payload || !signature || !getSessionSecret()) {
    return res.status(401).json({ error: 'Seller login required.' });
  }

  const signatureBuffer = Buffer.from(signature);
  const expectedBuffer = Buffer.from(expectedSignature);
  if (
    signatureBuffer.length !== expectedBuffer.length ||
    !crypto.timingSafeEqual(signatureBuffer, expectedBuffer)
  ) {
    return res.status(401).json({ error: 'Seller login required.' });
  }

  try {
    const session = JSON.parse(Buffer.from(payload, 'base64url').toString('utf8'));
    if (session.role !== 'seller' || session.expiresAt <= Date.now()) {
      return res.status(401).json({ error: 'Seller session expired.' });
    }
  } catch {
    return res.status(401).json({ error: 'Invalid seller session.' });
  }

  return next();
}
