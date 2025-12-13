import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import Ourblogs from "../../components/Our Blogs/ourBlogs";
import Meta from "../../components/Meta/Meta";
import Support from "../../components/Support/Support";
import useGetAll from "../../../../hooks/UseGetAll";
import DailyProduct from "../../components/DailyProduct/DalyProduct";
import { Link } from "react-router-dom";

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

  const [isHeroReady, setHeroReady] = useState(false);
  const [isDailyReady, setDailyReady] = useState(false);

  useEffect(() => {
    setHeroReady(true);
    setDailyReady(true);
  }, []);
  console.log(blogData);

  const discountedProducts = saleData?.length
    ? Object.values(saleData[0])
        .flat()
        .filter((item) => item.discount > 0)
    : [];

  return (
    <div className="w-full bg-white">
      <div className="bg-white border-gray-200">
        <div className="max-w-7xl mx-auto relative">
          <div className="flex items-center overflow-x-auto scrollbar-hide">
            <div className="flex space-x-6 px-2">
              {categoryData?.map(({ id, categoryName }) => (
                <Link
                  key={id}
                  to={`/${categoryName}`}
                  className="text-gray-700 hover:text-blue-600 whitespace-nowrap text-sm font-medium px-3 py-1.5 rounded-lg transition-colors"
                >
                  {categoryName}
                </Link>
              ))}
              <Link
                to="/categories"
                className="text-gray-700 hover:text-blue-600 whitespace-nowrap text-sm font-medium px-3 py-1.5 rounded-lg transition-colors flex items-center"
              >
                Все категории
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 md:py-14 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="relative lg:col-span-2 rounded-3xl overflow-hidden">
            {isHeroReady && (
              <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                loop
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                navigation={{
                  prevEl: heroPrevRef.current,
                  nextEl: heroNextRef.current,
                }}
                onSwiper={(swiper) => {
                  setTimeout(() => {
                    swiper.params.navigation.prevEl = heroPrevRef.current;
                    swiper.params.navigation.nextEl = heroNextRef.current;
                    swiper.navigation.destroy();
                    swiper.navigation.init();
                    swiper.navigation.update();
                  });
                }}
                className="rounded-3xl"
      <div className="px-4 py-6 md:px-8 md:py-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {categoryData?.map(({ id, categoryImage, categoryName }) => (
              <Link
                key={id}
                to={`/${categoryName}`}
                className="
            flex items-center justify-between
            bg-white rounded-2xl
            px-4 py-3
            shadow-sm border
            hover:shadow-md hover:border-gray-300
            transition-all duration-200
          "
              >
                {sliderData?.map(({ imageSlider, id }) => (
                  <SwiperSlide key={id}>
                    <img
                      src={imageSlider}
                      className="w-full h-[400px] md:h-[420px] object-cover rounded-3xl"
                      alt=""
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
            <button
              ref={heroPrevRef}
              className="absolute top-1/2 -translate-y-1/2 left-4 z-20 w-11 h-11 bg-white rounded-full shadow flex items-center justify-center"
            >
              <FaChevronLeft />
            </button>
            <button
              ref={heroNextRef}
              className="absolute top-1/2 -translate-y-1/2 right-4 z-20 w-11 h-11 bg-white rounded-full shadow flex items-center justify-center"
            >
              <FaChevronRight />
            </button>
          </div>

          <div className="relative bg-white rounded-3xl shadow-md">
            <Link to="/products" className="block h-full">
              {isDailyReady && (
                <Swiper
                  modules={[Autoplay, Navigation, Pagination]}
                  loop
                  slidesPerView={1}
                  autoplay={{ delay: 4000, disableOnInteraction: false }}
                  pagination={{ clickable: true }}
                  navigation={{
                    prevEl: dailyPrevRef.current,
                    nextEl: dailyNextRef.current,
                  }}
                  onSwiper={(swiper) => {
                    setTimeout(() => {
                      swiper.params.navigation.prevEl = dailyPrevRef.current;
                      swiper.params.navigation.nextEl = dailyNextRef.current;
                      swiper.navigation.destroy();
                      swiper.navigation.init();
                      swiper.navigation.update();
                    });
                  }}
                  className="rounded-3xl h-full"
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
                className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white rounded-full shadow flex items-center justify-center z-20"
              >
                <FaChevronLeft />
              </button>
              <button
                ref={dailyNextRef}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white rounded-full shadow flex items-center justify-center z-20"
              >
                <FaChevronRight />
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="px-4 py-6 md:px-8 md:py-10">
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {categoryData?.map(({ id, categoryImage, categoryName }) => (
            <Link
              key={id}
              to={`/${categoryName}`}
              className="flex items-center justify-between bg-white rounded-2xl px-4 py-3 shadow-sm border hover:shadow-md hover:border-gray-300 transition-all duration-200"
            >
              <p className="text-sm font-medium text-gray-800 w-[60%] leading-tight">
                {categoryName}
              </p>
              <img
                src={categoryImage}
                alt={categoryName}
                className="w-16 h-16 object-contain"
              />
            </Link>
          ))}
          <Link
            to="/categories"
            className="flex items-center justify-between bg-white rounded-2xl px-4 py-3 shadow-sm border hover:shadow-md hover:border-gray-300 transition-all duration-200"
          >
            <p className="text-sm font-medium text-gray-800">Все категории</p>
            <span className="text-xl font-bold">→</span>
          </Link>
              <p className="text-sm font-medium text-gray-800">Все категории</p>

              <span className="text-xl font-bold">→</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 py-12 px-6 md:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                Products On Sale
              </h2>
              <p className="text-blue-100 text-lg">Shop Now!</p>
            </div>
            <Link to={"/products"}>
              <button className="text-white font-semibold text-lg hover:text-orange-400 transition flex items-center gap-2">
                View all <span className="text-2xl">›</span>
              </button>
            </Link>
          </div>
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            loop
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            navigation
            pagination={{ clickable: true, type: "bullets" }}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 15 },
              1024: { slidesPerView: 4, spaceBetween: 20 },
            }}
            className="w-full"
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
          >
            {discountedProducts?.map((product) => (
              <SwiperSlide key={product.id}>
                <Link to={`/products/${product.id}`}>
                  <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:scale-105 duration-300 h-full flex flex-col cursor-pointer">
                    <div className="relative h-48 bg-gray-100 flex items-center justify-center">
                      {product.discount && (
                        <div className="absolute top-3 left-3 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold z-10">
                          -{product.discount}%
                        </div>
                      )}
                      <img
                        src={
                          product.image?.main ||
                          "https://via.placeholder.com/200"
                        }
                        alt={product.title}
                        className="w-full h-full object-contain p-3"
                      />
                    </div>
                    <div className="p-4 flex flex-col flex-grow">
                      <h3 className="text-sm font-semibold text-gray-800 line-clamp-2 mb-3 min-h-[2.5rem]">
                        {product.title}
                      </h3>
                      <div className="flex flex-wrap gap-1 mb-3">
                        {product.guaranteed && (
                          <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded">
                            ✓ Guaranteed
                          </span>
                        )}
                        {product.freeDelivery && (
                          <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">
                            🚚 Free
                          </span>
                        )}
                      </div>
                      <div className="mt-auto">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xl font-bold text-gray-900">
                            $
                            {product.discount
                              ? Math.round(
                                  product.price * (1 - product.discount / 100)
                                )
                              : product.price}
                          </span>
                          {product.discount && (
                            <span className="text-sm text-gray-400 line-through">
                              ${product.price}
                            </span>
                          )}
                        </div>
                        {product.star && (
                          <div className="flex items-center gap-1">
                            <span className="text-yellow-400">★</span>
                            <span className="text-sm text-gray-700">
                              {product.star}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <Ourblogs />
      <Meta />
      <Support />
    </div>
  );
}
