import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { AiOutlineHeart, AiFillStar } from "react-icons/ai";

function Card({ image, name, price, rating }) {
  return (
    <div className="w-64 border rounded-xl bg-white p-3">
      <div className="flex justify-start mb-2">
        <AiOutlineHeart className="text-blue-500" size={22} />
      </div>
      <div className="w-full h-40 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="my-3 border-b border-blue-200"></div>

      <p className="text-blue-700 font-medium text-sm leading-tight line-clamp-2">
        {name}
      </p>
      <div className="flex justify-between items-center mt-3">
        <p className="text-lg font-semibold">${price}</p>

        <div className="flex items-center gap-1 text-blue-600">
          <AiFillStar size={18} />
          <span className="font-medium text-sm">{rating}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
