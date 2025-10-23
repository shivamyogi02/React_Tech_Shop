
// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";
// import { useNavigate } from "react-router-dom";
// import products from "../data/product";
// import "swiper/css";
// import "swiper/css/pagination";

// export default function HeroSlider() {
//   const navigate = useNavigate();

//   const handleShopNow = (id) => {
//     navigate(`/product/${id}`);
//   };

//   return (
//     <div className="w-full bg-gray-900 text-white">
//       <Swiper
//         spaceBetween={0}
//         centeredSlides={true}
//         autoplay={{ delay: 3500, disableOnInteraction: false }}
//         pagination={{ clickable: true }}
//         modules={[Autoplay, Pagination]}
//         className="w-full"
//       >
//         {products.map((item) => (
//           <SwiperSlide key={item.id}>
//             {/* Entire Slide Container */}
//             <div
//               className="flex flex-col md:flex-row items-center justify-between w-full h-[80vh] px-10 md:px-20 bg-gradient-to-r from-gray-900 via-gray-950 to-black shadow-inner cursor-pointer"
//               onClick={() => handleShopNow(item.id)}
//             >
//               {/* LEFT SECTION - TEXT */}
//               <div className="flex-1 text-center md:text-left">
//                 <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-500">
//                   {item.name}
//                 </h2>
//                 <p className="text-gray-200 mb-4 text-2xl md:text-4xl font-semibold drop-shadow-lg">
//                   {item.desc}
//                 </p>
//                 <div className="mb-6">
//                   <span className="text-3xl md:text-5xl font-bold text-green-400 mr-3">
//                     {item.discountPrice}
//                   </span>
//                   <span className="text-gray-400 text-lg md:text-2xl line-through">
//                     {item.price}
//                   </span>
//                 </div>
//                 <button
//                   onClick={(e) => {
//                     e.stopPropagation(); // Prevent slide click from firing twice
//                     handleShopNow(item.id);
//                   }}
//                   className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-full font-semibold text-white text-base shadow-lg hover:shadow-red-700/50 transition-all"
//                 >
//                   Shop Now
//                 </button>
//               </div>

//               {/* RIGHT SECTION - IMAGE */}
//               <div className="flex-1 flex justify-center items-center mt-8 md:mt-0 relative">
//                 <img
//                   src={item.images[0]}
//                   alt={item.name}
//                   className="w-[260px] md:w-[380px] transition-transform duration-500 hover:scale-105 drop-shadow-[0_0_30px_rgba(0,0,0,0.7)]"
//                 />
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import products from "../data/product";
import "swiper/css";
import "swiper/css/pagination";

export default function HeroSlider() {
  const navigate = useNavigate();

  const handleShopNow = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="w-full bg-[radial-gradient(circle_at_center,_#0d0d0d_0%,_#000_80%)]

 text-white min-h-screen">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
        className="w-full"
      >
        {products.map((item) => (
          <SwiperSlide key={item.id}>
            {/* SLIDE CONTAINER */}
            <div
              className="flex flex-col md:flex-row items-center justify-between w-full h-[80vh] px-10 md:px-20 
              bg-gradient-to-r from-gray-950 via-black to-gray-800 shadow-[inset_0_0_40px_rgba(0,0,0,0.8)] 
              transition-all duration-500 hover:shadow-[0_0_40px_rgba(255,255,255,0.05)] cursor-pointer"
              onClick={() => handleShopNow(item.id)}
            >
              {/* LEFT TEXT SECTION */}
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-semibold mb-3 text-gray-400 tracking-wide uppercase">
                  {item.name}
                </h2>
                <p className="text-gray-100 mb-4 text-3xl md:text-5xl font-bold leading-tight drop-shadow-[0_0_15px_rgba(255,255,255,0.15)]">
                  {item.desc}
                </p>
                <div className="mb-6">
                  <span className="text-3xl md:text-5xl font-extrabold text-green-400 mr-3 drop-shadow-[0_0_10px_rgba(34,197,94,0.5)]">
                    {item.discountPrice}
                  </span>
                  <span className="text-gray-500 text-lg md:text-2xl line-through">
                    {item.price}
                  </span>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleShopNow(item.id);
                  }}
                  className="bg-gradient-to-r from-red-700 to-red-500 hover:from-red-600 hover:to-red-400 
                  px-8 py-3 rounded-full font-semibold text-white text-base shadow-[0_0_20px_rgba(239,68,68,0.4)] 
                  hover:shadow-[0_0_30px_rgba(239,68,68,0.6)] transition-all duration-300"
                >
                  Shop Now
                </button>
              </div>

              {/* RIGHT IMAGE SECTION */}
              <div className="flex-1 flex justify-center items-center mt-8 md:mt-0 relative">
                <div className="absolute w-[280px] h-[280px] md:w-[400px] md:h-[400px] bg-gray-800/40 
                rounded-full blur-3xl"></div>
                <img
                  src={item.images[0]}
                  alt={item.name}
                  className="w-[260px] md:w-[380px] relative z-10 transition-transform duration-500 
                  hover:scale-110 drop-shadow-[0_0_40px_rgba(255,255,255,0.1)]"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
