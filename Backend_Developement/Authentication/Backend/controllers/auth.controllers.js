import generateToken from "../config/token.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const signUp = async (req, res) => {
  try {
    const { firstName, lastName, email, password, userName } = req.body;

    if (!firstName || !lastName || !email || !password || !userName) {
      return res.status(400).json({ message: "send all details" });
    }


   console.log(req.file)

    let existUser = await User.findOne({ email });
    if (existUser) {
      return res.status(400).json({ message: "user already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      userName
    });


    let token;
    try {
        generateToken(user._id)
        
    } catch (error) {
        console.log(error)
    }
  
    res.cookie("token",token,{
        httpOnly:true,
        secure:process.env.NODE_ENVIRONMENT == "production",
        sameSite:"strict",
        maxAge:7*24*60*60*1000
    })

    return res.status(201).json({
      user: {
        firstName,
        lastName,
        email,
        userName
      }
    });
  } catch (error) {
    return res.status(500).json(error);
  }
};


export const  login = async (req,res) =>{
   try {
    const {email , password} = req.body;
    let existUser = await User.findOne({email})
    if(!existUser ){
      return res.status(400).json({message:"User does not exist"})
    }
    
    let match = await bcrypt.compare(password , existUser.password)
    if(!match){
      return res.status(400).json({message:"Incorrect Password"})
    }



    let token;
    try {
        generateToken(existUser._id)
        
    } catch (error) {
        console.log(error)
    }
  
    res.cookie("token",token,{
        httpOnly:true,
        secure:process.env.NODE_ENVIRONMENT == "production",
        sameSite:"strict",
        maxAge:7*24*60*60*1000
    })

    res.status(200).json({})


   } catch (error) {
    return res.status(200).json({
      
      user: {
        firstName:existUser.firstName,
        lastName:existUser.lastName,
        email:existUser.email,
        userName:existUser.userName
      }
    
    })
   }
}


export  const logOut = async (req,res)=>{
     try {
       res.clearCookie("token")
       res.status(200).json({message:"Logout Successfully..!!"})
     } catch (error) {
       return res.status(500).json(error)
     }
}
