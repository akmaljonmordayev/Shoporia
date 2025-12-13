import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

import Ourblogs from "../../components/Our Blogs/ourBlogs";
import Meta from "../../components/Meta/Meta";
import Support from "../../components/Support/Support";
import DailyProduct from "../../components/DailyProduct/DalyProduct";
import useGetAll from "../../../../hooks/UseGetAll";

export default function Home() {
  const { data: sliderData } = useGetAll("/Slider", ["slider"]);
  const { data: categoryData } = useGetAll("/CategoryCarts", ["categoryCart"]);
  const { data: electronicsData } = useGetAll("/typeOfElectronics", [
    "typeOfElectronics",
  ]);

  const discountedProducts = electronicsData?.length
    ? Object.values(electronicsData[0])
        .flat()
        .filter((item) => item.discount > 0)
    : [];

  const fiveProducts = discountedProducts.slice(0, 5);

  const heroPrevRef = useRef(null);
  const heroNextRef = useRef(null);
  const dailyPrevRef = useRef(null);
  const dailyNextRef = useRef(null);

  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  return (
    <div className="w-full bg-white">
      <div className="bg-white">
        <div className="max-w-7xl mx-auto overflow-x-auto">
          <div className="flex gap-12 px-4 py-2 whitespace-nowrap">
            {categoryData?.map(({ id, categoryName }) => (
              <Link
                key={id}
                to={`/${categoryName}`}
                className="text-sm font-medium text-gray-700 hover:text-blue-600"
              >
                {categoryName}
              </Link>
            ))}
            <Link
              to="/categories"
              className="text-sm font-medium text-gray-700 hover:text-blue-600"
            >
              Все категории
            </Link>
          </div>
        </div>
      </div>

      <div className="px-6 py-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="relative lg:col-span-2 rounded-3xl overflow-hidden">
            {ready && (
              <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                loop
                autoplay={{ delay: 4000 }}
                pagination={{ clickable: true }}
                navigation={{
                  prevEl: heroPrevRef.current,
                  nextEl: heroNextRef.current,
                }}
                onBeforeInit={(swiper) => {
                  swiper.params.navigation.prevEl = heroPrevRef.current;
                  swiper.params.navigation.nextEl = heroNextRef.current;
                }}
              >
                {sliderData?.map(({ id, imageSlider }) => (
                  <SwiperSlide key={id}>
                    <img
                      src={imageSlider}
                      className="w-full h-[420px] object-cover"
                      alt=""
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            )}

            <button
              ref={heroPrevRef}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white w-10 h-10 rounded-full shadow flex items-center justify-center z-10"
            >
              <FaChevronLeft />
            </button>
            <button
              ref={heroNextRef}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white w-10 h-10 rounded-full shadow flex items-center justify-center z-10"
            >
              <FaChevronRight />
            </button>
          </div>

          <div className="relative bg-white rounded-3xl shadow">
            {ready && (
              <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                loop
                autoplay={{ delay: 4000 }}
                pagination={{ clickable: true }}
                navigation={{
                  prevEl: dailyPrevRef.current,
                  nextEl: dailyNextRef.current,
                }}
                onBeforeInit={(swiper) => {
                  swiper.params.navigation.prevEl = dailyPrevRef.current;
                  swiper.params.navigation.nextEl = dailyNextRef.current;
                }}
              >
                {fiveProducts.map((item) => (
                  <SwiperSlide key={item.id}>
                    <DailyProduct
                      discount={item.discount}
                      productName={item.title}
                      price={item.price}
                      oldPrice={Math.round(
                        item.price / (1 - item.discount / 100)
                      )}
                      monthlyPrice={Math.round(item.price / 12)}
                      image={item.image?.main}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            )}

            <button
              ref={dailyPrevRef}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-white w-9 h-9 rounded-full shadow flex items-center justify-center z-10"
            >
              <FaChevronLeft />
            </button>
            <button
              ref={dailyNextRef}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-white w-9 h-9 rounded-full shadow flex items-center justify-center z-10"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>

      <div className="px-6 py-10">
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {categoryData?.map(({ id, categoryName, categoryImage }) => (
            <Link
              key={id}
              to={`/${categoryName}`}
              className="bg-white border rounded-xl p-4 flex justify-between items-center hover:shadow"
            >
              <p className="text-sm font-medium">{categoryName}</p>
              <img src={categoryImage} className="w-14 h-14 object-contain" />
            </Link>
          ))}

          <Link
            to="/categories"
            className="bg-white border rounded-xl p-4 flex justify-between items-center hover:shadow"
          >
            <p className="text-sm font-medium">Все категории</p>
            <span className="text-xl">→</span>
          </Link>
        </div>
      </div>

      <Ourblogs />
      <Meta />
      <Support />
    </div>
  );
}