import React from "react";
import { useParams } from "react-router-dom";
import useGetAll from "../../../../hooks/UseGetAll";

function CategorySingle() {
  const { categoryName } = useParams();
  const { data, isLoading, isError } = useGetAll("/typeOfElectronics");

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-60">
        <p className="text-lg text-gray-500 animate-pulse">Loading...</p>
      </div>
    );

  if (isError)
    return (
      <div className="flex justify-center items-center h-60">
        <p className="text-lg text-red-500">Something went wrong ❌</p>
      </div>
    );

  const categoryData = data?.[0]?.[categoryName] || [];

  return (
    <div className="px-6 py-8">
      <h1 className="text-3xl font-bold mb-6 capitalize text-gray-800">
        {categoryName}
      </h1>

      {categoryData.length === 0 ? (
        <p className="text-gray-500">No products found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categoryData.map((typeOfElectronics, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-5 cursor-pointer"
            >
              <img src={typeOfElectronics.image.images} alt="Product-image" />
              <h2 className="text-lg font-semibold text-gray-800">
                {typeOfElectronics.title}
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                {typeOfElectronics.star}
              </p>

              <p className="text-sm text-gray-500 mt-1">
                {typeOfElectronics.price}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CategorySingle;
