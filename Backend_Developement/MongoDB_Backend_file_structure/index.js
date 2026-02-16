

dotenv.config()
import express from "express";

import dotenv from "dotenv"

import connectDB from "./config/db.js";
import userRouter from "./routes/user.routes.js";
const app = express();

const port = process.env.PORT 


app.use(express.json())

app.use("/",userRouter)

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
    connectDB()
  console.log(`Example app listening on port ${port}`);
});







