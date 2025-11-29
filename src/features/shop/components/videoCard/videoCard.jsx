import React from "react";

function VideoCard({ iframe, titleVideo }) {
  return (
    <div className="w-[350px] rounded-xl overflow-hidden bg-[#0b0b0c] text-white shadow-xl">
      <div
        className="relative w-full h-[200px]"
        dangerouslySetInnerHTML={{ __html: iframe }}
      ></div>

      <div className="p-4 text-center text-lg font-medium">{titleVideo}</div>
    </div>
  );
}

export default VideoCard;
