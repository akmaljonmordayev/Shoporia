import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import axiosClient from "../../../../api/axiosClient";
import { Link } from "react-router-dom";
import useGetAll from "../../../../hooks/UseGetAll";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import Ourblogs from "../../components/Our Blogs/ourBlogs";
import Meta from "../../components/Meta/Meta";
import Support from "../../components/Support/Support";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { data, isError, isLoading } = useGetAll("/Slider", ["slider"]);
  const {
    data: categoryData,
    isError: isErrorCategoryData,
    isLoading: isLoadingCategoryData,
  } = useGetAll("/CategoryCarts", ["categoryCart"]);
  const {
    data: saleData,
    isError: isErrorSale,
    isLoading: isLoadingSale,
  } = useGetAll("/typeOfElectronics", ["typeOfElectronics"]);

  const discountedProducts = saleData?.length
    ? Object.values(saleData[0])
        .flat()
        .filter((item) => item.discount > 0)
    : [];
  return (
    <div className="w-full bg-white">
      <div className="py-10 px-6 md:py-16 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10">
          <div className="flex flex-col gap-8 md:gap-10 max-w-md order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0b2559] leading-tight">
              Shoporia
            </h1>
            <p className="text-base md:text-lg text-gray-600 font-medium leading-relaxed">
              "Join the{" "}
              <span className="text-orange-500 font-bold">
                digital revolution
              </span>
              "
            </p>
            <Link to={"/products"}>
              <button className="bg-orange-500 hover:bg-orange-600 transition text-white font-semibold py-3 px-8 md:px-10 rounded-lg w-fit mt-4 cursor-pointer shadow-lg hover:shadow-xl transform hover:scale-105 duration-300">
                Explore More
              </button>
            </Link>
          </div>

          <div className="flex justify-center w-full md:w-auto order-1 md:order-2">
            <Swiper
              modules={[Autoplay, Navigation, Pagination]}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              loop
              className="w-full md:w-[500px] lg:w-[600px]"
              style={{
                "--swiper-navigation-color": "#0b2559",
                "--swiper-pagination-color": "#0b2559",
              }}
            >
              {data?.map(({ imageSlider, id }) => (
                <SwiperSlide
                  key={id}
                  className="flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4 md:p-6"
                >
                  <img
                    src={imageSlider}
                    alt={`Hero Slide ${id + 1}`}
                    className="w-full h-auto max-h-80 md:max-h-96 object-contain rounded-lg"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      <div className="bg-white px-6 py-8 md:px-8 md:py-12 border-b">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4">
            {categoryData?.map(({ id, categoryImage, categoryName }) => (
              <Link
                key={id}
                to={`/${categoryName}`}
                className="flex flex-col items-center gap-3 p-4 rounded-lg"
              >
                <div>
                  <CategoryCard title={categoryName} image={categoryImage} />
                </div>
              </Link>
            ))}
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
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            navigation
            pagination={{ clickable: true, type: "bullets" }}
            loop
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
                    <div className="relative h-48 bg-gray-100 overflow-hidden flex items-center justify-center">
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
      <Ourblogs/>
      <Meta/>
      <Support/>
    </div>
  );
}
