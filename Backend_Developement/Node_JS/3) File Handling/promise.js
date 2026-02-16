import fs from "fs/promises"

let a = await fs.writeFile("darshan.txt","Darshan is a Good boy")
console.log(a)

let b = await fs.readFile("darshan.txt",(e,d)=>{
    console.log(b.toString())
})