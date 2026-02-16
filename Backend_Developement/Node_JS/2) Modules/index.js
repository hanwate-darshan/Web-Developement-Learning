//this is a type of "common js"(Default type) -------->>
// const http = require('node:http');
// const fs = require('fs')

//this is a type of "module" ------->>
// import http from "http";
// import fs from "fs";

// const hostname = '127.0.0.1';
// const port = 3000;
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   res.end('<h1> My Name is Darshan </h1>');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

// # CommonJS -----> " Required Concept ( Default concept ) "
// # Module -----> " Import , Export "




// **** Common JS Module ****

// const { addToCart, myfuntion } = require("./cartModule").default;
// console.log("this is a first function ", addToCart());
// console.log("this is a second function", myfuntion());




// **** Module Method ****

// "type":"Module"

import  { a,b,c,d,e } from "./module.js"//named exports

import obj from "./module.js"  // Default export

console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)

console.log(obj)


