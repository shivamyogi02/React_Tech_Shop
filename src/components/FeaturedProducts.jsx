
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import products from "../data/product";
import { useNavigate } from "react-router-dom";

export default function FeaturedProducts() {
  const navigate = useNavigate();
  const featured = products.filter((p) => p.featured);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-[#0f0f0f] text-white py-24 md:py-28 w-full relative overflow-hidden">
      <div className="text-center mb-16 md:mb-20">
        <h2 className="text-2xl md:text-3xl font-semibold text-red-500 tracking-wide">
          Featured Products
        </h2>
      </div>

      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        centeredSlides={true}
        slidesPerView={3}
        spaceBetween={60}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="w-full flex items-center justify-center"
      >
        {featured.map((product, index) => (
          <SwiperSlide key={product.id}>
            {({ isActive }) => (
              <div
                onClick={() => {
                  navigate(`/product/${product.id}`);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className={`cursor-pointer flex flex-col items-center justify-between transition-all duration-500 ${
                  isActive
                    ? "scale-110 z-10 mt-4 mb-8"
                    : "scale-90 opacity-70 mt-10 mb-10"
                }`}
              >
                <h3 className="text-sm md:text-base font-semibold text-gray-200 text-center mb-3 md:mb-4">
                  {product.name}
                </h3>

                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-[180px] md:w-[240px] lg:w-[260px] object-contain mb-3 md:mb-4 drop-shadow-2xl"
                />

                <div className="flex items-center justify-center gap-2 mt-2">
                  <span className="text-white font-semibold text-base md:text-lg">
                    {product.discountPrice || product.price}
                  </span>
                  {product.discountPrice && (
                    <span className="text-gray-400 line-through text-xs md:text-sm">
                      {product.price}
                    </span>
                  )}
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex gap-2 mt-20 justify-center">
        {featured.slice(0, 4).map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 transform ${
              activeIndex % 4 === index
                ? "bg-red-500 scale-110 shadow-[0_0_8px_#ff0000]"
                : "bg-gray-700 hover:bg-red-400 scale-100"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
