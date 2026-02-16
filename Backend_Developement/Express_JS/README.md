## Express JS 

- Express JS is a framework of *Node js*
- Express JS is a minimal and flexible web application framework for node js.
- It provide a robust set of features for building single page , multipage and hybrid web application. ( Single page application , multi page application , hybrid page application)
- express js simplifying server side coding providing a layer of fundamental web application features.

- Express JS ----->Express.js is a Node.js framework that helps you build servers and APIs easily   and fast.

----------------------------------------------------------------------------------------------------
# 🟦 What is Express.js?
----------------------------------------------------------------------------------------------------

**Express.js is a fast, lightweight, and flexible web framework for Node.js** used to build backend applications and REST APIs.

It makes it easier to handle:

* server requests
* routing
* middleware
* APIs
* authentication
* database operations

Instead of writing long Node.js code, Express gives you simple methods to build servers quickly.

----------------------------------------------------------------------------------------------------
# Why Express.js is Used?
----------------------------------------------------------------------------------------------------
Express.js is popular because:

* ✔ Super fast and easy
* ✔ Helps create APIs quickly
* ✔ Has a powerful routing system
* ✔ Has built-in middleware
* ✔ Supports JSON easily
* ✔ Works perfectly with MongoDB, MySQL, Firebase
* ✔ Huge ecosystem and community
* ✔ Most MERN stack apps depend on Express

----------------------------------------------------------------------------------------------------
# Basic Example
----------------------------------------------------------------------------------------------------

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});



----------------------------------------------------------------------------------------------------
#  Common Features of Express.js
----------------------------------------------------------------------------------------------------
1. Routing
    
    app.get("/about", (req, res) => {
    res.send("About Page");
    });


 2. Middleware

     app.use(express.json());


 3. Handling API Requests

    app.post("/login", (req, res) => {
    res.json({ message: "Login successful" });
    });


 4. Connect with Database

     MongoDB + Express is most common (MERN stack).

 5. Static File Serving

     app.use(express.static("public"));



----------------------------------------------------------------------------------------------------
# Serving Static Files in Express JS :
----------------------------------------------------------------------------------------------------

Express.js allows you to serve static files such as:

- HTML
- CSS
- JavaScript
- Images
- Videos
- PDFs

  Static files are files that do NOT change dynamically.


## How to Serve File 

- Step 1: Create a public folder
 
project/
│── public/
│    ├── index.html
│    ├── style.css
│    └── script.js
│── app.js


- Step 2: Use express.static() Middleware

           const express = require("express");
           const app = express();

           // Serve static files
           app.use(express.static("public"));

           app.listen(3000, () => {
             console.log("Server running on port 3000");
           });

# How to Access Static Files

If your server is running on:
 `http://localhost:3000`

Then the files will load like:

| File       | URL           |
| ---------- | ------------- |
| index.html | `/index.html` |
| style.css  | `/style.css`  |
| script.js  | `/script.js`  |

Example:  http://localhost:3000/style.css

    

# Using a Custom Static Folder Path

- You can also give a **custom route name**.

app.use("/static", express.static("public"));


Now access files like:
```
http://localhost:3000/static/style.css
```

# Serve Multiple Static Folders

app.use(express.static("public"));
app.use(express.static("uploads"));
app.use(express.static("assets"));

# Send Static HTML File as Home Route

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});


# Why Use express.static()?

* Faster response
* No need to write routes for every file
* Best for Frontend + Backend projects
* Used in MERN projects, admin dashboards, static websites



# In Short:


# Serving Static Files in Express.js
Express.js provides built-in middleware `express.static()` to serve static files such as HTML, CSS, JS, and images.

# Usage:
app.use(express.static("public"));


All files inside the **public/** folder are now directly accessible.

# Example File Structure:
    public/
     ├── index.html
     ├── style.css
     └── script.js


# Example Access:

* `/index.html`
* `/style.css`
* `/script.js`

----------------------------------------------------------------------------------------------------

----------------------------------------------------------------------------------------------------

- res.download() : Prompt a file to be Downloaded.
- res.end() : end the response process.
- res.json() : send a JSON response.
- res.jsonp() : send a JSON response with JSONP support.
- res.redirect() : redirect a request.
- res.render() : Render a view template.
- res.send() : send a response of various types.
- res.sendFile() : send a file as an octet strean.



----------------------------------------------------------------------------------------------------
# Middleware JS
----------------------------------------------------------------------------------------------------

# 1.What is Middleware in Express.js?

**Middleware** is a function that runs *between* the request and response.

 Client → **Middleware** → Route → Response

Middleware can:
* check data
* log requests
* verify token
* modify request body
* handle errors

# Example Middleware

app.use((req, res, next) => {
  console.log("Middleware running...");
  next(); // move to next step
});


# Built-in Middleware

app.use(express.json()); -- This allows API to accept JSON data.

# 2. What is Routing in Express.js?

Routing means handling different URLs.

Examples:

# GET route

app.get("/", (req, res) => {
  res.send("Home Page");
});


# POST route


app.post("/login", (req, res) => {
  res.send("Login API");
});


# Multiple routes

app.get("/about", ...);
app.get("/contact", ...);
app.get("/users", ...);




# 3. Express.js Folder Structure 

Use this structure for real projects:

project/
│── node_modules/
│── src/
│   │── routes/
│   │   └── userRoutes.js
│   │── controllers/
│   │   └── userController.js
│   │── models/
│   │   └── userModel.js
│   │── app.js
│── package.json
│── .gitignore


This is the structure used in MERN Stack.

# 4. Express.js CRUD API Example**

# Create basic server


const express = require("express");
const app = express();
app.use(express.json());


# CRUD routes


// Read
app.get("/users", (req, res) => {
  res.send("Get all users");
});

// Create
app.post("/users", (req, res) => {
  res.send("User created");
});

// Update
app.put("/users/:id", (req, res) => {
  res.send("User updated");
});

// Delete
app.delete("/users/:id", (req, res) => {
  res.send("User deleted");
});


# Start server


app.listen(3000, () => {
  console.log("Server is running...");
});



# 5. How Express Works (Simple Flow)

Client → Request → Middleware → Route → Controller → Database → Response → Client



# 6. Why Express is Used in MERN Stack?

Because it is:
✔ Fast
✔ Lightweight
✔ Easy routing
✔ Works smoothly with MongoDB
✔ Supports JSON
✔ Perfect for APIs


----------------------------------------------------------------------------------------------------

----------------------------------------------------------------------------------------------------

