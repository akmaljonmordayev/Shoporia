import React from "react";

const BestSellerCard = ({ item }) => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow w-full aspect-square flex flex-col items-center justify-between">
      <div className="absolute top-2 left-2 bg-blue-600 text-white text-[10px] px-2 py-1 rounded-full font-bold">
        Best
      </div>

      <div className="relative w-full h-[60%] flex items-center justify-center">
        <img
          src={item.image?.main || "/placeholder.jpg"}
          alt={item.title}
          className="max-h-full max-w-full object-contain"
        />
        {item.discount > 0 && (
          <span className="absolute top-1 right-1 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded">
            -{item.discount}%
          </span>
        )}
      </div>

      <div className="w-full mt-2 text-center">
        <p className="text-gray-800 text-[15px] font-medium line-clamp-2 h-10 overflow-hidden">
          {item.title}
        </p>
        <div className="flex justify-between items-center mt-2 w-full">
          <span className="text-blue-600 font-bold text-[17px]">
            ${item.price}
          </span>
          <div className="flex items-center gap-1">
            <span className="text-blue-600 text-[17px]">★</span>
            <span className="text-gray-600 text-[17px]">
              {item.rating || 4.5}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSellerCard;