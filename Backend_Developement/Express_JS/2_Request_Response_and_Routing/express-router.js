// Express Router 

const express = require('express')
const router = express.Router()


router.use(timeLog)

// define the home page route
router.get('/', (req, res) => {
  res.send('Birds home page')
})
// define the about route
router.get('/blog', (req, res) => {
  res.send('About blogs')
})



module.exports = router
