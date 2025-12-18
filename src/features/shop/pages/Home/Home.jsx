import React from "react";
import { useParams } from "react-router-dom";
import useGetAll from "../../../../hooks/UseGetAll";
import { FaStar } from "react-icons/fa6";

function CategorySingle() {
  const { categoryName } = useParams();
  const { data, isLoading, isError } = useGetAll("/typeOfElectronics");

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-60">
        <p className="text-lg text-blue-500 animate-pulse">Loading...</p>
      </div>
    );

  if (isError)
    return (
      <div className="flex justify-center items-center h-60">
        <p className="text-lg text-red-500 font-medium">
          Something went wrong ❌
        </p>
      </div>
    );

  const categoryData = data?.[0]?.[categoryName] || [];

  return (
    <div className="px-6 py-8">
      <h1 className="text-3xl font-bold mb-8 capitalize bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
        {categoryName}
      </h1>

      {categoryData.length === 0 ? (
        <p className="text-gray-500 text-center">No products found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categoryData.map((typeOfElectronics, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-gray-100 
                         shadow-md hover:shadow-blue-200 hover:border-blue-400
                         transition-all duration-300 p-5 cursor-pointer group"
            >
              <div className="w-full h-40 flex items-center justify-center mb-4">
                <img
                  src={typeOfElectronics.image.images}
                  alt="Product"
                  className="max-h-full object-contain group-hover:scale-105 transition-transform"
                />
              </div>

              <h2 className="text-lg font-semibold text-gray-800 truncate">
                {typeOfElectronics.title}
              </h2>

              <div className="flex items-center gap-1 text-sm text-yellow-500 mt-2">
                <FaStar />
                <span className="text-gray-600">{typeOfElectronics.star}</span>
              </div>

              <p className="text-sm mt-2 text-gray-700">
                <span className="text-gray-500">Price:</span>{" "}
                <span className="font-semibold">
                  ${typeOfElectronics.price}
                </span>
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CategorySingle;
