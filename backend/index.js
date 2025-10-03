// Minimal Express server for SK Auto Care backend
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import {connectDB} from "./db/connectDB.js";
import authRoutes from "./routes/auth.route.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(cors({
  origin: "http://192.168.8.164:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));

app.use("/api", authRoutes);



(async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Error starting server:", error);
  }
})();
