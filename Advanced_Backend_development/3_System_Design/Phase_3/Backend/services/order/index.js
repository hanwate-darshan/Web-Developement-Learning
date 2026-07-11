import express from "express"
import dotenv from "dotenv"
dotenv.config();
const app = express()

const port = process.env.PORT;

app.get('/', (req, res) => {
  res.send('Hello from Order Service')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
