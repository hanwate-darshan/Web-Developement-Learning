const express = require('express')
const app = express()
const port = 3000
const birds = require('./birds')



app.use('/blog', birds)

// create a folder ( routes ) -----> create a file ( blog.js , about.js , help.js )

app.get('/', (req, res) => {
  res.send('Hello World!')
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
