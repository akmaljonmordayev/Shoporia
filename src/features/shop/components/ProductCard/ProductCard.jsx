import React from "react";
import { FaHeart } from "react-icons/fa";

const ProductCard = ({ item, showWishlist = true }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      className="bg-white rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow w-full aspect-square flex flex-col items-center justify-between"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full h-[60%] flex items-center justify-center">
        <img
          src={item.image?.main || "/placeholder.jpg"}
          alt={item.title}
          className="max-h-full max-w-full object-contain"
        />

        {showWishlist && (
          <button
            className={`absolute top-1 left-1 bg-white/80 rounded-full p-1 transition-opacity ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
          >
            <FaHeart className="text-gray-400 w-4 h-4" />
          </button>
        )}
      </div>

      <div className="w-full mt-2 text-center">
        <p className="text-gray-800 text-[15px] font-medium line-clamp-2 h-10 overflow-hidden">
          {item.title}
        </p>
        <div className="flex justify-between items-center mt-2 w-full">
          <span className="text-blue-600 font-bold text-[17px]">${item.price}</span>
          <div className="flex items-center gap-1">
            <span className="text-blue-600 text-[17px]">★</span>
            <span className="text-gray-600 text-[17px]">{item.rating || 4.5}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;