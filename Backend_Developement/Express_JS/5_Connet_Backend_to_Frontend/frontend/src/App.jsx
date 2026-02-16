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
