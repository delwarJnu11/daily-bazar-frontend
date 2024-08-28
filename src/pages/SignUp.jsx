import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import logo from "../assets/images/logo.png";
import ImageUpload from "../components/common/ImageUpload";

const SignUp = () => {
  const [imageUrl, setImageUrl] = useState("");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const password = watch("password");
  const getImageUrl = (url) => {
    setImageUrl(url);
  };
  // Handle Form Submit
  const onSubmit = async (data) => {
    data.image = imageUrl;
    try {
      const response = await axios.post(
        "http://localhost:8000/api/auth/register",
        data
      );
      if (response?.data?.success) {
        navigate("/login");
        toast.success(response?.data?.message);
      } else {
        toast.error(response?.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        {/* Logo */}
        <div className="flex justify-center mb-10">
          <img src={logo} alt="Carrot Logo" />
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Name Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                First Name*
              </label>
              <div className="flex items-center border rounded-lg">
                <input
                  type="text"
                  placeholder="Enter Your First Name"
                  className="w-full px-4 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none rounded-md"
                  {...register("firstName", {
                    required: "First name is required",
                  })}
                />
              </div>
              {errors.firstName && (
                <span className="text-red-500 text-sm">
                  {errors.firstName.message}
                </span>
              )}
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Last Name*
              </label>
              <div className="flex items-center border rounded-lg">
                <input
                  type="text"
                  placeholder="Enter Your Last Name"
                  className="w-full px-4 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none rounded-md"
                  {...register("lastName", {
                    required: "Last name is required",
                  })}
                />
              </div>
              {errors.lastName && (
                <span className="text-red-500 text-sm">
                  {errors.lastName.message}
                </span>
              )}
            </div>
          </div>

          {/* Email and Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Email*
              </label>
              <div className="flex items-center border rounded-lg">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="w-full px-4 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none rounded-md"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                      message: "Invalid email address",
                    },
                  })}
                />
              </div>
              {errors.email && (
                <span className="text-red-500 text-sm">
                  {errors.email.message}
                </span>
              )}
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Phone Number*
              </label>
              <div className="flex items-center border rounded-lg">
                <input
                  type="text"
                  placeholder="Enter Your Phone Number"
                  className="w-full px-4 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none rounded-md"
                  {...register("phone", {
                    required: "Phone number is required",
                  })}
                />
              </div>
              {errors.phone && (
                <span className="text-red-500 text-sm">
                  {errors.phone.message}
                </span>
              )}
            </div>
          </div>

          {/* Password Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Password*
              </label>
              <div className="flex items-center border rounded-lg">
                <input
                  type="password"
                  placeholder="Enter Your Password"
                  className="w-full px-4 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none rounded-md"
                  {...register("password", {
                    required: "Password is required",
                  })}
                />
              </div>
              {errors.password && (
                <span className="text-red-500 text-sm">
                  {errors.password.message}
                </span>
              )}
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Confirm Password*
              </label>
              <div className="flex items-center border rounded-lg">
                <input
                  type="password"
                  placeholder="Confirm Your Password"
                  className={`w-full px-4 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none rounded-md ${
                    errors.confirmPassword && "focus:ring-red-500"
                  }`}
                  {...register("confirmPassword", {
                    required: "Please confirm your password",
                    validate: (value) =>
                      value === password || "Password do not match",
                  })}
                />
              </div>
              {errors.confirmPassword && (
                <span className="text-red-500 text-sm">
                  {errors.confirmPassword.message}
                </span>
              )}
            </div>
          </div>

          {/* Address Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                House No*
              </label>
              <div className="flex items-center border rounded-lg">
                <input
                  type="text"
                  placeholder="Enter Your House No"
                  className="w-full px-4 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none rounded-md"
                  {...register("houseNo", {
                    required: "House number is required",
                  })}
                />
              </div>
              {errors.houseNo && (
                <span className="text-red-500 text-sm">
                  {errors.houseNo.message}
                </span>
              )}
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Street*
              </label>
              <div className="flex items-center border rounded-lg">
                <input
                  type="text"
                  placeholder="Enter Your Street"
                  className="w-full px-4 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none rounded-md"
                  {...register("street", { required: "Street is required" })}
                />
              </div>
              {errors.street && (
                <span className="text-red-500 text-sm">
                  {errors.street.message}
                </span>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Postal Code*
              </label>
              <div className="flex items-center border rounded-lg">
                <input
                  type="text"
                  placeholder="Enter Your Postal Code"
                  className="w-full px-4 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none rounded-md"
                  {...register("postalCode", {
                    required: "Postal code is required",
                  })}
                />
              </div>
              {errors.postalCode && (
                <span className="text-red-500 text-sm">
                  {errors.postalCode.message}
                </span>
              )}
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                City*
              </label>
              <div className="flex items-center border rounded-lg">
                <input
                  type="text"
                  placeholder="Enter Your City"
                  className="w-full px-4 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none rounded-md"
                  {...register("city", { required: "City is required" })}
                />
              </div>
              {errors.city && (
                <span className="text-red-500 text-sm">
                  {errors.city.message}
                </span>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 mb-4">
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Country*
              </label>
              <div className="flex items-center border rounded-lg">
                <input
                  type="text"
                  placeholder="Enter Your Country"
                  className="w-full px-4 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none rounded-md"
                  {...register("country", { required: "Country is required" })}
                />
              </div>
              {errors.country && (
                <span className="text-red-500 text-sm">
                  {errors.country.message}
                </span>
              )}
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 mb-4">
            <ImageUpload onGetImageUrl={getImageUrl} />
          </div>

          {/* Submit Button */}
          <div className="flex justify-start w-full md:w-1/2">
            <button
              type="submit"
              className="w-full bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600"
            >
              Signup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
