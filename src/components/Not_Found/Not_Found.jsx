import React from "react";
import { Link } from "react-router-dom";
import pictNotFound from "../Not_Found/img/notFound5.png";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-100 to-white px-6 text-center">
      <div className="flex flex-col items-center max-w-xl animate-fadeIn">
        <img
          src={pictNotFound}
          alt="Not found"
          className="w-[560px] h-auto drop-shadow-xl"
        />

        <div className="flex flex-col items-center gap-2 mb-6">
          <h1 className="text-gray-700 text-[30px] md:text-[36px] font-semibold leading-tight">
            Sorry, we couldn't find that page
          </h1>

          <p className="text-gray-600 text-base md:text-lg">
            Try searching or go to
            <Link
              to="/"
              className="text-blue-600 font-semibold ml-1 underline-offset-4 hover:text-blue-700 transition"
            >
              Shoporia's home page
            </Link>
            .
          </p>
        </div>

        <Link
          to="/contact-us"
          className="text-lg md:text-xl font-semibold text-blue-600 hover:text-blue-700 underline-offset-4 transition"
        >
          Contact our support team
        </Link>
      </div>
    </div>
  );
}