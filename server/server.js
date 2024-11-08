import dotenv from "dotenv";
import connectDB from "./database/connectDB.js";

dotenv.config();
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import propertyRoutes from "./routes/propertyRoutes.js";



const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/auth", authRoutes);
app.use("/api/properties", propertyRoutes);

mongoose.connect("mongodb://localhost/rental-system");

app.listen(5000, () => console.log("Server running on port 5000"));
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
  } catch (error) {
    console.log(error);
  }
};
start();
