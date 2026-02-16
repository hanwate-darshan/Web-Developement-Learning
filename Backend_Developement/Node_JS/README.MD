# Node Js
1. NodeJS is a open source, cross flatform runtime environment for executing javascript code outside of a browser.
2. Built on Chrome's V8 engine.
3. V8 is written in C++ for speed.
4. V8 + Backend Feature = NodeJS.


----------------------------------------------------------------------------------------------------
# What is Node.js?
----------------------------------------------------------------------------------------------------


**Node.js is a JavaScript runtime built on Chrome’s V8 engine** that allows developers to run JavaScript **on the server side**.
It is used to build fast, scalable, and efficient backend applications.

Node.js enables you to handle server requests, connect databases, build REST APIs, and manage backend logic using JavaScript.


# ⚡ **Features of Node.js**

## 🚀 1. **Asynchronous & Non-Blocking I/O**

Node.js works on an event-driven model which makes it super fast.
It does not wait for operations to complete and handles multiple requests simultaneously.

## ⚡ 2. **Single-Threaded but Highly Scalable**

Even though Node.js uses a single thread, its event loop mechanism allows it to scale easily for thousands of users.

## 🧠 3. **Built on V8 Engine**

Node.js runs using Google Chrome’s V8 JavaScript engine, making code execution extremely fast and efficient.

## 📦 4. **Huge NPM Ecosystem**

Node Package Manager (npm) has **over 1 million+ packages** which help you add functionality quickly (e.g., Express, Mongoose, JWT, Multer).

## 🌐 5. **Cross-Platform**

You can run Node.js on Windows, Mac, and Linux without changes.

## 🔐 6. **Supports Full-Stack JavaScript**

Frontend + Backend = Same language (JavaScript)
This makes development faster and easier.

## 📡 7. **Perfect for Real-Time Applications**

Ideal for apps like:

* Chat applications
* Live notifications
* Live streaming
* Gaming servers

## 🛠️ 8. **Highly Extensible**

You can easily integrate APIs, databases, file systems, and third-party libraries.

## 🔄 9. **JSON Friendly**

Node.js works perfectly with JSON, making it ideal for REST APIs and NoSQL databases like MongoDB.

## 💡 10. **Fast Development with Express.js**

Express is a minimal and flexible framework that simplifies backend coding in Node.js.



----------------------------------------------------------------------------------------------------
## NPM initailization commond
----------------------------------------------------------------------------------------------------


# 🟢 **1. What is `package.json`?**

`package.json` is the **heart of your Node.js project**.
It stores:

* Project name & version
* Dependencies (npm packages)
* Scripts (start, dev, test)
* Project author
* License
* Entry file (index.js/app.js)

Without this file, Node.js project cannot track packages.



# 📦 **2. NPM Initialization Commands**

### ✔ **Fast initialization (recommended)**

```bash
npm init -y
```

Creates a default `package.json` instantly.

---

### ✔ **Manual initialization**

```bash
npm init
```

Asks questions like:

* Project name
* Description
* Entry point
* Author
* License



----------------------------------------------------------------------------------------------------
# 🧪 ** How to Start a Node.js Project (Step-by-Step)**
----------------------------------------------------------------------------------------------------


### **Step 1 — Create folder**

```bash
mkdir myproject
cd myproject
```

### **Step 2 — Initialize NPM**

```bash
npm init -y
```

Now you will see:

```
package.json
```

### **Step 3 — Create entry file**

```bash
touch index.js
```

(Windows users can use → `type nul > index.js`)

### **Step 4 — Run the file**

```bash
node index.js
```

---

# ⚙ **4. How to Install npm packages**

### ✔ Install Express

```bash
npm install express
```

### ✔ Install Nodemon (dev dependency)

```bash
npm install --save-dev nodemon
```

---

# 🚀 **5. Add Scripts in package.json**

### Example:

```json
"scripts": {
  "start": "node index.js",
  "dev": "nodemon index.js"
}
```

Now run:

```bash
npm run start
```

Or for auto-restart:

```bash
npm run dev
```

----------------------------------------------------------------------------------------------------
## How to Run node JS file 
----------------------------------------------------------------------------------------------------

npm i nodemon
nodemon file_name;


Nodemon package
- with the help of this It automatically run code .
- npm i -g nodemon
- npm nodemon app.js
- nodemon file_name;


----------------------------------------------------------------------------------------------------
## Module in js
----------------------------------------------------------------------------------------------------

# What is a Module in JavaScript?

A module is a file that contains reusable code.
Instead of writing everything in one file, you can break your code into smaller files and use them anywhere.


A module = a separate JS file whose functions/variables you can export and import.

⭐ Why do we use Modules?
     -To keep code clean
     -To reuse functions
     -To avoid rewriting code
     -To make big projects easier to manage


# Types of Module 

- 1) Core Module
     - It is Built in module Provided by NodeJS such as "fs" , "http" path etc.

- 2) Local Module
     - It is Custom module created by developers and located within the project (custom modele) such as "import" , "export".

- 3) Third Party Module
     - Modules installs via npm ( node package manager ) using npm install.


     # CommonJS -----> " Required Concept ( Default concept ) "
       example : - const http = require("http")
                 - const fs = require("fs")
     # Module -----> " Import , Export "
       example : - import http from "http"
                 - import fs from "fs"
     

-----------------------------------------------------------------------------------------------
## File Handling and FS Module
-----------------------------------------------------------------------------------------------

Node.js provides built-in modules that help you work with files and directories.Two of the most important modules are:

 # fs → File System

 # path → Path utilities

You don’t need to install these modules.
You can directly use them with require().

 1. FS Module (File System)

The fs module allows you to work with files such as:

✔ creating files
✔ reading files
✔ updating files
✔ deleting files
✔ working with directories

👉 Importing FS module
const fs = require("fs");

⭐ Most Common FS Methods
  
  NOTE : This All File Run Synchrounsly

✔ 1. Write File
fs.writeFileSync("test.txt", "Hello World");

✔ 2. Read File
const data = fs.readFileSync("test.txt", "utf8");
console.log(data);

✔ 3. Append File
fs.appendFileSync("test.txt", "\nNew Line Added");

✔ 4. Delete File
fs.unlinkSync("test.txt");

✔ 5. Create Folder
fs.mkdirSync("myFolder");

✔ 6. Read Folder
const files = fs.readdirSync("myFolder");
console.log(files);

----------------------------------------------------------------------------------------------------
## Routing in Node JS
----------------------------------------------------------------------------------------------------

- Routing is the process of defining how an application responds to different client based on the   URL ( or Routes).
- Express JS simplifies route Creation. 
- Express Js Creation