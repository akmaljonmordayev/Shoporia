import React from "react";
import img5 from "../../../../assets/img5.png";

function Ourblogs() {
  return (
    <div>
      <div className="w-[100%] h-[420px] mt-[48px] mb-[50px] mx-auto rounded-[18px] flex items-center justify-around bg-[radial-gradient(circle_at_145%_50%,_#ff6b52_0%,_#ff6b52_50%,_#1f3447_50%)]">
        <div className="flex flex-col items-center gap-[10px]">
          <h1 className="text-white text-[44px] font-medium">SMART WATCH</h1>
          <p className="text-white text-[24px] font-light mt-[16px]">
            Various designs and brands
          </p>
          <button className="w-[68px] h-[35px] rounded-[10px] text-[16px] font-normal bg-[#FF6951] text-white">
            view
          </button>
        </div>
        <img src={img5} alt="" />
      </div>
    </div>
  );
}

export default Ourblogs;
