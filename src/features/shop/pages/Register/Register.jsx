import React, { useState } from "react";
import Login from "./Login";
import CreateAcc from "./CreateAcc";

function Register() {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <div className="w-[450px] mx-auto mt-10 bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.1)]">
      <div className="flex justify-center gap-4 mb-6">
        <button
          className={`pb-2 ${
            activeTab === "login"
              ? "border-b-2 border-blue-600 text-blue-600 font-medium"
              : "text-gray-500 hover:text-blue-600"
          }`}
          onClick={() => setActiveTab("login")}
        >
          Log in
        </button>
        <button
          className={`pb-2 ${
            activeTab === "create"
              ? "border-b-2 border-blue-600 text-blue-600 font-medium"
              : "text-gray-500 hover:text-blue-600"
          }`}
          onClick={() => setActiveTab("create")}
        >
          Create Account
        </button>
      </div>

      <div>
        {activeTab === "login" && <Login />}
        {activeTab === "create" && <CreateAcc />}
      </div>
    </div>
  );
}

export default Register;
