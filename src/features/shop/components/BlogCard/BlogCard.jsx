import React from "react";

function BlogCard({ img, title, date, time, desc }) {
  return (
    <>
      <div>
        <div className="w-[350px] bg-white rounded-[14px] overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.12)] cursor-pointer transition duration-300 ease-in-out hover:-translate-y-[6px] hover:shadow-[0_8px_20px_rgba(0,0,0,0.18)]">
          <img
            src={img}
            alt={title}
            className="w-full h-[180px] object-cover"
          />

          <div className="px-[18px] py-[16px]">
            <div className="flex justify-between items-center text-[#7a7a7a] text-[14px] mb-[10px]">
              <p>{date}</p>
              <p>{time}</p>
            </div>

            <h2 className="text-[20px] font-semibold text-[#111] mb-[8px] leading-[1.3]">
              {title}
            </h2>
            <p className="text-[15px] text-[#555] leading-[1.4]">{desc}</p>
          </div>
        </div>
      </div>
      ;
    </>
  );
}

export default BlogCard;
