import { TavilySearch } from "@langchain/tavily";
import express from "express"
import dotenv from "dotenv"
import { GoogleGenAI } from "@google/genai";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { ChatGroq } from "@langchain/groq"
import { Annotation, MemorySaver, MessagesAnnotation, StateGraph } from "@langchain/langgraph";
import { ToolNode } from "@langchain/langgraph/prebuilt";

dotenv.config()
const app = express()
const port = process.env.PORT
app.use(express.json())


const tool = new TavilySearch({
    maxResults: 5,
    topic: "general"
});


const pastMemory = new MemorySaver()


const tools = [tool]
const toolNode = new ToolNode(tools)




const llm = new ChatGroq({
    model: "llama-3.3-70b-versatile",
    temperature: 0.7,
    maxTokens: 100
}).bindTools(tools)

// custom state 
// const state = Annotation.Root({
//     prompt:Annotation,
//     aiMsg:Annotation
// })










const callLLM = async (state) => {
    console.log("State:", state)
    const response = await llm.invoke([
        {
            role: "system",
            content: "You are Nora Ai Assistant. User conversation memory first. Only use tools when the answer requires external real-time information like: weather,news,web search,sports scores, stock prices etc. do not call tools for simple conversation, memory-based questions,greetings or person context"
        },
        ...state.messages
    ])

    return { messages: [response] }
}


const shouldContinue = async (state) => {
    const lastMessage = state.messages[state.messages.length - 1]
    if (lastMessage.tool_calls.length > 0) {
        return "tools"
    } else {
        return "__end__"
    }
}


const graph = new StateGraph(MessagesAnnotation)
    .addNode("agent", callLLM)
    .addNode("tools", toolNode)
    .addEdge("__start__", "agent")

    .addEdge("tools", "agent")
    .addConditionalEdges("agent", shouldContinue)
    .compile({ pastMemory: pastMemory })









// giving role to AI
app.post('/ai', async (req, res) => {
    const { input } = req.body

    const response = await graph.invoke(
        {
            messages: [
                {
                    role: "user",
                    content: input
                }
            ]
        },
        { configurable: { thread_id: "user123" } })
    console.log(response)



    return res.status(200).json({ "ai:": response.messages[response.messages.length - 1].content })
})





// app.post('/ai', async (req, res) => {
//     const {input} = req.body
//     const response = await llm.invoke(input)
//     return res.status(200).json({"ai:":response.content })
// })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})