

// node --version = it's shows version of Node JS
// npm --version = it's show version of NPM

// How to run Our Program File ----> node filename.js

// how to install node module----->> npm i


const http = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});