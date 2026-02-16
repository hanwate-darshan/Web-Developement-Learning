// How to Connnect Mongo DB using atlas and mongoose

import express from "express";
import mongoose from "mongoose";
const app = express();
const port = 3000;
const mongoURL =
  "mongodb+srv://snapchat12snapgg_db_user:Darshan123@cluster0.g3goiar.mongodb.net/CodeWithDarshan";


const connectDB = async () => {
  try {
    await mongoose.connect(mongoURL);
    console.log("Database is Connected...!!");
  } catch (error) {
    console.log("Database error", error);
  }
};


app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
    connectDB()
  console.log(`Example app listening on port ${port}`);
});







