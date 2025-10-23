// // import React, { useState, useEffect } from "react";
// // import productsData from "../data/product";
// // import { useCart } from "../context/CartContext";
// // import { useNavigate, Link } from "react-router-dom";
// // import { sortMenu, brandsMenu, categoryMenu } from "../data/filterData";
// // import { FiMenu, FiX } from "react-icons/fi";

// // export default function AllProducts() {
// //   const { addToCart } = useCart();
// //   const navigate = useNavigate();

// //   const productsWithPrice = productsData.map((p) => ({
// //     ...p,
// //     discountPriceNum: Number(p.discountPrice.replace(/[₹,]/g, "")),
// //     originalPriceNum: Number(p.price.replace(/[₹,]/g, "")),
// //   }));

// //   const [products, setProducts] = useState(productsWithPrice);
// //   const [sortType, setSortType] = useState("");
// //   const [selectedBrands, setSelectedBrands] = useState([]);
// //   const [selectedCategories, setSelectedCategories] = useState([]);
// //   const [priceRange, setPriceRange] = useState([0, 30000]);
// //   const [showPopup, setShowPopup] = useState(false);
// //   const [showSidebar, setShowSidebar] = useState(false);

// //   useEffect(() => {
// //     let filtered = [...productsWithPrice];

// //     if (selectedBrands.length > 0) {
// //       filtered = filtered.filter((p) => selectedBrands.includes(p.brand));
// //     }
// //     if (selectedCategories.length > 0) {
// //       filtered = filtered.filter((p) => selectedCategories.includes(p.category));
// //     }

// //     filtered = filtered.filter(
// //       (p) => p.discountPriceNum >= priceRange[0] && p.discountPriceNum <= priceRange[1]
// //     );

// //     if (sortType === "Featured") filtered = filtered.filter((p) => p.featured);
// //     else if (sortType === "Top Rated") filtered = filtered.filter((p) => p.rateCount >= 4);
// //     else if (sortType === "Price(Lowest First)") filtered.sort((a, b) => a.discountPriceNum - b.discountPriceNum);
// //     else if (sortType === "Price(Highest First)") filtered.sort((a, b) => b.discountPriceNum - a.discountPriceNum);

// //     setProducts(filtered);
// //   }, [selectedBrands, selectedCategories, priceRange, sortType]);

// //   const handleBrandChange = (brand) => {
// //     setSelectedBrands((prev) =>
// //       prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
// //     );
// //   };

// //   const handleCategoryChange = (category) => {
// //     setSelectedCategories((prev) =>
// //       prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
// //     );
// //   };

// //   const handlePriceChange = (e) => {
// //     setPriceRange([0, Number(e.target.value)]);
// //   };

// //   const handleClearFilters = () => {
// //     setSelectedBrands([]);
// //     setSelectedCategories([]);
// //     setSortType("");
// //     setPriceRange([0, 30000]);
// //   };

// //   const handleProductClick = (id) => navigate(`/product/${id}`);

// //   const renderStars = (count) =>
// //     Array.from({ length: 5 }, (_, i) => (
// //       <span key={i} className={`text-yellow-400 ${i < count ? "★" : "☆"}`}></span>
// //     ));

// //   const handleAddToCart = (product) => {
// //     addToCart(product);
// //     setShowPopup(true);
// //     setTimeout(() => setShowPopup(false), 1000);
// //   };

// //   return (
// //     <div className="bg-black text-white min-h-screen">
// //       {/* Top Bar */}
// //       <div className="flex justify-between items-center px-6 py-4 border-b border-gray-700 fixed top-0 left-0 right-0 z-50 bg-black">
// //         {/* Logo */}
// //         <Link
// //           to="/"
// //           className="text-2xl font-bold text-red-600 animate-pulse"
// //         >
// //           Tech-Shop
// //         </Link>

// //         {/* Mobile Sidebar Toggle */}
// //         <div className="lg:hidden">
// //           <FiMenu size={28} className="cursor-pointer text-red-500" onClick={() => setShowSidebar(true)} />
// //         </div>
// //       </div>

// //       {/* Fixed Sidebar */}
// //       <aside
// //         className={`fixed top-16 right-0 h-[calc(100%-64px)] bg-gray-900 border-l border-gray-700 p-6 w-64 overflow-y-auto z-40 transform transition-transform duration-300
// //         ${showSidebar ? "translate-x-0" : "translate-x-full"} lg:translate-x-0 lg:h-[calc(100%-64px)]`}
// //       >
// //         {/* Close button for mobile */}
// //         <div className="flex justify-end lg:hidden mb-4">
// //           <FiX size={24} className="cursor-pointer hover:text-red-500" onClick={() => setShowSidebar(false)} />
// //         </div>

// //         <button
// //           onClick={handleClearFilters}
// //           className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded mb-4 w-full text-center"
// //         >
// //           Clear Filters
// //         </button>

// //         <h2 className="text-xl font-bold mb-4">Sort By</h2>
// //         {sortMenu.map((item) => (
// //           <div key={item.id}>
// //             <button
// //               onClick={() => setSortType(item.title)}
// //               className={`mb-2 w-full text-left px-2 py-1 rounded ${
// //                 sortType === item.title ? "bg-red-600" : "bg-gray-900"
// //               }`}
// //             >
// //               {item.title}
// //             </button>
// //           </div>
// //         ))}

// //         <h2 className="text-xl font-bold mt-6 mb-2">Brands</h2>
// //         {brandsMenu.map((brand) => (
// //           <div key={brand.id}>
// //             <label className="flex items-center gap-2">
// //               <input
// //                 type="checkbox"
// //                 onChange={() => handleBrandChange(brand.label)}
// //                 checked={selectedBrands.includes(brand.label)}
// //               />
// //               {brand.label}
// //             </label>
// //           </div>
// //         ))}

// //         <h2 className="text-xl font-bold mt-6 mb-2">Category</h2>
// //         {categoryMenu.map((cat) => (
// //           <div key={cat.id}>
// //             <label className="flex items-center gap-2">
// //               <input
// //                 type="checkbox"
// //                 onChange={() => handleCategoryChange(cat.label)}
// //                 checked={selectedCategories.includes(cat.label)}
// //               />
// //               {cat.label}
// //             </label>
// //           </div>
// //         ))}

// //         <h2 className="text-xl font-bold mt-6 mb-2">Price (Max ₹{priceRange[1]})</h2>
// //         <input
// //           type="range"
// //           min="0"
// //           max="30000"
// //           value={priceRange[1]}
// //           onChange={handlePriceChange}
// //           className="w-full"
// //         />
// //       </aside>

// //       {/* Animated Add-to-Cart Popup */}
// //       {showPopup && (
// //         <div className="fixed top-32 left-1/2 transform -translate-x-1/2 bg-green-500 text-black font-semibold px-6 py-3 rounded-full shadow-lg animate-bounce z-50">
// //           Added to Cart!
// //         </div>
// //       )}

// //       {/* Products Grid */}
// //       <main className="pt-20 px-6 lg:pl-6 lg:pr-80 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
// //         {products.length === 0 ? (
// //           <p className="text-gray-400 col-span-full">No products found.</p>
// //         ) : (
// //           products.map((product) => (
// //             <div
// //               key={product.id}
// //               className="bg-gray-900 rounded-2xl p-4 shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
// //               onClick={() => handleProductClick(product.id)}
// //             >
// //               <img
// //                 src={product.images[0]}
// //                 alt={product.title || product.name}
// //                 className="w-full h-56 object-contain mb-4"
// //               />
// //               <h2 className="text-lg font-semibold">{product.title || product.name}</h2>
// //               <p className="text-gray-400 text-sm mb-1">{product.brand}</p>
// //               <div className="mb-2">{renderStars(product.rateCount)}</div>
// //               <div className="flex justify-between items-center">
// //                 <div>
// //                   <span className="text-green-400 font-bold">
// //                     ₹{product.discountPriceNum}
// //                   </span>{" "}
// //                   {product.discountPriceNum < product.originalPriceNum && (
// //                     <span className="line-through text-gray-500 ml-2">
// //                       ₹{product.originalPriceNum}
// //                     </span>
// //                   )}
// //                 </div>
// //                 <button
// //                   onClick={(e) => {
// //                     e.stopPropagation();
// //                     handleAddToCart(product);
// //                   }}
// //                   className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded-lg text-sm transition"
// //                 >
// //                   Add to Cart
// //                 </button>
// //               </div>
// //             </div>
// //           ))
// //         )}
// //       </main>
// //     </div>
// //   );
// // }
// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { Search, ShoppingCart, User, X } from "lucide-react";
// import { useCart } from "../context/CartContext";
// import productsData from "../data/product";
// import { sortMenu, brandsMenu, categoryMenu } from "../data/filterData";
// import { FiMenu, FiX } from "react-icons/fi";
// import LoginModal from "../components/LoginModal";
// import SignupModal from "../components/SignupModal";

// export default function AllProducts() {
//   const { addToCart, cartItems } = useCart();
//   const navigate = useNavigate();

//   // -------- Navbar States --------
//   const [showSearch, setShowSearch] = useState(false);
//   const [showLogin, setShowLogin] = useState(false);
//   const [showSignup, setShowSignup] = useState(false);
//   const [showUserPopup, setShowUserPopup] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [hoverTimer, setHoverTimer] = useState(null);
//   const [showNavbar, setShowNavbar] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);

//   // -------- Products & Filters States --------
//   const productsWithPrice = productsData.map((p) => ({
//     ...p,
//     discountPriceNum: Number(p.discountPrice.replace(/[₹,]/g, "")),
//     originalPriceNum: Number(p.price.replace(/[₹,]/g, "")),
//   }));

//   const [products, setProducts] = useState(productsWithPrice);
//   const [sortType, setSortType] = useState("");
//   const [selectedBrands, setSelectedBrands] = useState([]);
//   const [selectedCategories, setSelectedCategories] = useState([]);
//   const [priceRange, setPriceRange] = useState([0, 30000]);
//   const [showPopup, setShowPopup] = useState(false);
//   const [showSidebar, setShowSidebar] = useState(false);

//   const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

//   const filteredProducts = productsData.filter((item) =>
//     item.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   // -------- Navbar Handlers --------
//   const handleProductClick = (id) => {
//     navigate(`/product/${id}`);
//     setShowSearch(false);
//     setSearchQuery("");
//   };

//   const handleMouseEnter = () => {
//     if (hoverTimer) clearTimeout(hoverTimer);
//     setShowUserPopup(true);
//   };
//   const handleMouseLeave = () => {
//     const timer = setTimeout(() => setShowUserPopup(false), 200);
//     setHoverTimer(timer);
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentY = window.scrollY;
//       if (window.innerWidth <= 768) {
//         if (currentY > lastScrollY && currentY > 100) setShowNavbar(false);
//         else setShowNavbar(true);
//       } else {
//         setShowNavbar(true);
//       }
//       setLastScrollY(currentY);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [lastScrollY]);

//   useEffect(() => {
//     const navbar = document.querySelector("nav");
//     if (navbar) {
//       const height = navbar.offsetHeight;
//       document.body.style.paddingTop = `${height}px`;
//       document.body.style.backgroundColor = "#000";
//     }
//   }, []);

//   // -------- Product Filter Logic --------
//   useEffect(() => {
//     let filtered = [...productsWithPrice];

//     if (selectedBrands.length > 0) {
//       filtered = filtered.filter((p) => selectedBrands.includes(p.brand));
//     }
//     if (selectedCategories.length > 0) {
//       filtered = filtered.filter((p) => selectedCategories.includes(p.category));
//     }
//     filtered = filtered.filter(
//       (p) => p.discountPriceNum >= priceRange[0] && p.discountPriceNum <= priceRange[1]
//     );

//     if (sortType === "Featured") filtered = filtered.filter((p) => p.featured);
//     else if (sortType === "Top Rated") filtered = filtered.filter((p) => p.rateCount >= 4);
//     else if (sortType === "Price(Lowest First)")
//       filtered.sort((a, b) => a.discountPriceNum - b.discountPriceNum);
//     else if (sortType === "Price(Highest First)")
//       filtered.sort((a, b) => b.discountPriceNum - a.discountPriceNum);

//     setProducts(filtered);
//   }, [selectedBrands, selectedCategories, priceRange, sortType]);

//   const handleBrandChange = (brand) => {
//     setSelectedBrands((prev) =>
//       prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
//     );
//   };
//   const handleCategoryChange = (category) => {
//     setSelectedCategories((prev) =>
//       prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
//     );
//   };
//   const handlePriceChange = (e) => setPriceRange([0, Number(e.target.value)]);
//   const handleClearFilters = () => {
//     setSelectedBrands([]);
//     setSelectedCategories([]);
//     setSortType("");
//     setPriceRange([0, 30000]);
//   };

//   const handleAddToCart = (product) => {
//     addToCart(product);
//     setShowPopup(true);
//     setTimeout(() => setShowPopup(false), 1000);
//   };

//   const renderStars = (count) =>
//     Array.from({ length: 5 }, (_, i) => (
//       <span key={i} className={`text-yellow-400 ${i < count ? "★" : "☆"}`}></span>
//     ));

//   // ------------------ RETURN ------------------
//   return (
//     <div className="bg-black text-white min-h-screen">
//       {/* =================== NAVBAR =================== */}
//       <nav
//         className={`fixed top-0 left-0 w-full bg-black text-white flex items-center justify-between px-8 py-4 border-b border-gray-800 z-50 transition-transform duration-500 ease-in-out ${
//           showNavbar ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
//         }`}
//       >
//         <span className="text-2xl font-bold text-red-600 cursor-pointer" onClick={() => navigate("/")}>
//           Tech-Shop
//         </span>

//         <div className="flex items-center gap-6 relative">
//           <Search
//             className="cursor-pointer hover:text-red-500 transition-colors"
//             onClick={() => setShowSearch(!showSearch)}
//           />

//           <div className="relative" onClick={() => navigate("/cart")}>
//             <ShoppingCart className="cursor-pointer hover:text-red-500 transition-colors" />
//             {totalItems > 0 && (
//               <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center animate-pulse">
//                 {totalItems}
//               </span>
//             )}
//           </div>

//           <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
//             <User className="cursor-pointer hover:text-red-500 transition-colors" />

//             {showUserPopup && (
//               <div className="absolute right-0 mt-3 w-72 bg-gray-900 border border-gray-700 rounded-lg shadow-xl animate-fadeIn">
//                 <div className="p-4 border-b border-gray-700">
//                   <h3 className="text-lg font-semibold text-white">Hello!</h3>
//                   <p className="text-gray-400 text-sm">Access account and manage orders</p>
//                 </div>
//                 <div className="flex justify-around py-3 border-b border-gray-700">
//                   <button
//                     onClick={() => { setShowLogin(true); setShowUserPopup(false); }}
//                     className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-semibold transition-all"
//                   >
//                     Login
//                   </button>
//                   <button
//                     onClick={() => { setShowSignup(true); setShowUserPopup(false); }}
//                     className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-md text-sm font-semibold transition-all"
//                   >
//                     Signup
//                   </button>
//                 </div>
//                 <div className="p-3 text-center text-gray-400 text-sm">Please Login</div>
//               </div>
//             )}
//           </div>
//         </div>
//       </nav>

//       {/* =================== SEARCH BAR =================== */}
//       <div
//         className={`fixed top-[64px] left-0 w-full z-40 flex flex-col items-center transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${
//           showSearch ? "opacity-100 translate-y-0 scale-100 backdrop-blur-md" : "opacity-0 -translate-y-8 scale-95 pointer-events-none"
//         }`}
//       >
//         <div className="bg-gray-900/90 w-full py-6 border-b border-gray-800 shadow-xl flex justify-center items-center backdrop-blur-lg">
//           <div className="relative w-[85%] sm:w-[65%] md:w-[50%] lg:w-[40%]">
//             <input
//               type="text"
//               placeholder="Search for products..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="w-full bg-black/80 border border-gray-700 rounded-full px-6 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 transition-all duration-300"
//               autoFocus={showSearch}
//             />
//             <X
//               onClick={() => { setShowSearch(false); setSearchQuery(""); }}
//               className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-red-500 cursor-pointer transition-all duration-300 hover:rotate-90 hover:scale-110"
//             />
//           </div>
//         </div>

//         {showSearch && searchQuery && (
//           <div className="absolute top-[110px] bg-gray-900 w-[85%] sm:w-[65%] md:w-[50%] lg:w-[40%] rounded-lg shadow-lg border border-gray-700 max-h-80 overflow-y-auto">
//             {filteredProducts.length > 0 ? (
//               filteredProducts.map((item) => (
//                 <div
//                   key={item.id}
//                   onClick={() => handleProductClick(item.id)}
//                   className="flex items-center gap-4 p-3 cursor-pointer hover:bg-gray-800 transition-colors"
//                 >
//                   <img src={item.images[0]} alt={item.name} className="w-12 h-12 object-cover rounded" />
//                   <div>
//                     <h4 className="text-white text-sm font-semibold">{item.name}</h4>
//                     <p className="text-gray-400 text-xs">{item.desc}</p>
//                   </div>
//                 </div>
//               ))
//             ) : (
//               <p className="text-gray-400 text-center py-4">No products found</p>
//             )}
//           </div>
//         )}
//       </div>

//       {/* =================== LOGIN / SIGNUP MODALS =================== */}
//       {showLogin && <LoginModal onClose={() => setShowLogin(false)} openSignup={() => { setShowLogin(false); setShowSignup(true); }} />}
//       {showSignup && <SignupModal onClose={() => setShowSignup(false)} openLogin={() => { setShowSignup(false); setShowLogin(true); }} />}

//       {/* ------------------ FILTER SIDEBAR ------------------ */}
//       <aside
//         className={`fixed top-16 right-0 h-[calc(100%-64px)] bg-gray-900 border-l border-gray-700 p-6 w-64 overflow-y-auto z-40 transform transition-transform duration-300
//         ${showSidebar ? "translate-x-0" : "translate-x-full"} lg:translate-x-0 lg:h-[calc(100%-64px)]`}
//       >
//         <div className="flex justify-end lg:hidden mb-4">
//           <FiX size={24} className="cursor-pointer hover:text-red-500" onClick={() => setShowSidebar(false)} />
//         </div>

//         <button
//           onClick={handleClearFilters}
//           className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded mb-4 w-full text-center"
//         >
//           Clear Filters
//         </button>

//         <h2 className="text-xl font-bold mb-4">Sort By</h2>
//         {sortMenu.map((item) => (
//           <div key={item.id}>
//             <button
//               onClick={() => setSortType(item.title)}
//               className={`mb-2 w-full text-left px-2 py-1 rounded ${
//                 sortType === item.title ? "bg-red-600" : "bg-gray-900"
//               }`}
//             >
//               {item.title}
//             </button>
//           </div>
//         ))}

//         <h2 className="text-xl font-bold mt-6 mb-2">Brands</h2>
//         {brandsMenu.map((brand) => (
//           <div key={brand.id}>
//             <label className="flex items-center gap-2">
//               <input
//                 type="checkbox"
//                 onChange={() => handleBrandChange(brand.label)}
//                 checked={selectedBrands.includes(brand.label)}
//               />
//               {brand.label}
//             </label>
//           </div>
//         ))}

//         <h2 className="text-xl font-bold mt-6 mb-2">Category</h2>
//         {categoryMenu.map((cat) => (
//           <div key={cat.id}>
//             <label className="flex items-center gap-2">
//               <input
//                 type="checkbox"
//                 onChange={() => handleCategoryChange(cat.label)}
//                 checked={selectedCategories.includes(cat.label)}
//               />
//               {cat.label}
//             </label>
//           </div>
//         ))}

//         <h2 className="text-xl font-bold mt-6 mb-2">Price (Max ₹{priceRange[1]})</h2>
//         <input
//           type="range"
//           min="0"
//           max="30000"
//           value={priceRange[1]}
//           onChange={handlePriceChange}
//           className="w-full"
//         />
//       </aside>

//       {/* ------------------ Add-to-Cart Popup ------------------ */}
//       {showPopup && (
//         <div className="fixed top-32 left-1/2 transform -translate-x-1/2 bg-green-500 text-black font-semibold px-6 py-3 rounded-full shadow-lg animate-bounce z-50">
//           Added to Cart!
//         </div>
//       )}

//       {/* ------------------ Products Grid ------------------ */}
//       <main className="pt-20 px-6 lg:pl-6 lg:pr-80 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {products.length === 0 ? (
//           <p className="text-gray-400 col-span-full">No products found.</p>
//         ) : (
//           products.map((product) => (
//             <div
//               key={product.id}
//               className="bg-gray-900 rounded-2xl p-4 shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
//               onClick={() => handleProductClick(product.id)}
//             >
//               <img src={product.images[0]} alt={product.title || product.name} className="w-full h-56 object-contain mb-4" />
//               <h2 className="text-lg font-semibold">{product.title || product.name}</h2>
//               <p className="text-gray-400 text-sm mb-1">{product.brand}</p>
//               <div className="mb-2">{renderStars(product.rateCount)}</div>
//               <div className="flex justify-between items-center">
//                 <div>
//                   <span className="text-green-400 font-bold">₹{product.discountPriceNum}</span>{" "}
//                   {product.discountPriceNum < product.originalPriceNum && (
//                     <span className="line-through text-gray-500 ml-2">₹{product.originalPriceNum}</span>
//                   )}
//                 </div>
//                 <button
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     handleAddToCart(product);
//                   }}
//                   className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded-lg text-sm transition"
//                 >
//                   Add to Cart
//                 </button>
//               </div>
//             </div>
//           ))
//         )}
//       </main>
//     </div>
//   );
// }
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Search, ShoppingCart, User, X } from "lucide-react";
import { useCart } from "../context/CartContext";
import productsData from "../data/product";
import { sortMenu, brandsMenu, categoryMenu } from "../data/filterData";
import { FiMenu, FiX } from "react-icons/fi";
import LoginModal from "../components/LoginModal";
import SignupModal from "../components/SignupModal";

export default function AllProducts() {
  const { addToCart, cartItems } = useCart();
  const navigate = useNavigate();

  // -------- Navbar States --------
  const [showSearch, setShowSearch] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [showUserPopup, setShowUserPopup] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [hoverTimer, setHoverTimer] = useState(null);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // -------- Products & Filters States --------
  const productsWithPrice = productsData.map((p) => ({
    ...p,
    discountPriceNum: Number(p.discountPrice.replace(/[₹,]/g, "")),
    originalPriceNum: Number(p.price.replace(/[₹,]/g, "")),
  }));

  const [products, setProducts] = useState(productsWithPrice);
  const [sortType, setSortType] = useState("");
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 30000]);
  const [showPopup, setShowPopup] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const filteredProducts = productsData.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // -------- Navbar Handlers --------
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
  }, []);

  // -------- Product Filter Logic --------
  useEffect(() => {
    let filtered = [...productsWithPrice];

    if (selectedBrands.length > 0) {
      filtered = filtered.filter((p) => selectedBrands.includes(p.brand));
    }
    if (selectedCategories.length > 0) {
      filtered = filtered.filter((p) => selectedCategories.includes(p.category));
    }
    filtered = filtered.filter(
      (p) => p.discountPriceNum >= priceRange[0] && p.discountPriceNum <= priceRange[1]
    );

    if (sortType === "Featured") filtered = filtered.filter((p) => p.featured);
    else if (sortType === "Top Rated") filtered = filtered.filter((p) => p.rateCount >= 4);
    else if (sortType === "Price(Lowest First)")
      filtered.sort((a, b) => a.discountPriceNum - b.discountPriceNum);
    else if (sortType === "Price(Highest First)")
      filtered.sort((a, b) => b.discountPriceNum - a.discountPriceNum);

    setProducts(filtered);
  }, [selectedBrands, selectedCategories, priceRange, sortType]);

  const handleBrandChange = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };
  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    );
  };
  const handlePriceChange = (e) => setPriceRange([0, Number(e.target.value)]);
  const handleClearFilters = () => {
    setSelectedBrands([]);
    setSelectedCategories([]);
    setSortType("");
    setPriceRange([0, 30000]);
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 1000);
  };

  const renderStars = (count) =>
    Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-yellow-400 ${i < count ? "★" : "☆"}`}></span>
    ));

  // ------------------ RETURN ------------------
  return (
    <div className="bg-black text-white min-h-screen">
      {/* =================== NAVBAR =================== */}
      <nav
        className={`fixed top-0 left-0 w-full bg-black text-white flex items-center justify-between px-4 sm:px-8 py-4 border-b border-gray-800 z-50 transition-transform duration-500 ease-in-out ${
          showNavbar ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <span className="text-2xl font-bold text-red-600 cursor-pointer" onClick={() => navigate("/")}>
          Tech-Shop
        </span>

        <div className="flex items-center gap-4 sm:gap-6">
          <Search
            className="cursor-pointer hover:text-red-500 transition-colors"
            onClick={() => setShowSearch(!showSearch)}
          />

          <div className="relative" onClick={() => navigate("/cart")}>
            <ShoppingCart className="cursor-pointer hover:text-red-500 transition-colors" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center animate-pulse">
                {totalItems}
              </span>
            )}
          </div>

          <div className="relative hidden sm:block" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
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
                  >
                    Login
                  </button>
                  <button
                    onClick={() => { setShowSignup(true); setShowUserPopup(false); }}
                    className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-md text-sm font-semibold transition-all"
                  >
                    Signup
                  </button>
                </div>
                <div className="p-3 text-center text-gray-400 text-sm">Please Login</div>
              </div>
            )}
          </div>

          {/* Hamburger for Mobile Filter */}
          <div className="sm:hidden">
            <FiMenu
              size={28}
              className="cursor-pointer text-red-500"
              onClick={() => setShowSidebar(true)}
            />
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

      {/* =================== LOGIN / SIGNUP MODALS =================== */}
      {showLogin && <LoginModal onClose={() => setShowLogin(false)} openSignup={() => { setShowLogin(false); setShowSignup(true); }} />}
      {showSignup && <SignupModal onClose={() => setShowSignup(false)} openLogin={() => { setShowSignup(false); setShowLogin(true); }} />}

      {/* ------------------ FILTER SIDEBAR ------------------ */}
      <aside
        className={`fixed top-16 right-0 h-[calc(100%-64px)] bg-gray-900 border-l border-gray-700 p-6 w-64 overflow-y-auto z-50 transform transition-transform duration-300
        ${showSidebar ? "translate-x-0" : "translate-x-full"} lg:translate-x-0 lg:h-[calc(100%-64px)]`}
      >
        <div className="flex justify-end lg:hidden mb-4">
          <FiX size={24} className="cursor-pointer hover:text-red-500" onClick={() => setShowSidebar(false)} />
        </div>

        <button
          onClick={handleClearFilters}
          className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded mb-4 w-full text-center"
        >
          Clear Filters
        </button>

        <h2 className="text-xl font-bold mb-4">Sort By</h2>
        {sortMenu.map((item) => (
          <div key={item.id}>
            <button
              onClick={() => setSortType(item.title)}
              className={`mb-2 w-full text-left px-2 py-1 rounded ${
                sortType === item.title ? "bg-red-600" : "bg-gray-900"
              }`}
            >
              {item.title}
            </button>
          </div>
        ))}

        <h2 className="text-xl font-bold mt-6 mb-2">Brands</h2>
        {brandsMenu.map((brand) => (
          <div key={brand.id}>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                onChange={() => handleBrandChange(brand.label)}
                checked={selectedBrands.includes(brand.label)}
              />
              {brand.label}
            </label>
          </div>
        ))}

        <h2 className="text-xl font-bold mt-6 mb-2">Category</h2>
        {categoryMenu.map((cat) => (
          <div key={cat.id}>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                onChange={() => handleCategoryChange(cat.label)}
                checked={selectedCategories.includes(cat.label)}
              />
              {cat.label}
            </label>
          </div>
        ))}

        <h2 className="text-xl font-bold mt-6 mb-2">Price (Max ₹{priceRange[1]})</h2>
        <input
          type="range"
          min="0"
          max="30000"
          value={priceRange[1]}
          onChange={handlePriceChange}
          className="w-full"
        />
      </aside>

      {/* ------------------ Add-to-Cart Popup ------------------ */}
      {showPopup && (
        <div className="fixed top-32 left-1/2 transform -translate-x-1/2 bg-green-500 text-black font-semibold px-6 py-3 rounded-full shadow-lg animate-bounce z-50">
          Added to Cart!
        </div>
      )}

      {/* ------------------ Products Grid ------------------ */}
      <main className="pt-20 px-4 sm:px-6 lg:pl-6 lg:pr-80 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.length === 0 ? (
          <p className="text-gray-400 col-span-full">No products found.</p>
        ) : (
          products.map((product) => (
            <div
              key={product.id}
              className="bg-gray-900 rounded-2xl p-4 shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
              onClick={() => handleProductClick(product.id)}
            >
              <img src={product.images[0]} alt={product.title || product.name} className="w-full h-56 object-contain mb-4" />
              <h2 className="text-lg font-semibold">{product.title || product.name}</h2>
              <p className="text-gray-400 text-sm mb-1">{product.brand}</p>
              <div className="mb-2">{renderStars(product.rateCount)}</div>
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-green-400 font-bold">₹{product.discountPriceNum}</span>{" "}
                  {product.discountPriceNum < product.originalPriceNum && (
                    <span className="line-through text-gray-500 ml-2">₹{product.originalPriceNum}</span>
                  )}
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAddToCart(product);
                  }}
                  className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded-lg text-sm transition"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))
        )}
      </main>
    </div>
  );
}
