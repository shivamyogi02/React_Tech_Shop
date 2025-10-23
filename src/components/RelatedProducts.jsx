
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import products from "../data/product";
import { useNavigate } from "react-router-dom";

export default function RelatedProducts({ currentProduct }) {
  const navigate = useNavigate();

  const related = products.filter(
    (p) => p.category === currentProduct.category && p.id !== currentProduct.id
  );

  if (related.length === 0) return null;

  const handleClick = (id) => {
    navigate(`/product/${id}`);
    window.scrollTo({ top: 0, behavior: "smooth" }); // scroll to top
  };

  return (
    <section className="bg-black text-white py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-red-500 text-center sm:text-left">
          🔗 Related Products
        </h2>

        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
          spaceBetween={20}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {related.map((product) => (
            <SwiperSlide key={product.id}>
              <div
                role="button"
                tabIndex={0}
                onClick={() => handleClick(product.id)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleClick(product.id);
                }}
                className="bg-gray-900 p-4 sm:p-6 rounded-2xl cursor-pointer hover:-translate-y-2 transition-all duration-500 shadow-lg flex flex-col items-center"
              >
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-40 h-40 sm:w-56 sm:h-56 object-contain mb-4 transition-transform duration-300 hover:scale-105"
                />
                <h3 className="text-lg font-semibold text-red-400 mb-2 text-center">
                  {product.name}
                </h3>
                <p className="text-gray-400 text-sm mb-3 text-center line-clamp-2">
                  {product.desc}
                </p>
                <div className="flex items-center justify-center gap-3">
                  <span className="text-green-400 font-bold">
                    {product.discountPrice}
                  </span>
                  <span className="text-gray-500 line-through text-sm">
                    {product.price}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
