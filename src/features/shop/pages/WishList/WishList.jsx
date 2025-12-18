import React, { useState, useEffect } from "react";
import WishCard from "../../components/WishCard/WishCard";

// Custom hook for wishlist management
export const useWishlist = () => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const storedWishlist = localStorage.getItem('wishlist');
    if (storedWishlist) {
      setWishlist(JSON.parse(storedWishlist));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const addToWishlist = (product) => {
    setWishlist((prev) => {
      if (!prev.find((item) => item.id === product.id)) {
        return [...prev, product];
      }
      return prev;
    });
  };

  const removeFromWishlist = (productId) => {
    setWishlist((prev) => prev.filter((item) => item.id !== productId));
  };

  const toggleWishlist = (product) => {
    if (wishlist.find((item) => item.id === product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const isInWishlist = (productId) => {
    return wishlist.some((item) => item.id === productId);
  };

  return { wishlist, addToWishlist, removeFromWishlist, toggleWishlist, isInWishlist };
};

function WishList() {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <div className="px-4">
      <h1 className="text-2xl font-semibold">Wish list</h1>
      <p className="text-gray-500 mb-6">See your favorites list here</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {wishlist?.map((item) => (
          <WishCard
            key={item.id}
            img={item.image?.main}
            title={item.title}
            onAdd={() => console.log("Added:", item.id)}
            onDelete={() => removeFromWishlist(item.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default WishList;
