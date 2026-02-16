// Query Parameter 

// localhost:5000/search?name=darshan&age=20
// In Console Output wil be : { name: 'darshan', age: '20' }

const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/search', (req, res) => {
    console.log(req.query)
  res.send('My name is Darshan')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
