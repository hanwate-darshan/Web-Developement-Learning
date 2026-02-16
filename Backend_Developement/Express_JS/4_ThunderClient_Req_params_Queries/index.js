const express = require('express')
const app = express()
const port = 3000

//middleware

// app.use(express.json())  // middleware ki help se ham server ko bata rahe hai kis type ka data hai. yaha per JSON() type ka data hai ye ham bata rahe hai..
app.use(express.text())  // yaha per ham bata rahe hai ki ham text data use karne wale hai..
app.get('/', (req, res) => {
  res.json({Name:"Darshan",rollno:12})
})
app.post('/', (req, res) => {  // In Thunder Client tap the post Button
    // We can also send data in body
    let body = req.body
    console.log(body)   // console.log(req.body)
  res.send("Hello World")   
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
