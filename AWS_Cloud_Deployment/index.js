import express from "express"
import dotenv from "dotenv"
dotenv.config();
const app = express()
const port = process.env.PORT

app.get("/app",  (req,res) => {
    return res.status(200).json({message:"all is well"})
})

app.get("/",  (req,res) => {
    return res.status(200).json({message:"Hello Darshan"})
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})