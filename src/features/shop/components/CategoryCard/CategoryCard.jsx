import React from "react";

function CategoryCard({ title, image }) {
  return (
    <div className="p-[108px]">
      <div className="w-[184px] h-[196px] pr-[18px] pl-[18px] flex flex-col items-center justify-center gap-y-[15px] shadow-[-2px_2px_15px_-1px_#7171711F]">
        <img src={image} alt={title} className="w-[130px]" />
        <p className="text-center text-[16px]">{title }</p>
      </div>
    </div>
  );
}

export default CategoryCard;
