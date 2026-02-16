const express = require('express')
const app = express()
const port = 3000
app.use(express.json())  // this is JSON converter. 

let password = "darshan123" 
// custom middleware
app.use((req,res,next)=>{
    if(req.body.password != password){
        res.send("Password does not match.")
    }
    next()
})

app.get('/', (req, res) => {
  res.json({name:"darshan",age:20})

})

app.post('/',(req,res)=>{
  console.log(req.body)
  res.send({success:true})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
