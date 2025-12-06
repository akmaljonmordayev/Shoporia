import React from "react";
import { PiKey } from "react-icons/pi";
import { BsTelephone } from "react-icons/bs";
import { BiMessageSquareEdit  } from "react-icons/bi";

function SecurityAccess() {
  return (
    <div className="w-full max-w-4xl mx-auto py-10 px-6">
      <h2 className="text-2xl font-semibold mb-1">Security settings</h2>
      <p className="text-gray-500 mb-8">Change password and phone number</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

        <div className="flex items-center justify-between bg-gray-50 p-5 rounded-xl cursor-pointer hover:bg-gray-100 transition">
          <div className="flex items-center gap-3">
            <PiKey className="text-gray-700 text-xl" />
            <span className="text-gray-800 font-medium">Password</span>
          </div>
          <BiMessageSquareEdit className="text-blue-600 text-xl" />
        </div>

        <div className="flex items-center justify-between bg-gray-50 p-5 rounded-xl cursor-pointer hover:bg-gray-100 transition">
          <div className="flex items-center gap-3">
            <BsTelephone className="text-gray-700 text-xl" />
            <span className="text-gray-800 font-medium">Phone number</span>
          </div>
          <BiMessageSquareEdit className="text-blue-600 text-xl" />
        </div>

      </div>
    </div>
  );
}

export default SecurityAccess;
