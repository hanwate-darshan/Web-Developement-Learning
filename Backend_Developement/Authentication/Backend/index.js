


import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRouter from "./Routes/auth.routes.js";
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());


app.use("/api", authRouter);

app.listen(port, () => {
  connectDB();
  console.log(`Server running on port ${port}`);
});
