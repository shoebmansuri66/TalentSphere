import { useState, useEffect } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";


import {
  loginStart,
  loginSuccess,
  loginFail
} from "../../Redux/login-reg-redux";

export default function Login() {
 const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(loginStart());

    try {
        // Backend API call
        const res = await axios.post("http://localhost:5000/api/user/login", {
            email,
            password
        });

        // Agar backend success response bhejta hai
        if (res.data.success) {
            dispatch(loginSuccess(res.data.user));
            // Token ko localStorage mein save karein
            localStorage.setItem("token", res.data.token);
        }
    } catch (err) {
        // Backend se aane wala error message catch karein
        dispatch(loginFail(err.response?.data?.message || "Login Failed"));
    }

  useEffect(() => {
    if (user) {
      nav("/"); // login ke baad redirect
    }
  }, [user, nav])};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={submitHandler}
        className="bg-white shadow-xl rounded-xl p-6 w-full max-w-md"
      >
        <h1 className="text-2xl font-bold text-center mb-6">
          User Login
        </h1>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Email address
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-1">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {error && (
          <p className="text-red-600 text-sm text-center mb-3">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded flex items-center justify-center gap-2 disabled:opacity-60"
        >
          {loading ? (
            <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
          ) : (
            "Login"
          )}
        </button>

        <p className="text-center text-sm mt-4">
          Don&apos;t have an account?{" "}
          <NavLink
            to="/register"
            className="text-blue-600 hover:underline font-medium"
          >
            Register
          </NavLink>
        </p>
      </form>
    </div>
  );
}


