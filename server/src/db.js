import mongoose from 'mongoose';

export async function connectDB() {
  const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/adya_pustaka_bhandara';

  try {
    const conn = await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 2000,
    });
    console.log(`[MongoDB] Connected: ${conn.connection.host}`);
    return conn;
  } catch (error) {
    console.warn(`[MongoDB] Initial connection warning: ${error.message}`);
    console.warn('[MongoDB] Server will use the local fallback until MongoDB is reachable.');
    return null;
  }
}
