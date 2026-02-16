# RESTful API (Representational State Transfer ) –

- A RESTful API is a way for applications to communicate with
each other over the internet using standard HTTP requests
like GET, POST , PUT and DELETE.

- Client ( ex. A mobile app or Website) sends a request.

- Server receives the request and processes it.

- Server sends back a response ( usually in JSON format )


# CORS (Cross Origin Resource Sharing) in express JS –

- CORS is a security feature in web browsers that prevents
requests from different origins unless explicitly allowed by
the server.

- Same-origin Policy restricts requests from different origins (
protocol, domain, or port )

- CORS allows servers to specify who can access their
resources.

 for installing cors use---->> "npm i cors"



 # Fetch in API using fetch():


 ```js
async function getRes() {
  const res = await fetch("http://localhost:3000/");
  let data = await res.json();
  console.log(data);
  data.then((e) => {
    console.log(e);
  })
  .catch(() => {
    console.log(e);
  });
}
```




#  **What is Axios?**

**Axios is a popular JavaScript library used to make HTTP requests from both browser and Node.js.**
It helps you communicate with APIs (backend servers) easily.

Axios is used to send:

* GET requests
* POST requests
* PUT requests
* DELETE requests
* and more…



# ⭐ **Why Axios is Used?**

Axios is powerful because:

* ✔ Easy to use (simpler than `fetch()`)
* ✔ Supports old browsers
* ✔ Automatically converts JSON
* ✔ Handles errors clearly
* ✔ Supports request & response interceptors
* ✔ Supports async/await
* ✔ Used in React, Vue, Node.js, Express, frontend & backend

---

# 🧠 **Axios in One Line:**

👉 **Axios is a library that helps you send API requests easily.**

---

# 🔧 **Installing Axios**

### 👉 For Node.js / Express / Backend:

```bash
npm install axios
```

### 👉 For Browser (CDN):

```html
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
```

### 👉 For React:

```bash
npm install axios
```

---

# 🟢 **Axios Basic Examples**

## ✔ GET Request

```js
const axios = require("axios");

axios.get("https://api.example.com/users")
  .then(res => console.log(res.data))
  .catch(err => console.log(err));
```

---

## ✔ POST Request

```js
axios.post("https://api.example.com/login", {
  username: "darshan",
  password: "1234"
})
.then(res => console.log(res.data))
.catch(err => console.log(err));
```

---

## ✔ Using Async/Await (Recommended)

```js
async function fetchUsers() {
  try {
    const res = await axios.get("https://api.example.com/users");
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
}
```

---

# 📄 **README.md Version (Copy-Paste)**

````
## What is Axios?
Axios is a promise-based HTTP client used in JavaScript to make API requests from both browser and Node.js. It simplifies sending GET, POST, PUT, and DELETE requests and automatically handles JSON data.

# Installation:
npm install axios

# Example (GET Request):

```js
axios.get("https://api.example.com/data")
  .then(res => console.log(res.data));
````




# Axios ( virtual coding)

```js
 axios.get("http://localhost:3000/")
    .then((e)=>{
      console.log(e)   // for getting data print -----> ( e.data )
      console.log(e.data)  // {name: 'Darshan', rollno: 20}
      console.log(e.data.name) // Darshan
    })
    .catch((e)=>{
      console.log(e)
    })
  }
```  

// suppose hame all origin se request chahiye toh ham ye use kar sakte hai-----> app.use(cors()) 

- suppose hame specific origin se request chahiye toh hame ye use kar sakte hai

```js
app.use(cors({
    "origin":"http://localhost:5173"  // only iss origin se jo request ani wali hai wo...request accept hoga.
}))
```

# Example

```js
    
const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

// app.use(cors())   // iski help se ham kisi bhi origin and kisi ke bhi request ko accept kar sakta hai 
app.use(cors({
    "origin":"http://localhost:5173"  // only iss origin se jo request ani wali hai wo...request accept hoga.
}))

app.get('/', (req, res) => {
  res.json({name:"Darshan",rollno:20})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



```

## code for this above file

- app.jsx (frontend)

```js

import React from 'react'
import axios from 'axios'

function App() {

 async function getRes(){
//     const res =  await fetch("http://localhost:3000/")
//     let data = await res.json()
//     console.log(data)
    // data.then((e)=>{
    //   console.log(e)
    // })
    // .catch(()=>{
    //   console.log(e)
    // })
    axios.get("http://localhost:3000/")
    .then((e)=>{
      console.log(e)   // for getting data print -----> ( e.data )
      console.log(e.data)  // {name: 'Darshan', rollno: 20}
      console.log(e.data.name) // Darshan
    })
    .catch((e)=>{
      console.log(e)
    })
  }

  

  return (
    <div>
      <button onClick={()=>getRes()}>Send</button>

      
    </div>
  )
}
export default App
```

- index.js (backend) Express

```js
  const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

// app.use(cors())   // iski help se ham kisi bhi origin and kisi ke bhi request ko accept kar sakta hai 
app.use(cors({
    "origin":"http://localhost:5173"  // only iss origin se jo request ani wali hai wo...request accept hoga.
}))

app.get('/', (req, res) => {
  res.json({name:"Darshan",rollno:20})
})




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

```

----------------------------------------------------------------------------------------------------
# How to Send Frontend Data to Backend 
----------------------------------------------------------------------------------------------------

- app.jsx (frontend) by React JS

```js
   
import React, { useState } from 'react'
import axios from 'axios'

function App() {

  const [username, setUsername] = useState('')
  const [age, setAge] = useState('')
  const [city, setCity] = useState('')

  async function getRes() {
    axios.post("http://localhost:3000/", {
      username: username,
      age: age,
      city: city
    })
    .then((res) => {
      console.log("Response:", res.data);
    })
    .catch((err) => {
      console.error("Error:", err);
    })
  }

  return (
    <div>
      <button onClick={getRes}>Send</button>

      <h1>Sending Form Details to the Backend</h1>

      <input 
        type="text" 
        placeholder="username"  
        value={username} 
        onChange={(e) => setUsername(e.target.value)}
      />

      <input 
        type="number" 
        placeholder="age" 
        value={age} 
        onChange={(e) => setAge(e.target.value)}
      />

      <input 
        type="text" 
        placeholder="city" 
        value={city}  
        onChange={(e) => setCity(e.target.value)}
      />

      <button onClick={getRes}>Click me</button>
    </div>
  )
}

export default App


```


- index.js ( backend ) by express js

```js
  const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000


app.use(cors({
    "origin":"http://localhost:5173" 
}))
app.use(express.json())

app.get('/', (req, res) => {
  res.json({name:"Darshan",rollno:20})
})

app.post('/', (req, res) => {
    console.log(req.body)
  res.send({success:true})
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

```