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
      <h3 className="text-xl font-bold mb-4">Deal of the Day</h3>

      <div className="flex gap-1 mb-4">
        {[h[0], h[1], ":", m[0], m[1], ":", s[0], s[1]].map((v, i) =>
          v === ":" ? (
            <span key={i} className="mx-1 font-bold">:</span>
          ) : (
            <div
              key={i}
              className="w-10 h-12 border rounded flex items-center justify-center font-bold"
            >
              {v}
            </div>
          )
        )}
      </div>

      <div className="flex gap-4">
        <div className="w-[55%] flex flex-col gap-3">
          <div className="flex gap-2">
            <span className="bg-yellow-400 px-2 py-1 text-xs font-bold rounded">
              -{discount}%
            </span>
            <span className="bg-red-500 text-white px-2 py-1 text-xs font-bold rounded">
              Sale
            </span>
          </div>

          <p className="text-sm font-medium">{productName}</p>

          <div className="text-blue-600 text-sm font-semibold">
            ${monthlyPrice}/month
          </div>

          <div>
            <p className="line-through text-gray-400 text-sm">${oldPrice}</p>
            <p className="text-3xl font-bold">${price}</p>
          </div>
        </div>

        <div className="w-[45%] relative flex justify-center items-center">
          <img src={image} className="w-32 h-40 object-contain" />
          <button className="absolute bottom-0 right-0 bg-red-500 text-white p-3 rounded-full">
            <FiShoppingCart size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
