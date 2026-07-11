import express from "express"
import dotenv from "dotenv"
import proxy from "express-http-proxy"
dotenv.config()
const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
  res.send('Hello from backend Gateway')
})

app.use("/auth",proxy("http://localhost:8001"))
app.use("/order",proxy("http://localhost:8002"))
app.use("/product",proxy("http://localhost:8003"))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})