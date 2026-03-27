import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
dotenv.config({
  quiet: true,
});

const app = express();

app.use(
  cors({
    preflightContinue: true,
    origin: ["http://localhost:5173", process.env.CLIENT_URL],
  }),
);
app.use(express.json());

connectDB();

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
