import React, { useContext, useState } from "react";
import UserContext, { dataContext } from "../context/UserContext.jsx";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {
  let { serverUrl } = useContext(dataContext);
  let navigate = useNavigate("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      let data = await axios.post(
        serverUrl + "/api/login",
        {
          email,
          password
        },
        { withCredentials: true }
      );
      console.log(data);
    } catch (error) {
      console.log(error.response.data.message);
      alert(error.response.data.message)
    }
  };

  return (
    <div className="w-full h-screen bg-linear-to-br from-black via-gray-900 to-black flex items-center justify-center">
      <div className="w-[92%] max-w-md bg-gray-900/90 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-800 px-6 py-8 flex flex-col items-center gap-6">
        <h1 className="text-white text-3xl font-bold tracking-wide">Login</h1>

        <form
          className="w-full flex flex-col items-center gap-5"
          onSubmit={handleLogin}
        >
          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            className="w-full bg-gray-800 text-white placeholder-gray-400 rounded-xl px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500 transition"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            className="w-full bg-gray-800 text-white placeholder-gray-400 rounded-xl px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500 transition"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* Button */}
          <button className="w-full mt-2 bg-blue-500 hover:bg-blue-600 active:scale-95 transition-all duration-200 text-black font-semibold py-2 rounded-full shadow-lg">
            Login
          </button>

          <p className="text-white " onClick={()=>navigate("/signup")}>
            create new account <span className="text-red-500 cursor-pointer">Sign Up</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
