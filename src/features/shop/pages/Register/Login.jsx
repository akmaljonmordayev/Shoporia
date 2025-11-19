import "../../../../index.css";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import {
  AiOutlineMail,
  AiOutlineEyeInvisible,
  AiOutlineEye,
} from "react-icons/ai";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const schema = Yup.object({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
});

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (!savedUser) {
      toast.error("User not found. Please sign up first!");
      return;
    }

    if (
      data.email === savedUser.email &&
      data.password === savedUser.password
    ) {
      localStorage.setItem("isAuthenticated", "true");
      toast.success("Login successful!");

      setTimeout(() => {
        window.location.href = "/home";
      }, 1000);
    } else {
      toast.error("Incorrect email or password!");
    }
  };

  return (
    <div className="w-[420px] p-8">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Log in to Tech Heim
      </h2>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="relative">
          <AiOutlineMail className="absolute left-3 top-3 text-gray-500 text-xl" />
          <input
            {...register("email")}
            type="email"
            placeholder="E-mail"
            className="w-full border rounded-lg pl-10 pr-4 py-2 outline-none focus:border-blue-500"
          />
          <p className="text-red-500 text-sm">{errors.email?.message}</p>
        </div>

        <div className="relative">
          <input
            {...register("password")}
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full border rounded-lg pl-4 pr-10 py-2 outline-none focus:border-blue-500"
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-3 text-gray-500 text-xl cursor-pointer"
          >
            {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
          </span>
          <p className="text-red-500 text-sm">{errors.password?.message}</p>
        </div>

        <button
          type="submit"
          className="w-full py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
        >
          Log In
        </button>

        <p className="text-center text-sm text-gray-600 mt-4">
          Don’t have an account?{" "}
          <Link to="/CreateAcc" className="text-blue-600 hover:underline">
            sign up
          </Link>
        </p>
      </form>

      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
}

export default Login;
