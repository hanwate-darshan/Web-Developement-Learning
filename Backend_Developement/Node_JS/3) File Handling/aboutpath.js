import path from "path"

let mypath = " C:\\Users\\darsh\\OneDrive\\Desktop\\Web Developement ( Learning )\\Backend Developement\\Node JS\\3) File Handling\\darshan.txt"
console.log(path.extname(mypath))  //.txt
console.log(path.dirname(mypath))  //  C:\Users\darsh\OneDrive\Desktop\Web Developement ( Learning )\Backend Developement\Node JS\3) File Handling
console.log(path.basename(mypath)) // darshan.txt