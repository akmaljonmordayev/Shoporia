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

  const categoryData =
    categoryName === "all"
      ? Object.values(data?.[0] || {}).flat()
      : data?.[0]?.[categoryName] || [];

  return (
    <div className="px-6 py-8">
      <h1 className="text-3xl font-bold mb-6 capitalize text-gray-800">
        {categoryName === "all" ? "Все категории" : categoryName}
      </h1>

      {categoryData.length === 0 ? (
        <p className="text-gray-500">No products found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categoryData.map((product, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-5 cursor-pointer"
            >
              <img
                src={product.image?.images || product.image?.main}
                alt={product.title}
                className="w-full h-48 object-contain mb-3"
              />
              <h2 className="text-lg font-semibold text-gray-800">
                {product.title}
              </h2>
              {product.star && (
                <p className="text-sm text-gray-500 mt-1">{product.star}</p>
              )}
              {product.price && (
                <p className="text-sm text-gray-500 mt-1">{product.price} $</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CategorySingle;
