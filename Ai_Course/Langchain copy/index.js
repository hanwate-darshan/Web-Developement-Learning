import express from "express"
import dotenv from "dotenv"
import { GoogleGenAI } from "@google/genai";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { ChatGroq } from "@langchain/groq"

dotenv.config()
const app = express()
const port = process.env.PORT
app.use(express.json())


// Google LangChain Model

// const llm = new ChatGoogleGenerativeAI({
//     model: "gemini-3.5-flash"  
// })



// Groq LangChain Model
const llm = new ChatGroq({
    model: "llama-3.3-70b-versatile",
    temperature: 0.7,
    maxTokens: 100
    // maxRetries: 2
})



// giving role to AI
app.post('/ai', async (req, res) => {
    const { input } = req.body
    const response = await llm.invoke([
        {
            role: "system",
            content: "You are a assistant and your name is Nora. If you don't know the answer the answer then don't give incorrect answer"
        },
        {
            role: "human",
            content: input
        }
    ])
    return res.status(200).json({ "ai:": response.content })
})





// app.post('/ai', async (req, res) => {
//     const {input} = req.body
//     const response = await llm.invoke(input)
//     return res.status(200).json({"ai:":response.content })
// })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})