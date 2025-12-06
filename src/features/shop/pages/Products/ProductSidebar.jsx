import React from "react";
import { FiX } from "react-icons/fi";

function ProductSidebar({
  brands,
  selectedBrands,
  onBrandChange,
  priceRange,
  onPriceChange,
  selectedFeatures,
  onFeatureChange,
  sidebarOpen,
  onCloseSidebar,
}) {
  return (
    <>
      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 lg:hidden z-30"
          onClick={onCloseSidebar}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed lg:static top-0 left-0 w-96 bg-white border-r border-gray-200 p-6 min-h-screen overflow-y-auto z-40 lg:z-auto transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* Close button for mobile */}
        <button
          onClick={onCloseSidebar}
          className="lg:hidden absolute top-4 right-4 text-gray-600 hover:text-gray-900"
        >
          <FiX size={24} />
        </button>

        <h2 className="text-xl font-bold text-[#0b2559] mb-6 mt-10 lg:mt-0">
          Filters
        </h2>

        {/* Brands Filter */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Brands</h3>
          <div className="space-y-3">
            {brands.length > 0 ? (
              brands.map((brand) => (
                <label
                  key={brand}
                  className="flex items-center gap-3 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={selectedBrands.includes(brand)}
                    onChange={() => onBrandChange(brand)}
                    className="w-4 h-4 accent-blue-600 cursor-pointer"
                  />
                  <span className="text-gray-700 capitalize font-medium">
                    {brand}
                  </span>
                </label>
              ))
            ) : (
              <p className="text-gray-500 text-sm">No brands available</p>
            )}
          </div>
        </div>

        {/* Price Range Filter */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Price Range
          </h3>
          <div className="space-y-4">
            <div>
              <label className="text-sm text-gray-600 block mb-2">
                Min: ${priceRange[0]}
              </label>
              <input
                type="range"
                min="0"
                max="2500"
                value={priceRange[0]}
                onChange={(e) =>
                  onPriceChange([
                    Math.min(Number(e.target.value), priceRange[1]),
                    priceRange[1],
                  ])
                }
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
            </div>
            <div>
              <label className="text-sm text-gray-600 block mb-2">
                Max: ${priceRange[1]}
              </label>
              <input
                type="range"
                min="0"
                max="2500"
                value={priceRange[1]}
                onChange={(e) =>
                  onPriceChange([
                    priceRange[0],
                    Math.max(Number(e.target.value), priceRange[0]),
                  ])
                }
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
            </div>
          </div>
        </div>

        {/* Features Filter */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Features</h3>
          <div className="space-y-3">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedFeatures.includes("guaranteed")}
                onChange={() => onFeatureChange("guaranteed")}
                className="w-4 h-4 accent-green-600 cursor-pointer"
              />
              <span className="text-gray-700 font-medium">✓ Guaranteed</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedFeatures.includes("freeDelivery")}
                onChange={() => onFeatureChange("freeDelivery")}
                className="w-4 h-4 accent-blue-600 cursor-pointer"
              />
              <span className="text-gray-700 font-medium">
                🚚 Free Delivery
              </span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedFeatures.includes("inStock")}
                onChange={() => onFeatureChange("inStock")}
                className="w-4 h-4 accent-purple-600 cursor-pointer"
              />
              <span className="text-gray-700 font-medium">In Stock</span>
            </label>
          </div>
        </div>

        {/* Reset Filters */}
        {(selectedBrands.length > 0 ||
          priceRange[0] > 0 ||
          priceRange[1] < 2500 ||
          selectedFeatures.length > 0) && (
          <button
            onClick={() => {
              onBrandChange(null);
              onPriceChange([0, 2500]);
              selectedFeatures.forEach((f) => onFeatureChange(f));
            }}
            className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-lg transition"
          >
            Reset Filters
          </button>
        )}
      </div>
    </>
  );
}

export default ProductSidebar;
