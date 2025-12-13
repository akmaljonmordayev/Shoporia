import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";
import React from "react";

function Discounts() {
  const [showCode, setShowCode] = useState(false);
  const [openInfo, setOpenInfo] = useState(false);
  return (
    <div className="flex flex-col gap-2 w-full max-w-md">
      <h2 className="text-lg font-semibold">Discounts & Voucher</h2>
      <p className="text-gray-500 text-sm">
        Add discount code to apply a discount in your purchase
      </p>

      <div className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 mt-2">
        <input
          type={showCode ? "text" : "password"}
          placeholder="label"
          className="flex-1 bg-transparent outline-none text-gray-700"
        />

        {showCode ? (
          <AiOutlineEyeInvisible
            className="text-blue-500 text-xl cursor-pointer"
            onClick={() => setShowCode(false)}
          />
        ) : (
          <AiOutlineEye
            className="text-blue-500 text-xl cursor-pointer"
            onClick={() => setShowCode(true)}
          />
        )}
      </div>

      <button
        onClick={() => setOpenInfo(!openInfo)}
        className="text-gray-600 text-sm flex items-center gap-1 mt-1"
      >
        Where can I find the discount code ?
        <span className="text-lg">
          {openInfo ? <MdOutlineArrowDropUp /> : <MdOutlineArrowDropDown />}
        </span>
      </button>

      {openInfo && (
        <p className="text-gray-500 text-sm bg-gray-50 border border-gray-200 rounded-xl p-3">
          You can find your discount code in your email, promotional messages,
          or inside your account under "Offers".
        </p>
      )}
    </div>
  );
}

export default Discounts;
