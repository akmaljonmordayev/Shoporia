import React, { useEffect, useState } from "react";
import { FiShoppingCart } from "react-icons/fi";

export default function DailyProduct({
  discount,
  productName,
  price,
  oldPrice,
  monthlyPrice,
  image,
}) {
  const [time, setTime] = useState(4 * 3600 + 30 * 60);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => (prev <= 0 ? 4 * 3600 + 30 * 60 : prev - 1));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const h = String(Math.floor(time / 3600)).padStart(2, "0");
  const m = String(Math.floor((time % 3600) / 60)).padStart(2, "0");
  const s = String(time % 60).padStart(2, "0");

  return (
    <div className="bg-white rounded-3xl p-6">

      <h3 className="text-xl font-bold text-gray-900 mb-4">
        Deal of the Day
      </h3>

      <div className="flex items-center gap-1 mb-4">
        {[h[0], h[1], ":", m[0], m[1], ":", s[0], s[1]].map((v, i) =>
          v === ":" ? (
            <span key={i} className="text-lg font-bold mx-1">:</span>
          ) : (
            <div
              key={i}
              className="w-10 h-12 bg-white border rounded-md shadow-sm flex items-center justify-center text-lg font-bold"
            >
              {v}
            </div>
          )
        )}
      </div>

      <div className="flex gap-4 items-start">

        <div className="flex flex-col gap-3 w-[55%]">

          <div className="flex gap-2">
            <span className="bg-yellow-400 text-black px-2 py-1 rounded-md text-xs font-bold">
              -{discount}%
            </span>
            <span className="bg-red-500 text-white px-3 py-1 rounded-md text-xs font-bold">
              Sale
            </span>
          </div>

          <p className="text-gray-900 font-medium text-sm leading-tight">
            {productName}
          </p>

          <div className="text-blue-600 font-semibold text-sm px-3 py-1 border rounded-lg bg-blue-50 w-fit">
            ${monthlyPrice}/month
          </div>

          <div>
            <p className="line-through text-gray-400 text-sm">
              ${oldPrice}
            </p>
            <p className="text-3xl font-bold text-gray-900">
              ${price}
            </p>
          </div>

        </div>

        <div className="relative w-[45%] flex items-center justify-center">
          <img
            src={image}
            alt={productName}
            className="w-32 h-40 object-contain"
          />

          <button className="absolute bottom-0 right-0 bg-red-500 hover:bg-red-600 text-white p-3 rounded-full shadow-lg transition">
            <FiShoppingCart size={20} />
          </button>
        </div>

      </div>
    </div>
  );
}
