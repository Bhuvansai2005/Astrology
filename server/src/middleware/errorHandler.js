export function errorHandler(error, req, res, _next) {
  console.error('[Error]', error.stack || error);
  const isCorsError = error.message === 'Origin is not allowed by CORS';
  const statusCode = isCorsError
    ? 403
    : error.statusCode || (res.statusCode === 200 ? 500 : res.statusCode);

  res.status(statusCode).json({
    error: isCorsError ? 'Request origin is not allowed.' : error.message || 'Internal Server Error',
    ...(process.env.NODE_ENV === 'development' && { stack: error.stack }),
  });
}
