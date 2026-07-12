import express from "express"
import dotenv from "dotenv"
import { GoogleGenAI } from "@google/genai";

dotenv.config()
const app = express()
const port = process.env.PORT
app.use(express.json())

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
})


app.post("/ai", async (req, res) => {
    const { input } = req.body
    const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        // contents:input
        contents: [
            {
                role: "system",
                parts: [{ text: "you are a assistant and your name is Nora. If you don't know answer then don't give incorrect answer" }]

            },
            {
                role: "user",
                parts: [{ text: input }]

            }
        ]
    })

    return res.status(200).json({ "ai:": response.text })
})





// Gemini Integration
// const main = async () => {
//     const response = await ai.models.generateContent({
//         model:"gemini-3.5-flash",
//         contents:"hey"
//     })

//     console.log(response.text)
// }

// main()




app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})