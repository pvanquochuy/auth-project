import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const uri = "mongodb://127.0.0.1:27017/auth-db";
    if (!uri) {
      throw new Error("MongoDB URI is not defined in environment variables");
    }
    const conn = await mongoose.connect(uri);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Failed to connect to MongoDB: ${error}`);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;
