import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import LoginILS from "../assets/undraw_undraw_undraw_undraw_sign_up_ln1s_-1-_s4bc_-1-_ee41_-1-_kf4d.svg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/auth/login", {
        email,
        password,
      });
      const { role_id, token } = response.data;
      console.log(response.data);

      // Save token to localStorage or handle it as needed
      localStorage.setItem("authToken", token);

      // Redirect based on role_id
      if (role_id === 1) {
        navigate("/admin-dashboard");
      } else if (role_id === 2) {
        navigate("/trainer-dashboard");
      } else {
        setError("Invalid role. Please contact support.");
      }
    } catch (err) {
      setError("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-darker via-dark to-mid">
      <div className="bg-whiter shadow-lg rounded-lg flex flex-col md:flex-row p-8 w-full max-w-4xl">
        {/* Login Form Section */}
        <div className="w-full md:w-1/2 p-6">
          <h2 className="text-3xl font-bold text-dark text-center mb-6">
            Login
          </h2>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-mid font-medium mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-mid rounded focus:outline-none focus:ring-2 focus:ring-mid"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-mid font-medium mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-mid rounded focus:outline-none focus:ring-2 focus:ring-mid"
                placeholder="Enter your password"
                required
              />
            </div>

            {error && <p className="text-red-500 mb-4">{error}</p>}

            <button
              type="submit"
              className="w-full bg-dark hover:bg-darker text-whiter font-bold py-2 px-4 rounded transition duration-200"
            >
              Login
            </button>
          </form>
        </div>

        {/* Illustration Section (On Right) */}
        <div className="hidden md:flex w-1/2 justify-center items-center">
          <img
            src={LoginILS} // Replace with your image URL
            alt="Login Illustration"
            className="object-contain w-3/4 h-3/4"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
