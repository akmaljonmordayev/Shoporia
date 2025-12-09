import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { AiOutlineHeart, AiFillHeart, AiFillStar } from "react-icons/ai";

function ProductCard({ product, isWishlisted, onToggleWishlist, onAddToCart }) {
  const discountedPrice = product.discount
    ? Math.round(product.price * (1 - product.discount / 100))
    : product.price;

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-lg transition-shadow duration-300">
      <div className="flex justify-between items-start mb-2">
        {product.discount && (
          <span className="bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded-full">
            -{product.discount}%
          </span>
        )}
        <button
          onClick={onToggleWishlist}
          className="text-red-500 hover:scale-110 transition-transform"
        >
          {isWishlisted ? (
            <AiFillHeart size={28} />
          ) : (
            <AiOutlineHeart size={28} />
          )}
        </button>
      </div>

      {/* Product Image */}
      <div className="w-full h-56 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center mb-3">
        <img
          src={product.image?.main || "https://via.placeholder.com/200"}
          alt={product.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Product Info */}
      <div className="mb-3">
        <h3 className="text-sm font-semibold text-gray-800 line-clamp-2 mb-2">
          {product.title}
        </h3>

        {/* Features */}
        <div className="flex flex-wrap gap-1 mb-2">
          {product.guaranteed && (
            <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded">
              ✓ Guaranteed
            </span>
          )}
          {product.freeDelivery && (
            <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">
              🚚 Free Delivery
            </span>
          )}
          {product.inStock && (
            <span className="bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded">
              In Stock
            </span>
          )}
        </div>
      </div>

      {/* Price */}
      <div className="mb-3">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xl font-bold text-gray-900">
            ${discountedPrice}
          </span>
          {product.discount && (
            <span className="text-sm text-gray-400 line-through">
              ${product.price}
            </span>
          )}
        </div>
        {product.star && (
          <div className="flex items-center gap-1">
            <AiFillStar size={16} className="text-yellow-400" />
            <span className="text-sm font-medium text-gray-700">
              {product.star}
            </span>
          </div>
        )}
      </div>

      {/* Specs */}
      {(product.ram || product.screenSize || product.processor) && (
        <div className="text-xs text-gray-600 mb-3 pb-3 border-t">
          <div className="mt-2 space-y-1">
            {product.ram && <div>RAM: {product.ram}GB</div>}
            {product.screenSize && <div>Screen: {product.screenSize}"</div>}
            {product.processor && <div>Processor: {product.processor}</div>}
          </div>
        </div>
      )}
      <button
        onClick={() => onAddToCart(product.id)}
        className="w-full bg-orange-500 hover:bg-orange-600 transition text-white font-semibold py-2 px-3 rounded-lg flex items-center justify-center gap-2"
      >
        <MdOutlineShoppingCart size={20} />
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
