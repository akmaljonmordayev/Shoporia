import React from "react";
import { Link } from "react-router-dom";
import ps5 from "./img/ps5.webp"
const PromoBanner = ({ title, subtitle, buttonLabel, buttonLink, isLeft = false }) => {
  return (
    <div
      className={`relative rounded-3xl overflow-hidden ${
        isLeft
          ? "bg-gradient-to-br from-blue-400 to-blue-600"
          : "bg-gradient-to-br from-blue-800 to-indigo-900"
      } p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6`}
    >
      <div className="w-full sm:w-1/2 flex justify-center">
        <div className="relative w-48 h-48">
          {isLeft ? (
            <img src="https://cdsassets.apple.com/live/7WUAS350/images/tech-specs/iphone-15-pro-max.png" alt="" />
          ) : (
            <img className={ps5} src="" alt="" />
          )}
        </div>
      </div>

      <div className="w-full sm:w-1/2 text-center sm:text-left">
        <h3 className="text-white text-xl sm:text-2xl font-bold mb-2">{title}</h3>
        {subtitle && <p className="text-blue-100 text-sm sm:text-base mb-4">{subtitle}</p>}

        {isLeft && (
          <div className="flex justify-center sm:justify-start gap-2 mb-4">
            {[8, 8, 8, 8].map((days, i) => (
              <div key={i} className="bg-white/20 rounded-lg px-2 py-1 text-white text-xs font-bold">
                {days} Days
              </div>
            ))}
          </div>
        )}

        <Link
          to={buttonLink}
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-lg transition-colors"
        >
          {buttonLabel}
        </Link>
      </div>

      {isLeft && (
        <>
          <div className="absolute -top-10 -right-10 w-20 h-20 bg-blue-300 rounded-full opacity-30"></div>
          <div className="absolute -bottom-10 -left-10 w-16 h-16 bg-blue-300 rounded-full opacity-30"></div>
        </>
      )}
      {!isLeft && (
        <>
          <div className="absolute -top-10 -left-10 w-20 h-20 bg-yellow-300 rounded-full opacity-30"></div>
          <div className="absolute -bottom-10 -right-10 w-16 h-16 bg-yellow-300 rounded-full opacity-30"></div>
        </>
      )}

      {!isLeft && (
        <div className="absolute top-4 right-4 flex flex-wrap gap-1">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="w-1 h-1 bg-white rounded-full"></div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PromoBanner;