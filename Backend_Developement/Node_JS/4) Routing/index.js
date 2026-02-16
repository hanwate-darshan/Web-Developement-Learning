
import http from 'http';

const PORT = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  

  if(req.url == "/"){
    res.end("Hey My Name is Darshan")
  }
  else if(req.url == "/home"){
    res.end("Welcome to My Home page ")
  }
  else if(req.url == "/about"){
    res.end("This is a about web page")
  }
  else if(req.url == "/contact"){
    res.end("this is a contact web page")
  }
  else{
    res.end("404 page not found")
  }


});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
