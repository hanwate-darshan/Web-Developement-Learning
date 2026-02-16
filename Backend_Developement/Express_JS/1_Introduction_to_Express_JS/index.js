import express from "express";
const app = express();
const port = 3000;

//app.get(path,handler)
//app.post
//app.put
//app.delete



// Basic Routing
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/home", (req, res) => {
  res.send("Hey You are in Home Page");
});

app.get("/about", (req, res) => {
  res.send("Hey You are in About Page");
});

app.get("/help", (req, res) => {
  res.send("You are in Help Page");
});





// Uses of Slug
app.get("/home/:slug", (req, res) => {
  res.send(`hello intro to ${req.params.slug}`);
});

app.get("/about/:slug", (req, res) => {
  res.send(`hello intro to ${req.params.slug}`);
});

app.get("/help/:slug", (req, res) => {
  res.send(`hello intro to ${req.params.slug}`);
});






// Slug with Second Element
app.get("/home/:slug/:second", (req, res) => {
  res.send(`hello intro to ${req.params.slug} and ${req.params.second}`);
});
app.get("/about/:slug/:second", (req, res) => {
  res.send(`hello intro to ${req.params.slug} and ${req.params.second}`);
});
app.get("/help/:slug/:second", (req, res) => {
  res.send(`hello intro to ${req.params.slug} and ${req.params.second}`);
});

app.get("/darshan", (req, res) => {
  console.log(req.params);
  console.log(req.query);
});



//
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
