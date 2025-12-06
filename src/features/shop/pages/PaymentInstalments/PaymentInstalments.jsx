import React from "react";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { BiMessageSquareEdit } from "react-icons/bi";
import amex from "./img/image.png";
import Mastercard from "./img/image1.png";
import Visa from "./img/image2.png";
import PayPal from "./img/image3.png";
import { Link } from "react-router-dom";

export default function PaymentInstalments() {
  return (
    <div className="w-full min-h-screen bg-white px-10 py-12 text-[#111]">
      <div className="max-w-xl">
        <h2 className="text-[22px] font-semibold">Cards</h2>
        <p className="text-sm text-gray-500 mb-5">manage payment methods</p>

        <div
          className="
          flex items-center justify-between
          bg-white 
          rounded-xl 
          p-5 mb-4
          cursor-pointer
          shadow-sm 
          border border-gray-200
          hover:shadow-md
          transition
        "
        >
          <span className="text-[15px]">Credit or Debit cards</span>

          <div className="flex items-center gap-4">
            <img src={amex} alt="AMEX" className="h-5 object-contain" />
            <img
              src={Mastercard}
              alt="Mastercard"
              className="h-5 object-contain"
            />
            <img src={Visa} alt="Visa" className="h-5 object-contain" />

            <BiMessageSquareEdit className="text-blue-500 text-2xl cursor-pointer" />
          </div>
        </div>

        <div
          className="
          flex items-center justify-between
          bg-white 
          rounded-xl 
          p-5
          cursor-pointer
          shadow-sm 
          border border-gray-200
          hover:shadow-md
          transition
        "
        >
          <span className="text-[15px]">PayPal</span>

          <div className="flex items-center gap-4">
            <img src={PayPal} alt="PayPal" className="h-5 object-contain" />

            <BiMessageSquareEdit className="text-blue-500 text-2xl cursor-pointer" />
          </div>
        </div>
      </div>

      <div className="max-w-xl mt-14">
        <h2 className="text-[22px] font-semibold">Instalments</h2>

        <button className="mt-3 text-[15px] text-blue-600 hover:text-blue-700 flex items-center gap-2">
        <Link to="/profile/payment-instalments/instalments">Manage your instalment</Link>
          <span className="text-xl">
            <LiaLongArrowAltRightSolid />
          </span>
        </button>
      </div>
    </div>
  );
}
