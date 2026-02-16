
# MongoDB

## What is MongoDB?

**MongoDB** is a **NoSQL database** that stores data in a **JSON-like format** called **documents** instead of traditional tables and rows.
It is designed for **high performance, scalability, and flexibility**.

---

## Key Features

* 📄 **Document-Oriented**
  Stores data as documents (similar to JSON).

* 🚀 **High Performance**
  Fast read and write operations.

* 📈 **Scalable**
  Supports horizontal scaling using sharding.

* 🔄 **Flexible Schema**
  No fixed structure; fields can vary between documents.

* 🌐 **Cross-Platform**
  Works on Windows, Linux, and macOS.

---

## How MongoDB Stores Data

```
Database
 └── Collection
      └── Document
```

Example document:

```json
{
  "name": "Darshan",
  "role": "Frontend Developer",
  "skills": ["React", "JavaScript", "MongoDB"]
}
```

---

## Why Use MongoDB?

* Easy to work with **JavaScript & Node.js**
* Ideal for **real-time applications**
* Handles **large volumes of data**
* Perfect for **modern web & mobile apps**

---

## Common Use Cases

* Web Applications
* Mobile Applications
* Real-time Analytics
* Content Management Systems
* IoT Applications

---

## MongoDB vs SQL

| MongoDB         | SQL                 |
| --------------- | ------------------- |
| NoSQL           | Relational Database |
| Documents       | Tables              |
| Flexible Schema | Fixed Schema        |
| JSON-like Data  | Rows & Columns      |

---

--------------------------------------------------------------------------------------------------

Here is a **clear `README.md` style explanation** of **Mongoose** with **npm installation**, beginner-friendly:

---

# Mongoose

## What is Mongoose?

**Mongoose** is an **Object Data Modeling (ODM) library** for **MongoDB** and **Node.js**.
It helps developers **define schemas, validate data, and interact with MongoDB easily** using JavaScript objects.

---

## Why Use Mongoose?

* 🧱 Schema-based data modeling
* ✅ Built-in data validation
* 🔗 Easy MongoDB queries
* 🔄 Middleware (hooks)
* 📦 Relationship handling
* 🧠 Cleaner & structured code

---

## How Mongoose Works

```
Node.js App
   ↓
Mongoose
   ↓
MongoDB Database
```

---

## Key Concepts

* **Schema** – Defines structure of documents
* **Model** – Used to create and query documents
* **Document** – Instance of a model

---

## Installation (Using npm)

### Step 1️⃣ Initialize Node Project

```bash
npm init -y
```

### Step 2️⃣ Install Mongoose

```bash
npm install mongoose
```

---

## Connecting to MongoDB using Mongoose

```js
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://username:password@cluster0.mongodb.net/mydb")
  .then(() => console.log("MongoDB connected using Mongoose"))
  .catch(err => console.error(err));
```

---

## Creating a Schema

```js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  age: Number
});

module.exports = mongoose.model("User", userSchema);
```

---

## Creating & Saving Data

```js
const User = require("./User");

const newUser = new User({
  name: "Darshan",
  email: "darshan@example.com",
  age: 21
});

newUser.save()
  .then(() => console.log("User saved"))
  .catch(err => console.error(err));
```

---

## Mongoose vs MongoDB Driver

| Mongoose            | MongoDB Driver    |
| ------------------- | ----------------- |
| ODM                 | Native Driver     |
| Schema-based        | Schema-less       |
| Validation built-in | Manual validation |
| Cleaner syntax      | Low-level         |

---

## Common Use Cases

* MERN stack projects
* Large applications
* Structured data handling
* Production-level apps

---

## Useful Commands

```bash
npm list mongoose
npm update mongoose
```

---

## Official Documentation

[https://mongoosejs.com](https://mongoosejs.com)

---



# MongoDB Atlas

## What is MongoDB Atlas?

**MongoDB Atlas** is a **fully managed cloud database service** provided by MongoDB.
It allows you to **create, manage, and scale MongoDB databases in the cloud** without handling servers.

Atlas runs on cloud platforms like:

* AWS
* Google Cloud
* Microsoft Azure

---

## Why Use MongoDB Atlas?

* ☁️ **Cloud-based** – No local installation needed
* 🔐 **Secure** – Built-in authentication & encryption
* ⚡ **High Availability** – Automatic backups & replication
* 📈 **Scalable** – Easily increase storage & performance
* 🛠️ **Managed Service** – MongoDB handles maintenance

---

## Key Features

* Automated backups
* Global clusters
* Built-in monitoring
* IP whitelisting
* Database users & roles
* Free tier available (M0)

---

## MongoDB Atlas Architecture

```
Application
   ↓
MongoDB Atlas (Cloud)
   ↓
MongoDB Cluster
```

---

## How to Set Up MongoDB Atlas (Step-by-Step)

### 1️⃣ Create an Account

* Go to 👉 [https://www.mongodb.com/atlas](https://www.mongodb.com/atlas)
* Sign up using email or Google account

---

### 2️⃣ Create a New Project

* Click **New Project**
* Enter project name
* Click **Create Project**

---

### 3️⃣ Create a Cluster

* Click **Build a Database**
* Choose **Free (M0)** plan
* Select:

  * Cloud Provider (AWS recommended)
  * Region (nearest to you)
* Click **Create**

⏳ Cluster setup takes 2–3 minutes

---

### 4️⃣ Create Database User

* Go to **Database Access**
* Click **Add New Database User**
* Set:

  * Username
  * Password
* Give role: **Read and Write**
* Save user

---

### 5️⃣ Allow Network Access (IP Whitelist)

* Go to **Network Access**
* Click **Add IP Address**
* Select **Allow Access from Anywhere**
* Save

---

### 6️⃣ Get Connection String

* Go to **Database**
* Click **Connect**
* Choose **Connect your application**
* Copy the connection string:

```txt
mongodb+srv://<username>:<password>@cluster0.mongodb.net/
```

Replace:

* `<username>` → your DB username
* `<password>` → your DB password

---

## Connecting MongoDB Atlas with Node.js

### Install MongoDB Driver

```bash
npm install mongodb
```

### Example Code

```js
const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://username:password@cluster0.mongodb.net/mydb";

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    console.log("Connected to MongoDB Atlas");
  } finally {
    await client.close();
  }
}

run();
```

---

## MongoDB Atlas vs Local MongoDB

| MongoDB Atlas     | Local MongoDB       |
| ----------------- | ------------------- |
| Cloud-based       | Installed on PC     |
| Managed service   | Manual setup        |
| Auto backup       | Manual backup       |
| Scalable          | Limited             |
| Secure by default | Needs configuration |

---

## Use Cases

* MERN stack projects
* Production web apps
* Mobile apps
* SaaS applications
* College projects

---

## Free Tier (M0)

* 512 MB storage
* Shared RAM
* Perfect for learning & practice

---

## Official Docs

[https://www.mongodb.com/docs/atlas/](https://www.mongodb.com/docs/atlas/)

---


---
---
---



# CRUD Operations in MongoDB

## What is CRUD?

**CRUD** stands for:

* **C**reate – Insert data
* **R**ead – Fetch data
* **U**pdate – Modify data
* **D**elete – Remove data

CRUD operations are the **basic database actions** used in all applications.

---

## Prerequisites

* Node.js installed
* MongoDB / MongoDB Atlas
* Mongoose installed

```bash
npm install mongoose
```

---

## Connect to MongoDB

```js
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://username:password@cluster0.mongodb.net/mydb")
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error(err));
```

---

## Create a Schema & Model

```js
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number
});

const User = mongoose.model("User", userSchema);
```

---

## 1️⃣ Create (Insert Data)

### Insert One Document

```js
const user = new User({
  name: "Darshan",
  email: "darshan@gmail.com",
  age: 21
});

user.save();
```

### Insert Multiple Documents

```js
User.insertMany([
  { name: "Amit", email: "amit@gmail.com", age: 22 },
  { name: "Ravi", email: "ravi@gmail.com", age: 23 }
]);
```

---

## 2️⃣ Read (Fetch Data)

### Get All Documents

```js
User.find();
```

### Find One Document

```js
User.findOne({ email: "darshan@gmail.com" });
```

### Find by ID

```js
User.findById("65abc123xyz");
```

---

## 3️⃣ Update (Modify Data)

### Update One

```js
User.updateOne(
  { email: "darshan@gmail.com" },
  { age: 22 }
);
```

### Update Many

```js
User.updateMany(
  { age: { $lt: 23 } },
  { age: 23 }
);
```

### Find & Update

```js
User.findByIdAndUpdate(
  "65abc123xyz",
  { name: "Darshan R" },
  { new: true }
);
```

---

## 4️⃣ Delete (Remove Data)

### Delete One

```js
User.deleteOne({ email: "darshan@gmail.com" });
```

### Delete Many

```js
User.deleteMany({ age: { $gt: 25 } });
```

### Delete by ID

```js
User.findByIdAndDelete("65abc123xyz");
```

---

## CRUD Summary Table

| Operation | Mongoose Method                                |
| --------- | ---------------------------------------------- |
| Create    | save(), insertMany()                           |
| Read      | find(), findOne(), findById()                  |
| Update    | updateOne(), updateMany(), findByIdAndUpdate() |
| Delete    | deleteOne(), deleteMany(), findByIdAndDelete() |

---

## MongoDB (Shell) CRUD Example

### Create

```js
db.users.insertOne({ name: "Darshan", age: 21 })
```

### Read

```js
db.users.find()
```

### Update

```js
db.users.updateOne(
  { name: "Darshan" },
  { $set: { age: 22 } }
)
```

### Delete

```js
db.users.deleteOne({ name: "Darshan" })
```

---

# file structure of backend

backend/
│
├── node_modules/
│
├── src/
│   ├── config/
│   │   ├── db.js                # Database connection
│   │   └── env.js               # Environment variables config
│   │
│   ├── models/
│   │   └── user.model.js        # Mongoose schemas
│   │
│   ├── controllers/
│   │   └── user.controller.js   # Request logic (CRUD)
│   │
│   ├── routes/
│   │   └── user.routes.js       # API routes
│   │
│   ├── middlewares/
│   │   ├── auth.middleware.js   # Authentication middleware
│   │   └── error.middleware.js  # Error handling
│   │
│   ├── services/
│   │   └── user.service.js      # Business logic (optional)
│   │
│   ├── utils/
│   │   └── apiResponse.js       # Helper functions
│   │
│   ├── app.js                   # Express app setup
│   └── server.js                # Server start file
│
├── .env                         # Environment variables
├── .gitignore
├── package.json
├── README.md
