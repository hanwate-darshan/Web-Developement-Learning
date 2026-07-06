import express from "express";
import dotenv from "dotenv"
import connectDB from "./config/db.js";
import User from "./models/user.models.js";
import Redis from "ioredis";
dotenv.config()

const app = express();
app.use(express.json())

const redis = new Redis(process.env.REDIS_URL)


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
app.get("/get",async (req,res)=>{
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



app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on http://localhost:${PORT}`);
});