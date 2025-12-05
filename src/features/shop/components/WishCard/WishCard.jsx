import React from "react";
import { FiShoppingCart, FiTrash2 } from "react-icons/fi";

function WishCard({ img, title, onAdd, onDelete }) {
  return (
    <>
      <div className="w-[240px] bg-white rounded-2xl overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.10)] transition duration-300 ease-in-out hover:shadow-[0_8px_20px_rgba(0,0,0,0.15)] p-4 cursor-pointer">

        <div className="w-full h-[150px] rounded-xl overflow-hidden mb-4">
          <img
            src={img}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>

        <p className="text-[15px] font-medium text-[#222] mb-4 line-clamp-2">
          {title}
        </p>

        <div className="flex items-center justify-between">

          <button
            onClick={onAdd}
            className="flex items-center gap-2 border border-blue-500 text-blue-600 px-3 py-2 rounded-xl text-sm hover:bg-blue-50 transition"
          >
            <FiShoppingCart className="text-lg" />
            Add to cart
          </button>

          <button
            onClick={onDelete}
            className="text-red-500 hover:text-red-600 transition cursor-pointer"
          >
            <FiTrash2 className="text-xl" />
          </button>

        </div>
      </div>
    </>
  );
}

export default WishCard;
