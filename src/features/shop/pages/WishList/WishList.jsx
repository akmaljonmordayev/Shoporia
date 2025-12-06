import React from "react";
import WishCard from "../../components/WishCard/WishCard";
import useGetAll from "../../../../hooks/UseGetAll";

function WishList() {
  const { data, isLoading, isError } = useGetAll("/wishlist", ["wishlist"]);

  return (
    <div className="px-4">
      <h1 className="text-2xl font-semibold">Wish list</h1>
      <p className="text-gray-500 mb-6">See your favorites list here</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

        {data?.map((item) => (
          <WishCard
            key={item.id}
            img={item.img}
            title={item.title}
            onAdd={() => console.log("Added:", item.id)}
            onDelete={() => console.log("Delete:", item.id)}
          />
        ))}

      </div>
    </div>
  );
}

export default WishList;
