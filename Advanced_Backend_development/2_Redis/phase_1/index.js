import express from "express";
import dotenv from "dotenv"
import connectDB from "./config/db.js";
import User from "./models/user.models.js";
import Redis from "ioredis";
import rateLimitter from "./middleware/rate.limit.js";
dotenv.config()

const app = express();
app.use(express.json())

export  const redis = new Redis(process.env.REDIS_URL)


const PORT = process.env.PORT;

app.get("/", (req, res) => {
    res.send("Hello Express!");
});


// user creation api
app.post("/create",async (req,res)=>{

    const {name ,email , password} = req.body;
    await redis.del("user:all")
    const user = await User.create({
          name,
          email,
          password
    })

    return res.json(user)
})

// without redis API

// Rate Limitter middleware
app.get("/get",rateLimitter,async (req,res)=>{
    const user = await User.find({}) // two users are fetch
    return res.json(user)
})


//with REDIS API
app.get("/get-with-redis",async (req,res) => {
    //redis
    const cached= await redis.get("user:all")

    if(cached){
        const user = JSON.parse(cached)
        return res.json(user)
    }

    //database
    const user = await User.find({})

    //data store 
    await redis.set("user:all",JSON.stringify(user))


    return res.json(user)
})



// redis for OTP
// send otp
app.post("/send-otp",async (req,res)=>{
    const {email} = req.body


    const otp = Math.floor(100000 + Math.random()*900000).toString()

    await redis.set(`otp:${email}`,otp,"EX",30)
    
    return res.json({otp})



})

// verfiy Otp 

app.post("/verify-otp",async (req,res) => {
    const {email} = req.body
    const cachedOTP = await redis.get(`otp:${email}`)

    if(!cachedOTP){
        return res.status(400).json({"message":"otp not found or has be expired.."})
    }

    if(cachedOTP != otp){
        return res.status(400).json({"message":"Incorrect OTP"})
    }

    // deleting otp
    await redis.del(`otp:${email}`)

    return res.json({message:"OTP verified"})


    return  res.json({otp})
})









app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on http://localhost:${PORT}`);
});


