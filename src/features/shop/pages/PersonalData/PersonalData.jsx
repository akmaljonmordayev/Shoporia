import React from "react";
import { LuUserRound } from "react-icons/lu";
import { PiKey } from "react-icons/pi";
import { MdMailOutline } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { BiDirections,BiMessageSquareEdit  } from "react-icons/bi";
import { TbSmartHome } from "react-icons/tb";

function PersonalData({ name, mail, number, password, address, postCode }) {
  return (
    <div className="flex flex-col gap-4 w-full max-w-4xl">
      <h1 className="text-xl font-semibold">Identification</h1>
      <p className="text-gray-500 text-sm">Verify your identity</p>

      <div className="grid grid-cols-2 gap-6 mt-4">

        <div className="flex flex-col gap-1">
          <label className="text-gray-500 text-sm">Full name</label>
          <div className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-xl py-3 px-4">
            <LuUserRound className="text-gray-500 text-xl" />
            <input
              type="text"
              placeholder={name}
              className="flex-1 bg-transparent outline-none text-gray-700"
              disabled
            />
            <BiMessageSquareEdit  className="text-blue-500 text-lg cursor-pointer" />
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-gray-500 text-sm">E-mail Address</label>
          <div className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-xl py-3 px-4">
            <MdMailOutline className="text-gray-500 text-xl" />
            <input
              type="email"
              placeholder={mail}
              className="flex-1 bg-transparent outline-none text-gray-700"
              disabled
            />
            <BiMessageSquareEdit  className="text-blue-500 text-lg cursor-pointer" />
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-gray-500 text-sm">Phone number</label>
          <div className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-xl py-3 px-4">
            <BsTelephone className="text-gray-500 text-xl" />
            <input
              type="number"
              placeholder={number}
              className="flex-1 bg-transparent outline-none text-gray-700"
              disabled
            />
            <BiMessageSquareEdit  className="text-blue-500 text-lg cursor-pointer" />
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-gray-500 text-sm">Password</label>
          <div className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-xl py-3 px-4">
            <PiKey className="text-gray-500 text-xl" />
            <input
              type="password"
              placeholder={password}
              className="flex-1 bg-transparent outline-none text-gray-700"
              disabled
            />
            <BiMessageSquareEdit  className="text-blue-500 text-lg cursor-pointer" />
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-gray-500 text-sm">Address</label>
          <div className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-xl py-3 px-4">
            <TbSmartHome className="text-gray-500 text-xl" />
            <input
              type="text"
              placeholder={address}
              className="flex-1 bg-transparent outline-none text-gray-700"
              disabled
            />
            <BiMessageSquareEdit  className="text-blue-500 text-lg cursor-pointer" />
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-gray-500 text-sm">Postal code</label>
          <div className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-xl py-3 px-4">
            <BiDirections className="text-gray-500 text-xl" />
            <input
              type="text"
              placeholder={postCode}
              className="flex-1 bg-transparent outline-none text-gray-700"
              disabled
            />
            <BiMessageSquareEdit  className="text-blue-500 text-lg cursor-pointer" />
          </div>
        </div>

      </div>
    </div>
  );
}

export default PersonalData;
