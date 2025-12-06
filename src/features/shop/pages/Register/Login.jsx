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
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import useGetAll from "../../../../hooks/UseGetAll";

const schema = Yup.object({
  email: Yup.string()
    .email("Invalid email")
    .required("Please enter your email"),
  password: Yup.string().required("Please enter your password"),
});

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const { data: userData, isLoading, isError } = useGetAll("users", ["users"]);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    if (!userData || userData.length === 0) {
      toast.error("Users not found!");
      return;
    }

    const foundUser = userData.find(
      (user) => user.email === data.email && user.password === data.password
    );

    if (!foundUser) {
      toast.error("Incorrect email or password!");
      reset();
      return;
    }

    const token = crypto.randomUUID();

    localStorage.setItem(
      "token",
      JSON.stringify({
        token: token,
        userId: foundUser.id,
      })
    );

    toast.success("Login successful!");
    reset();

    setTimeout(() => {
      navigate("/", { replace: true });
    }, 800);
  };

  return (
    <div className="w-[420px] p-8">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Log in to Shoporia
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
          <Link to="/auth/register" className="text-blue-600 hover:underline">
            sign up
          </Link>
        </p>
      </form>

      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
}

export default Login;
