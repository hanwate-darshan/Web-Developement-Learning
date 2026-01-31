
import dp1 from "../assets/dp1.jpg";
import React, { useState, useContext, useRef } from "react";


import { dataContext } from "../context/UserContext.jsx";

import axios from "axios"
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  

    let {serverUrl} = useContext(dataContext)
    let navigate = useNavigate()

    let file = useRef()
    const [firstName, setfirstName] = useState("")
    const [lastName, setlastName] = useState("")
    const [userName, setuserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [frontendImage, setFrontendImage] = useState(dp1)
    const [backendImage, setBackendImage] = useState(null)
    
    function handleImage(e){
      let file = e.target.files[0];
      setBackendImage(file)

      let image = URL.createObjectURL(file)
      setFrontendImage(image)
    }

    const handleSignUp = async (e) =>{
        e.preventDefault()

        try {
            let formdata = new FormData()
            formdata.append("firstName",firstName)
            formdata.append("lastName",lastName)
            formdata.append("userName",userName)
            formdata.append("email",email)
            formdata.append("password",password)
    
            if(backendImage){
              formdata.append("profileImage",backendImage)
            }

            let data = await axios.post(serverUrl + "/api/signup", formdata
                , {withCredentials:true},
                Headers:{"Content-Type":"multipart/form-data"})
            console.log(data)
        } catch (error) {
            console.log(error.message);
        }
    }
    

  return (
    <div className="w-full h-screen bg-linear-to-br from-black via-gray-900 to-black flex items-center justify-center">
      <div className="w-[92%] max-w-md bg-gray-900/90 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-800 px-6 py-8 flex flex-col items-center gap-6">

        <h1 className="text-white text-3xl font-bold tracking-wide">
          Create Account
        </h1>

        <form className="w-full flex flex-col items-center gap-5" onSubmit={handleSignUp}>

         <input type="file" hidden ref={file} onChange = {handleImage} />

          {/* Profile Image */}
          <div className="relative w-28 h-28 rounded-full border-2 border-gray-600 overflow-hidden cursor-pointer group">
            <img
              src={frontendImage}
              alt="profile"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center text-white text-4xl font-bold" onClick={()=>{file.current.click()}} >       
              +
            </div>
          </div> 

          {/* Name Fields */}
          <div className="w-full flex gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-1/2 bg-gray-800 text-white placeholder-gray-400 rounded-xl px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500 transition"
               value={firstName}
              onChange={(e)=>setfirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-1/2 bg-gray-800 text-white placeholder-gray-400 rounded-xl px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500 transition"
              value={lastName} onChange={(e)=>setlastName(e.target.value)}
            />
          </div>

          {/* Username */}
          <input
            type="text"
            placeholder="Username"
            className="w-full bg-gray-800 text-white placeholder-gray-400 rounded-xl px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500 transition"
            value={userName} onChange={(e)=>setuserName(e.target.value)}
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            className="w-full bg-gray-800 text-white placeholder-gray-400 rounded-xl px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500 transition"
             value={email} onChange={(e)=>setEmail(e.target.value)}
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            className="w-full bg-gray-800 text-white placeholder-gray-400 rounded-xl px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500 transition"
             value={password} onChange={(e)=>setPassword(e.target.value)}
          />

          {/* Button */}
          <button
            className="w-full mt-2 bg-blue-500 hover:bg-blue-600 active:scale-95 transition-all duration-200 text-black font-semibold py-2 rounded-full shadow-lg"
          >
            Sign Up
          </button>


          <p className="text-white">Already have an account ? <span className="text-red-500 cursor-pointer" onClick={()=>{navigate("/login")}}>Login</span></p>
 
        </form>
      </div>
    </div>
  );
};

export default SignUp;
