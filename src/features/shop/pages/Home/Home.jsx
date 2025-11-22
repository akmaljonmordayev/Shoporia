import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import Photo1 from "../../pages/Home/img/photo1.webp"
import Photo2 from "../../pages/Home/img/photo2.webp"
import Photo3 from "../../pages/Home/img/photo3.webp"
import Photo4 from "../../pages/Home/img/photo4.webp"
import Photo5 from "../../pages/Home/img/photo7.webp"
import { Link } from "react-router-dom";


const images = [
  Photo1, 
  Photo2,
  Photo3,
  Photo4,
  Photo5,
];

export default function Home() {
  return (
    <div className="w-full bg-white py-10 px-6 flex items-center justify-center gap-[300px] ">
      <div className="flex flex-col gap-[30px] max-w-md mb-[100px] ">
        <h1 className="text-5xl font-bold text-[#0b2559]">Tech Heim</h1>
        <p className="text-lg text-gray-600 font-medium">
          "Join the <span className='text-orange-500'>digital revolution</span>"
        </p>
        <Link to={"/blog"}>
        <button className="bg-orange-500 hover:bg-orange-600 transition text-white font-semibold py-2 px-[60px] rounded-md w-fit mt-4 cursor-pointer">
          Explore More
        </button>
        </Link>
      </div>

      <div className="w-[550px]">
        <Swiper
          modules={[Autoplay, Navigation]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          navigation
          loop
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img}
                alt="slide"
                className=""
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
