// req.params 

// localhost:4000/user/4 jab ham '4' likhe toh four ka deta ana chahiye hame aisa karna hai..

const express = require('express')
const app = express()
const port = 4000


let userData=[
  {
    "id": "1",
    "name": "Ava Thompson",
    "age": 14,
    "grade": "8th",
    "email": "ava.thompson@example.com"
  },
  {
    "id": "2",
    "name": "Liam Rodriguez",
    "age": 15,
    "grade": "9th",
    "email": "liam.rodriguez@example.com"
  },
  {
    "id": "3",
    "name": "Mia Johnson",
    "age": 13,
    "grade": "7th",
    "email": "mia.johnson@example.com"
  },
  {
    "id": "4",
    "name": "Noah Patel",
    "age": 16,
    "grade": "10th",
    "email": "noah.patel@example.com"
  },
  {
    "id": "5",
    "name": "Sophia Kim",
    "age": 14,
    "grade": "8th",
    "email": "sophia.kim@example.com"
  }
]


app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/user', (req, res) => {
  res.json(userData)
})
app.get('/user/:id', (req, res) => {
    let id = req.params.id;
    // console.log(req.params.id)
    let existingUser = userData.find((userNumber)=>{userNumber.id == id })
  res.json(existingUser)

  if (!existingUser) {
    return res.send("404 not found")
  }

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


// output :
// localhost:4000/user/1    
       
//     "id": "1",
//     "name": "Ava Thompson",
//     "age": 14,
//     "grade": "8th",
//     "email": "ava.thompson@example.com"



// if 'id' is not valid then it shows this error

// localhost:4000/user/6 
// 404 not found