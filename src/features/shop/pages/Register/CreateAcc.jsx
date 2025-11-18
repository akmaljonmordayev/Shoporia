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
import { TbUser } from "react-icons/tb";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const schema = Yup.object({
  fullname: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(4, "Min 4 characters").required("Required"),
  terms: Yup.boolean().oneOf([true], "Shartlarga rozilik bering"),
});

function CreateAcc() {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    const user = {
      name: data.fullname,
      email: data.email,
      password: data.password,
    };
    localStorage.setItem("user", JSON.stringify(user));
    toast.success("Account created!");
  };

  return (
    <div className="w-[420px] bg-white p-8">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Create your account
      </h2>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="relative">
          <TbUser className="absolute left-3 top-3 text-gray-500 text-xl" />
          <input
            {...register("fullname")}
            type="text"
            placeholder="Full Name"
            className="w-full border rounded-lg pl-10 pr-4 py-2 outline-none focus:border-blue-500"
          />
          <p className="text-red-500 text-sm">{errors.fullname?.message}</p>
        </div>

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

        <div>
          <label className="flex items-center gap-2 text-sm text-gray-700">
            <input type="checkbox" {...register("terms")} className="w-4 h-4" />
            <span>
              I agree to all{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Terms & Conditions
              </a>
            </span>
          </label>

          <p className="text-red-500 text-sm">{errors.terms?.message}</p>
        </div>

        <button
          type="submit"
          className="w-full py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
        >
          Create Account
        </button>

        <div className="flex items-center gap-4 my-2">
          <span className="flex-1 h-px bg-gray-300"></span>
          <p className="text-sm text-gray-500">Or Sign Up with</p>
          <span className="flex-1 h-px bg-gray-300"></span>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <button className="border py-2 rounded-lg hover:bg-gray-100 transition flex items-center justify-center gap-2">
            <FaGoogle /> Google
          </button>
          <button className="border py-2 rounded-lg hover:bg-gray-100 transition flex items-center justify-center gap-2">
            <FaFacebookF /> Facebook
          </button>
        </div>

        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{" "}
          <a href="#" className="text-blue-600 hover:underline">
            sign in
          </a>
        </p>
      </form>

      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
}

export default CreateAcc;
