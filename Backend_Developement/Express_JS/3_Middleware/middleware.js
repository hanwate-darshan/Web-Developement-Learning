const express = require('express')
const app = express()
const port = 3000

// Middleware

app.use((req,res,next)=>{
  console.log('m1')
  next()
})

app.use((req,res,next)=>{
  console.log('m2')
  next()
})

app.use((req,res,next)=>{
  console.log('m3')
  next()
})


app.use((req,res,send)=>{
  console.log(`${Date.now()} is a ${req.method} method`)
})

// Routes

app.get('/', (req, res) => {
  res.send('Hello World !')
})

app.get('/user', (req, res) => {
  res.send('User !')
})

app.get('/profile', (req, res) => {
  res.send('profile page !')
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
