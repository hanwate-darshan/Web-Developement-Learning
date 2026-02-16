// How to Connnect Mongo DB using atlas and mongoose

import express from "express";
import mongoose from "mongoose";
import User from "./models/user.model.js";
const app = express();
const port = 3000;
const mongoURL =
  "mongodb+srv://snapchat12snapgg_db_user:Darshan123@cluster0.g3goiar.mongodb.net/CodeWithDarshan";

// Convert data into json format
 app.use(express.json())


const connectDB = async () => {
  try {
    await mongoose.connect(mongoURL);
    console.log("Database is Connected...!!");
  } catch (error) {
    console.log("Database error", error);
  }
};


app.get("/", (req, res) => {
  res.send("Hello World!");
});





// Post user route
app.post("/create", async (req,res)=>{

  try {
   let  {name ,age,email, username} = req.body;
  const newUser = await  User.create({
    name:name,
    age:age,
    email:email,
    username:username
   })

   res.status(201).json({message:"User Craeted"})  // 201: user Created

  } catch (error) {

    res.status(400).json({message:error})  // server error

  }

})



// read operation --> read all the operation

app.get("/read", async (req,res)=>{
  try {

    const users = await User.find()
    // eq operator 
    // const user = await User.find({name:{$eq:"Darshan"}})
    // not eq operator 
    // const users = await User.find({name:{$ne:"Darshan"}})
    // less than
    // const users = await User.find({age:{$lt:20}})
    // const users = await User.find({age:{$gt:20}})
    // and , or , not operator 
    // const users = await User.find({$and :[{age:{$gt:19}},{name:{$eq:"Darshan"}}]})

     return res.status(200).json(users)
  } catch (error) {
     return res.status(400).json({message:"User not found"})
  }
})


// read operation --> only one operation

app.get("/read/:username", async (req,res)=>{
  try {
    const users = await User.findOne({username:req.params.username})
    return res.status(200).json(users)
  } catch (error) {
    return res.status(400).json({message:"user not found"})
  }
})


// Update 
app.put("/update/:id", async (req,res)=>{
  try {

    let { name , age } = req.body
    let id = req.params.id
    let user = await User.findByIdAndUpdate(id,{name,age},{new:true})
    return res.status(200).json(user)
  } catch (error) {
    return res.status(400).json({message:"user not found"})
  }
})

// update by specific name
// app.put("/update", async (req,res)=>{
//   try {

//     let { name , age , email} = req.body
//     let id = req.params.id
//     let user = await User.updateOne({email},{name,age},{new:true})
//     return res.status(200).json({message:"user updated"})
//   } catch (error) {
//     return res.status(400).json({message:"user not found"})
//   }
// })


app.delete("/delete/:id",async (req,res)=>{
   try {

     let id =  req.params.id
     let user = await User.findByIdAndDelete(id)
    return res.status(200).json(user)
   } catch (error) {
    return res.status(200).json({message:"user not found"})
   }


})


app.listen(port, () => {
    connectDB()
  console.log(`Example app listening on port ${port}`);
});







