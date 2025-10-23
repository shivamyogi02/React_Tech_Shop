
// import React, { useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import products from "../data/product";
// import { useCart } from "../context/CartContext";
// import ReviewsSection from "../components/ReviewsSection";
// import RelatedProducts from "../components/RelatedProducts";
// import OurAdvantages from "../components/OurAdvantages";
// import Footer from "../components/Footer";

// export default function ProductDetails() {
//   const { id } = useParams();
//   const { addToCart } = useCart();
//   const navigate = useNavigate();
//   const [selectedImage, setSelectedImage] = useState(0);
//   const [activeTab, setActiveTab] = useState("specs");
//   const [touchStartX, setTouchStartX] = useState(0);
//   const [touchEndX, setTouchEndX] = useState(0);
//   const [showPopup, setShowPopup] = useState(false);

//   const product = products.find((p) => p.id === parseInt(id));
//   if (!product) {
//     return (
//       <div className="text-center py-20 text-red-500 text-2xl">
//         Product not found.
//       </div>
//     );
//   }

//   const handleAddToCart = () => {
//     const cartProduct = {
//       ...product,
//       title: product.name,
//       discountPriceNum: parseInt(
//         product.discountPrice.replace(/[^0-9]/g, "")
//       ),
//       originalPrice: parseInt(product.price.replace(/[^0-9]/g, "")), // ✅ Add original price
//       quantity: 1,
//     };
//     addToCart(cartProduct);

//     setShowPopup(true);
//     setTimeout(() => {
//       setShowPopup(false);
//       navigate("/cart");
//     }, 2000);
//   };

//   const handleSwipe = () => {
//     const swipeDistance = touchStartX - touchEndX;
//     const minSwipeDistance = 50;

//     if (swipeDistance > minSwipeDistance) {
//       setSelectedImage((prev) => (prev + 1) % product.images.length);
//     } else if (swipeDistance < -minSwipeDistance) {
//       setSelectedImage(
//         (prev) => (prev - 1 + product.images.length) % product.images.length
//       );
//     }
//   };

//   return (
//     <div className="bg-black text-white min-h-screen relative">
//       {/* Popup */}
//       <div
//         className={`fixed top-5 right-5 z-50 px-6 py-3 rounded-lg shadow-lg bg-green-600 text-white transition-all duration-500 transform ${
//           showPopup
//             ? "opacity-100 translate-y-0 scale-100"
//             : "opacity-0 -translate-y-10 scale-90 pointer-events-none"
//         }`}
//       >
//         {product.name} added to cart!
//       </div>

//       <section className="py-12 px-4 sm:px-6 max-w-7xl mx-auto">
//         <div className="grid md:grid-cols-3 gap-10 items-start">
//           {/* Images */}
//           <div className="flex flex-col md:flex-row-reverse md:col-span-2 gap-6 items-center justify-center">
//             <div className="flex flex-col justify-center items-center flex-1">
//               <div
//                 className="overflow-hidden w-full max-w-md rounded-xl shadow-lg relative"
//                 onTouchStart={(e) => setTouchStartX(e.touches[0].clientX)}
//                 onTouchEnd={(e) => {
//                   setTouchEndX(e.changedTouches[0].clientX);
//                   handleSwipe();
//                 }}
//               >
//                 <div
//                   className="flex transition-transform duration-500 ease-in-out"
//                   style={{ transform: `translateX(-${selectedImage * 100}%)` }}
//                 >
//                   {product.images.map((img, index) => (
//                     <img
//                       key={index}
//                       src={img}
//                       alt={`${product.name} ${index + 1}`}
//                       className="w-full flex-shrink-0 object-contain"
//                     />
//                   ))}
//                 </div>
//               </div>

//               {/* Dots */}
//               <div className="flex gap-2 mt-4 justify-center">
//                 {product.images.map((_, index) => (
//                   <button
//                     key={index}
//                     onClick={() => setSelectedImage(index)}
//                     className={`w-2 h-2 rounded-full transition-all duration-300 transform ${
//                       selectedImage === index
//                         ? "bg-red-500 scale-125"
//                         : "bg-gray-700 hover:bg-red-400 scale-100"
//                     }`}
//                   />
//                 ))}
//               </div>
//             </div>

//             {/* Thumbnails */}
//             <div className="flex md:flex-col flex-wrap justify-center gap-3">
//               {product.images.map((img, index) => (
//                 <img
//                   key={index}
//                   src={img}
//                   alt={`${product.name} ${index + 1}`}
//                   onClick={() => setSelectedImage(index)}
//                   className={`w-20 h-20 object-contain rounded-lg border cursor-pointer transition-all duration-300 ${
//                     selectedImage === index
//                       ? "border-red-500 scale-105"
//                       : "border-gray-700 hover:border-red-400"
//                   }`}
//                 />
//               ))}
//             </div>
//           </div>

//           {/* Product Info */}
//           <div className="flex flex-col justify-start space-y-4">
//             <h2 className="text-3xl font-bold">{product.name}</h2>
//             <div className="flex items-center gap-3">
//               <span className="text-yellow-400 text-lg">★★★★★</span>
//               <span className="text-green-400 font-semibold text-2xl">
//                 {product.discountPrice}
//               </span>
//               <span className="text-gray-500 line-through text-lg">
//                 {product.price}
//               </span>
//             </div>

//             <p className="text-gray-400">{product.desc}</p>

//             <div className="flex items-center gap-3">
//               <span className="text-green-400 font-medium">In Stock</span>
//               <span className="text-gray-400">| Delivery: 2-4 days</span>
//             </div>

//             {/* Add to Cart */}
//             <button
//               onClick={handleAddToCart}
//               className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-semibold mt-4"
//             >
//               🛒 Add to Cart
//             </button>
//           </div>
//         </div>

//         {/* Tabs */}
//         <div className="mt-16 max-w-5xl mx-auto">
//           <div className="flex justify-center gap-6 border-b border-gray-700 pb-2 mb-6 flex-wrap">
//             <button
//               onClick={() => setActiveTab("specs")}
//               className={`text-lg font-semibold transition-all ${
//                 activeTab === "specs"
//                   ? "text-red-500 border-b-2 border-red-500 pb-1"
//                   : "text-gray-400 hover:text-white"
//               }`}
//             >
//               Specification
//             </button>
//             <button
//               onClick={() => setActiveTab("overview")}
//               className={`text-lg font-semibold transition-all ${
//                 activeTab === "overview"
//                   ? "text-red-500 border-b-2 border-red-500 pb-1"
//                   : "text-gray-400 hover:text-white"
//               }`}
//             >
//               Overview
//             </button>
//             <button
//               onClick={() => setActiveTab("reviews")}
//               className={`text-lg font-semibold transition-all ${
//                 activeTab === "reviews"
//                   ? "text-red-500 border-b-2 border-red-500 pb-1"
//                   : "text-gray-400 hover:text-white"
//               }`}
//             >
//               Reviews
//             </button>
//           </div>

//           {activeTab === "specs" && (
//             <div className="text-gray-300 leading-relaxed space-y-2">
//               <p>• Bluetooth Version: 5.3</p>
//               <p>• Battery Life: Up to 40 Hours</p>
//               <p>• Charging Time: 1.5 Hours</p>
//               <p>• Frequency Range: 20Hz - 20kHz</p>
//               <p>• Noise Cancellation: Active NC</p>
//             </div>
//           )}

//           {activeTab === "overview" && (
//             <div className="text-gray-300 leading-relaxed space-y-2">
//               <p>
//                 Experience premium sound quality and ultimate comfort with the{" "}
//                 <span className="text-red-400 font-semibold">{product.name}</span>.
//               </p>
//               <p>
//                 Ideal for travel, gym, and work — lightweight, foldable, with
//                 long battery life.
//               </p>
//             </div>
//           )}

//           {activeTab === "reviews" && (
//             <div className="mt-8">
//               <ReviewsSection />
//             </div>
//           )}
//         </div>

//         <RelatedProducts currentProduct={product} />
//         <OurAdvantages />
//       </section>

//       <Footer />
//     </div>
//   );
// }
import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link, useLocation } from "react-router-dom";
import products from "../data/product";
import { useCart } from "../context/CartContext";
import ReviewsSection from "../components/ReviewsSection";
import RelatedProducts from "../components/RelatedProducts";
import OurAdvantages from "../components/OurAdvantages";
import Footer from "../components/Footer";
import { Search, ShoppingCart, User, X } from "lucide-react";
import LoginModal from "../components/LoginModal";
import SignupModal from "../components/SignupModal";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { addToCart, cartItems } = useCart();
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const product = products.find((p) => p.id === parseInt(id));
  if (!product) {
    return (
      <div className="text-center py-20 text-red-500 text-2xl">
        Product not found.
      </div>
    );
  }

  // ---------------- PRODUCT STATES ----------------
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState("specs");
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  // ---------------- NAVBAR STATES ----------------
  const [showSearch, setShowSearch] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [showUserPopup, setShowUserPopup] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [hoverTimer, setHoverTimer] = useState(null);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
    setShowSearch(false);
    setSearchQuery("");
  };

  const handleMouseEnter = () => {
    if (hoverTimer) clearTimeout(hoverTimer);
    setShowUserPopup(true);
  };

  const handleMouseLeave = () => {
    const timer = setTimeout(() => setShowUserPopup(false), 200);
    setHoverTimer(timer);
  };

  // ---------------- SCROLL EFFECT FOR NAVBAR ----------------
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (window.innerWidth <= 768) {
        if (currentY > lastScrollY && currentY > 100) setShowNavbar(false);
        else setShowNavbar(true);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(currentY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const navbar = document.querySelector("nav");
    if (navbar) {
      const height = navbar.offsetHeight;
      document.body.style.paddingTop = `${height}px`;
      document.body.style.backgroundColor = "#000"; 
    }
  }, [location.pathname]);

  // ---------------- PRODUCT FUNCTIONS ----------------
  const handleAddToCart = () => {
    const cartProduct = {
      ...product,
      title: product.name,
      discountPriceNum: parseInt(product.discountPrice.replace(/[^0-9]/g, "")),
      originalPrice: parseInt(product.price.replace(/[^0-9]/g, "")),
      quantity: 1,
    };
    addToCart(cartProduct);

    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
      navigate("/cart");
    }, 2000);
  };

  const handleSwipe = () => {
    const swipeDistance = touchStartX - touchEndX;
    const minSwipeDistance = 50;

    if (swipeDistance > minSwipeDistance) {
      setSelectedImage((prev) => (prev + 1) % product.images.length);
    } else if (swipeDistance < -minSwipeDistance) {
      setSelectedImage(
        (prev) => (prev - 1 + product.images.length) % product.images.length
      );
    }
  };

  return (
    <div className="bg-black text-white min-h-screen relative">
      {/* =================== NAVBAR =================== */}
      <nav
        className={`fixed top-0 left-0 w-full bg-black text-white flex items-center justify-between px-8 py-4 border-b border-gray-800 z-50 transition-transform duration-500 ease-in-out ${
          showNavbar ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <Link to="/" className="text-2xl font-bold text-red-600">Tech-Shop</Link>

        <div className="flex items-center gap-6 relative">
          <Search
            className="cursor-pointer hover:text-red-500 transition-colors"
            onClick={() => setShowSearch(!showSearch)}
          />

          <Link to="/cart" className="relative">
            <ShoppingCart className="cursor-pointer hover:text-red-500 transition-colors" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center animate-pulse">
                {totalItems}
              </span>
            )}
          </Link>

          <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <User className="cursor-pointer hover:text-red-500 transition-colors" />
            {showUserPopup && (
              <div className="absolute right-0 mt-3 w-72 bg-gray-900 border border-gray-700 rounded-lg shadow-xl animate-fadeIn">
                <div className="p-4 border-b border-gray-700">
                  <h3 className="text-lg font-semibold text-white">Hello!</h3>
                  <p className="text-gray-400 text-sm">Access account and manage orders</p>
                </div>
                <div className="flex justify-around py-3 border-b border-gray-700">
                  <button
                    onClick={() => { setShowLogin(true); setShowUserPopup(false); }}
                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-semibold transition-all"
                  >Login</button>
                  <button
                    onClick={() => { setShowSignup(true); setShowUserPopup(false); }}
                    className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-md text-sm font-semibold transition-all"
                  >Signup</button>
                </div>
                <div className="p-3 text-center text-gray-400 text-sm">Please Login</div>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* =================== SEARCH BAR =================== */}
      <div
        className={`fixed top-[64px] left-0 w-full z-40 flex flex-col items-center transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          showSearch ? "opacity-100 translate-y-0 scale-100 backdrop-blur-md" : "opacity-0 -translate-y-8 scale-95 pointer-events-none"
        }`}
      >
        <div className="bg-gray-900/90 w-full py-6 border-b border-gray-800 shadow-xl flex justify-center items-center backdrop-blur-lg">
          <div className="relative w-[85%] sm:w-[65%] md:w-[50%] lg:w-[40%]">
            <input
              type="text"
              placeholder="Search for products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-black/80 border border-gray-700 rounded-full px-6 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 transition-all duration-300"
              autoFocus={showSearch}
            />
            <X
              onClick={() => { setShowSearch(false); setSearchQuery(""); }}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-red-500 cursor-pointer transition-all duration-300 hover:rotate-90 hover:scale-110"
            />
          </div>
        </div>

        {showSearch && searchQuery && (
          <div className="absolute top-[110px] bg-gray-900 w-[85%] sm:w-[65%] md:w-[50%] lg:w-[40%] rounded-lg shadow-lg border border-gray-700 max-h-80 overflow-y-auto">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((item) => (
                <div
                  key={item.id}
                  onClick={() => handleProductClick(item.id)}
                  className="flex items-center gap-4 p-3 cursor-pointer hover:bg-gray-800 transition-colors"
                >
                  <img src={item.images[0]} alt={item.name} className="w-12 h-12 object-cover rounded" />
                  <div>
                    <h4 className="text-white text-sm font-semibold">{item.name}</h4>
                    <p className="text-gray-400 text-xs">{item.desc}</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-400 text-center py-4">No products found</p>
            )}
          </div>
        )}
      </div>

      {/* ---------------- ADD TO CART POPUP ---------------- */}
      <div
        className={`fixed top-5 right-5 z-50 px-6 py-3 rounded-lg shadow-lg bg-green-600 text-white transition-all duration-500 transform ${
          showPopup ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-10 scale-90 pointer-events-none"
        }`}
      >
        {product.name} added to cart!
      </div>

      {/* ---------------- PRODUCT DETAILS ---------------- */}
      <section className="py-12 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10 items-start">
          {/* Images */}
          <div className="flex flex-col md:flex-row-reverse md:col-span-2 gap-6 items-center justify-center">
            <div className="flex flex-col justify-center items-center flex-1">
              <div
                className="overflow-hidden w-full max-w-md rounded-xl shadow-lg relative"
                onTouchStart={(e) => setTouchStartX(e.touches[0].clientX)}
                onTouchEnd={(e) => { setTouchEndX(e.changedTouches[0].clientX); handleSwipe(); }}
              >
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${selectedImage * 100}%)` }}
                >
                  {product.images.map((img, index) => (
                    <img key={index} src={img} alt={`${product.name} ${index + 1}`} className="w-full flex-shrink-0 object-contain" />
                  ))}
                </div>
              </div>

              {/* Dots */}
              <div className="flex gap-2 mt-4 justify-center">
                {product.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 transform ${selectedImage === index ? "bg-red-500 scale-125" : "bg-gray-700 hover:bg-red-400 scale-100"}`}
                  />
                ))}
              </div>
            </div>

            {/* Thumbnails */}
            <div className="flex md:flex-col flex-wrap justify-center gap-3">
              {product.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${product.name} ${index + 1}`}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 object-contain rounded-lg border cursor-pointer transition-all duration-300 ${selectedImage === index ? "border-red-500 scale-105" : "border-gray-700 hover:border-red-400"}`}
                />
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-start space-y-4">
            <h2 className="text-3xl font-bold">{product.name}</h2>
            <div className="flex items-center gap-3">
              <span className="text-yellow-400 text-lg">★★★★★</span>
              <span className="text-green-400 font-semibold text-2xl">{product.discountPrice}</span>
              <span className="text-gray-500 line-through text-lg">{product.price}</span>
            </div>

            <p className="text-gray-400">{product.desc}</p>

            <div className="flex items-center gap-3">
              <span className="text-green-400 font-medium">In Stock</span>
              <span className="text-gray-400">| Delivery: 2-4 days</span>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-semibold mt-4"
            >
              🛒 Add to Cart
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-16 max-w-5xl mx-auto">
          <div className="flex justify-center gap-6 border-b border-gray-700 pb-2 mb-6 flex-wrap">
            <button onClick={() => setActiveTab("specs")} className={`text-lg font-semibold transition-all ${activeTab === "specs" ? "text-red-500 border-b-2 border-red-500 pb-1" : "text-gray-400 hover:text-white"}`}>Specification</button>
            <button onClick={() => setActiveTab("overview")} className={`text-lg font-semibold transition-all ${activeTab === "overview" ? "text-red-500 border-b-2 border-red-500 pb-1" : "text-gray-400 hover:text-white"}`}>Overview</button>
            <button onClick={() => setActiveTab("reviews")} className={`text-lg font-semibold transition-all ${activeTab === "reviews" ? "text-red-500 border-b-2 border-red-500 pb-1" : "text-gray-400 hover:text-white"}`}>Reviews</button>
          </div>
          {activeTab === "specs" && <div className="text-gray-300 leading-relaxed space-y-2"><p>• Bluetooth Version: 5.3</p><p>• Battery Life: Up to 40 Hours</p><p>• Charging Time: 1.5 Hours</p><p>• Frequency Range: 20Hz - 20kHz</p><p>• Noise Cancellation: Active NC</p></div>}
          {activeTab === "overview" && <div className="text-gray-300 leading-relaxed space-y-2"><p>Experience premium sound quality and ultimate comfort with the <span className="text-red-400 font-semibold">{product.name}</span>.</p><p>Ideal for travel, gym, and work — lightweight, foldable, with long battery life.</p></div>}
          {activeTab === "reviews" && <div className="mt-8"><ReviewsSection /></div>}
        </div>

        <RelatedProducts currentProduct={product} />
        <OurAdvantages />
      </section>

      <Footer />

      {/* =================== LOGIN / SIGNUP MODALS =================== */}
      {showLogin && <LoginModal onClose={() => setShowLogin(false)} openSignup={() => { setShowLogin(false); setShowSignup(true); }} />}
      {showSignup && <SignupModal onClose={() => setShowSignup(false)} openLogin={() => { setShowSignup(false); setShowLogin(true); }} />}
    </div>
  );
}
