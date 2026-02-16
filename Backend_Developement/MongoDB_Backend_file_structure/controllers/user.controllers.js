import User from "../models/user.module";

export const home = (req,res)=>{
    res.send("Hello World")
}

export const create =  async (req,res)=>{
  try {
   let  {name ,age,email, username} = req.body;
  const newUser = await  User.create({
    name,
    age,
    email,
    username
   })
   res.status(201).json({message:"User Craeted"})  // 201: user Created
  } catch (error) {
    res.status(400).json({message:error})  // server error
  }
}

export const read = async (req,res)=>{
  try {
    const users = await User.find()
     return res.status(200).json(users)
  } catch (error) {
     return res.status(400).json({message:"User not found"})
  }
}


export const update = async (req,res)=>{
  try {

    let { name , age } = req.body
    let id = req.params.id
    let user = await User.findByIdAndUpdate(id,{name,age},{new:true})
    return res.status(200).json(user)
  } catch (error) {
    return res.status(400).json({message:"user not found"})
  }
}


export const delette = async (req,res)=>{
  try {
    let { name , age } = req.body
    let id = req.params.id
    let user = await User.findByIdAndUpdate(id,{name,age},{new:true})
    return res.status(200).json(user)
  } catch (error) {
    return res.status(400).json({message:"user not found"})
  }
}