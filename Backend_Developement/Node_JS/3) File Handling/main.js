import fs, { writeFile, readFile, appendFile } from "fs";   
console.log(fs)

// Create File :
// fs.writeFileSync("file.txt","I can create a 'file.txt' file you can check now..")
console.log("Starting")
//This Runs Asynchronous
writeFile("write.txt","This is a second file..",()=>{
    console.log("Done")
})
console.log("Ending")


// READ File : 
readFile("file.txt",(error,data)=>{
    console.log(error,data.toString())
})

// Apend File : 
appendFile("write txt"," Write Karo File karo",(e,d)=>{
    console.log(d.toString())
})