import { useLoaderData } from "react-router-dom";
import DisplayProduct from "./DisplayProduct";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

const BrandProducts = () => {
  const loadedProducts = useLoaderData();
  return (
    <div className="">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay
      >
        <SwiperSlide>
          <div
            className="max-w-6xl mx-8 md:mx-16 lg:mx-auto bg-cover bg-center bg-no-repeat flex justify-center items-center h-[40vh] md:h-[50vh] rounded-xl"
            style={{
              backgroundImage: "url(https://i.ibb.co/TPDY3pZ/banner-1.jpg)",
            }}
          >
            <div>
              <span className="text-sm md:text-base px-2 py-1 md:px-4 md:py-2 bg-[#ffb300] rounded-md">
                Digital PC
              </span>
              <div className="text-white my-2 md:mt-4 md:mb-5">
                <h1 className="text-2xl md:text-4xl font-black md:mb-4">
                  PC & Docking Station
                </h1>
                <p className="md:text-xl leading-7">
                  Discover now, just from $399
                </p>
              </div>
              <button className="btn hover:text-white bg-gray-200 hover:bg-[#ffb300] border-none font-bold capitalize">
                Shop Now
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="max-w-6xl mx-8 md:mx-16 lg:mx-auto bg-cover bg-center bg-no-repeat flex justify-center items-center h-[40vh] md:h-[50vh] rounded-xl"
            style={{
              backgroundImage: "url(https://i.ibb.co/2KhR8RK/banner-2.jpg.jpg)",
            }}
          >
            <div>
              <span className="text-sm md:text-base px-2 py-1 md:px-4 md:py-2 bg-[#ffb300] rounded-md">
                Headphones
              </span>
              <div className="my-2 md:mt-4 md:mb-5">
                <h1 className="text-2xl md:text-4xl font-black md:mb-4 text-[#0b0b0b]">
                  On-sale Best Prices
                </h1>
                <p className="md:text-xl leading-7">
                  Limited Time: Online Only!
                </p>
              </div>
              <button className="btn bg-gray-200 hover:text-white hover:bg-[#ffb300] border-none font-bold capitalize">
                Shop Now
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="max-w-6xl mx-8 md:mx-16 lg:mx-auto bg-cover bg-center bg-no-repeat flex justify-center items-center h-[40vh] md:h-[50vh] rounded-xl"
            style={{
              backgroundImage: "url(https://i.ibb.co/HPmm2Bz/banner-3.jpg)",
            }}
          >
            <div>
              <span className="text-sm md:text-base px-2 py-1 md:px-4 md:py-2 bg-[#ffb300] rounded-md">
                Flat 50%
              </span>
              <div className="text-white my-2 md:mt-4 md:mb-5">
                <h1 className="text-2xl md:text-4xl font-black md:mb-4">
                  Laptop Ultra 8K 16”
                </h1>
                <p className="md:text-xl leading-7">Best Choice of The Year</p>
              </div>
              <button className="btn hover:text-white bg-gray-200 hover:bg-[#ffb300] border-none font-bold capitalize">
                Shop Now
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="max-w-6xl mx-8 md:mx-16 lg:mx-auto bg-cover bg-center bg-no-repeat flex justify-center items-center h-[40vh] md:h-[50vh] rounded-xl"
            style={{
              backgroundImage: "url(https://i.ibb.co/f8KxXWs/banner-4.jpg)",
            }}
          >
            <div>
              <span className="text-sm md:text-base px-2 py-1 md:px-4 md:py-2 bg-[#ffb300] rounded-md">
                Sensor OS 2.0
              </span>
              <div className="my-2 md:mt-4 md:mb-5">
                <h1 className="text-2xl md:text-4xl font-black md:mb-4 text-[#0b0b0b]">
                  Wireless Sound Device
                </h1>
                <p className="md:text-xl leading-7">
                  Limited time offer. Check it out!
                </p>
              </div>
              <button className="btn hover:text-white bg-gray-200 hover:bg-[#ffb300] border-none font-bold capitalize">
                Shop Now
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="">
        {loadedProducts.length ? (
          <div className="grid md:grid-cols-2 gap-5 md:gap-7 max-w-6xl mx-8 md:mx-16 lg:mx-auto py-10 lg:py-20">
            {loadedProducts.map((product) => (
              <DisplayProduct
                key={product._id}
                product={product}
              ></DisplayProduct>
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center h-[calc(100vh-88px)]">
            <p className="text-xl text-[#ffb300] font-medium">
              No Products Found
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BrandProducts;
