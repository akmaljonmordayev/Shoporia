import React, { useState, useEffect, useRef } from "react";
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
import ProductCard from "../../components/ProductCard/ProductCard";
import BestSellerCard from "../../components/BestSellerCard/BestSellerCard";
import PromoBanner from "../../components/PromoBanner/PromoBanner";

export default function Home() {
  const { data: sliderData } = useGetAll("/Slider", ["slider"]);
  const { data: categoryData } = useGetAll("/CategoryCarts", ["categoryCart"]);
  const { data: electronicsData } = useGetAll("/typeOfElectronics", [
    "typeOfElectronics",
  ]);

  const [fiveProducts, setFiveProducts] = useState([]);

  useEffect(() => {
    if (!electronicsData?.length) return;

    const updateProducts = () => {
      const discountedProducts = Object.values(electronicsData[0])
        .flat()
        .filter((item) => item.discount > 0);

      const shuffled = [...discountedProducts].sort(() => 0.5 - Math.random());
      setFiveProducts(shuffled.slice(0, 5));
    };

    updateProducts();
    const interval = setInterval(updateProducts, 16_200_000);
    return () => clearInterval(interval);
  }, [electronicsData]);

  const heroPrev = useRef(null);
  const heroNext = useRef(null);
  const dailyPrev = useRef(null);
  const dailyNext = useRef(null);

  const getRandomItems = (array, count) => {
    if (!array || array.length === 0) return [];
    const shuffled = [...array].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };
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
            <Swiper
              modules={[Autoplay, Navigation, Pagination]}
              loop={false}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              navigation={{
                prevEl: heroPrev.current,
                nextEl: heroNext.current,
              }}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = heroPrev.current;
                swiper.params.navigation.nextEl = heroNext.current;
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

            <button
              ref={heroPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white w-10 h-10 rounded-full shadow flex items-center justify-center z-10"
            >
              <FaChevronLeft />
            </button>

            <button
              ref={heroNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white w-10 h-10 rounded-full shadow flex items-center justify-center z-10"
            >
              <FaChevronRight />
            </button>
          </div>

          <div className="relative bg-white rounded-3xl shadow">
            <Swiper
              modules={[Autoplay, Navigation, Pagination]}
              loop={false}
              autoplay={{ delay: 8000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              navigation={{
                prevEl: dailyPrev.current,
                nextEl: dailyNext.current,
              }}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = dailyPrev.current;
                swiper.params.navigation.nextEl = dailyNext.current;
              }}
            >
              {fiveProducts.map((item) => (
                <SwiperSlide key={item.id}>
                  <Link to="/products">
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
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>

            <button
              ref={dailyPrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-white w-9 h-9 rounded-full shadow flex items-center justify-center z-10"
            >
              <FaChevronLeft />
            </button>

            <button
              ref={dailyNext}
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
      <div className="bg-blue-900 py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h2 className="text-white text-xl font-bold">Products On Sale</h2>
              <p className="text-blue-200 text-sm mt-1">Shop Now!</p>
            </div>
            <Link
              to="/products"
              className="text-blue-200 text-sm font-medium hover:text-white self-center"
            >
              View all →
            </Link>
          </div>

          <div className="relative">
            {electronicsData && (
              <Swiper
                modules={[Autoplay, Navigation]}
                loop={true}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                slidesPerView={1.5}
                spaceBetween={12}
                breakpoints={{
                  640: { slidesPerView: 2.5 },
                  1024: { slidesPerView: 3.5 },
                  1280: { slidesPerView: 4.5 },
                }}
                navigation={{
                  prevEl: ".sale-prev",
                  nextEl: ".sale-next",
                }}
              >
                {Object.values(electronicsData[0])
                  .flat()
                  .filter((item) => item.discount > 0)
                  .map((item) => (
                    <SwiperSlide key={item.id}>
                      <Link to={`/products/${item.id}`} className="block">
                        <div className="bg-white rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow w-full aspect-square flex flex-col items-center justify-between">
                          <div className="relative w-full h-[60%] flex items-center justify-center">
                            <img
                              src={item.image?.main || "/placeholder.jpg"}
                              alt={item.title}
                              className="max-h-full max-w-full object-contain"
                            />
                            {item.discount > 0 && (
                              <span className="absolute top-1 right-1 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded">
                                -{item.discount}%
                              </span>
                            )}
                          </div>

                          <div className="w-full mt-2 text-center">
                            <p className="text-gray-800 text-xs font-medium line-clamp-2 h-8 overflow-hidden">
                              {item.title}
                            </p>
                            <div className="flex justify-center gap-1 mt-1">
                              <span className="text-blue-600 font-bold text-sm">
                                ${item.price}
                              </span>
                              {item.discount > 0 && (
                                <span className="text-gray-400 line-through text-xs">
                                  $
                                  {Math.round(
                                    item.price / (1 - item.discount / 100)
                                  )}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </Link>
                    </SwiperSlide>
                  ))}
              </Swiper>
            )}

            <div className="absolute bottom-2 right-4 flex gap-1 z-10">
              <button className="sale-prev bg-white w-8 h-8 rounded-full shadow flex items-center justify-center">
                <FaChevronLeft className="text-gray-600 w-4 h-4" />
              </button>
              <button className="sale-next bg-white w-8 h-8 rounded-full shadow flex items-center justify-center">
                <FaChevronRight className="text-gray-600 w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="py-8 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-start justify-between mb-4">
          </div>

          <div className="py-8 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-start justify-between mb-4">
                <h2 className="text-gray-800 text-xl font-bold">
                  New Products
                </h2>
                <Link
                  to="/products"
                  className="text-gray-600 text-sm font-medium hover:text-blue-600 self-center"
                >
                  View all →
                </Link>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {electronicsData &&
                  getRandomItems(
                    Object.values(electronicsData[0]).flat(),
                    4
                  ).map((item) => (
                    <Link
                      key={item.id}
                      to={`/products/${item.id}`}
                      className="block"
                    >
                      <ProductCard item={item} showWishlist={true} />
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>

<div className="py-8 px-6 bg-white">
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
    <PromoBanner
      title="Iphone 15 Series"
      subtitle="It feels good to be the first. Get ready for the future of smartphones. Experience innovation like never before. Stay tuned for the big iPhone 15 pre-sale."
      buttonLabel="Register Now"
      buttonLink="/iphone15"
      isLeft={true}
    />

    <PromoBanner
      title="Play Station 5"
      subtitle="Digital Edition + 2TB"
      buttonLabel="Buy Now"
      buttonLink="/ps5"
    />
  </div>
</div>
      <div className="py-8 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-start justify-between mb-4">
            <h2 className="text-gray-800 text-xl font-bold">Best Sellers</h2>
            <Link
              to="/products?sort=best-sellers"
              className="text-gray-600 text-sm font-medium hover:text-blue-600 self-center"
            >
              View all →
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {electronicsData
              ? getRandomItems(Object.values(electronicsData[0]).flat(), 4).map(
                  (item) => (
                    <Link
                      key={item.id}
                      to={`/products/${item.id}`}
                      className="block"
                    >
                      <BestSellerCard item={item} />
                    </Link>
                  )
                )
              : 
                Array.from({ length: 4 }).map((_, i) => (
                  <div
                    key={i}
                    className="bg-gray-100 aspect-square rounded-lg animate-pulse"
                  />
                ))}
          </div>
        </div>
      </div>

      <Ourblogs />
      <Meta />
      <Support />
    </div>
  );
}
