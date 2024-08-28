import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import logo from "./../assets/images/logo.png";

const Login = () => {
  const [loginInfo, setLoginInfo] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  //Handle change
  const handleChange = (e) => {
    setLoginInfo({
      ...loginInfo,
      [e.target.name]: e.target.value,
    });
  };

  // Handle Login
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/api/auth/login",
        loginInfo,
        { withCredentials: true }
      );
      // Success
      if (response?.data?.success) {
        localStorage.setItem("_id", response?.data?._id);
        navigate("/");
        toast.success(response?.data?.message);
      }
      //Error
      if (response?.data?.error) {
        toast.error(response?.data?.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm mx-auto bg-white p-8 rounded-lg shadow-lg">
        {/* Logo */}
        <div className="flex justify-center mb-10">
          <img src={logo} alt="Carrot Logo" />
        </div>

        {/* Form */}
        <form onSubmit={handleLogin}>
          {/* Email */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-semibold
               mb-2"
            >
              Email Address*
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Enter Your Email"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
              value={loginInfo.email}
              onChange={handleChange}
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-semibold mb-2"
            >
              Password*
            </label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Enter Your password"
              className="w-full px-4 py-2 border rounded-lg focus:ring-green-500 focus:outline-none focus:ring-2"
              value={loginInfo.password}
              onChange={handleChange}
            />
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <input
                id="remember"
                type="checkbox"
                className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember"
                className="ml-2 block text-sm text-gray-900"
              >
                Remember Me
              </label>
            </div>
            <a href="#" className="text-sm text-green-600 hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Login Button */}
          <div className="mb-4">
            <button
              type="submit"
              className="w-full bg-green-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:outline-none focus:bg-green-700"
            >
              Login
            </button>
          </div>

          {/* Signup */}
          <div className="">
            <p>
              New to Carrot? please{" "}
              <Link
                to="/sign-up"
                className="text-sm text-green-600 hover:underline"
              >
                Signup
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
