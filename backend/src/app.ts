import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db";
import authRoutes from "./routes/authRoutes";

dotenv.config();

connectDB();

const app = express();

// Cấu hình middleware
app.use(cors());
app.use(express.json()); // Đọc dữ liệu JSON từ body request

// Routes
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
