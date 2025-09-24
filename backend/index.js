// Minimal Express server for SK Auto Care backend
import express from "express";
import dotenv from "dotenv";
import {connectDB} from "./db/connectDB";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

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
