
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { FiSearch, FiShoppingCart, FiUser, FiX, FiTrash2 } from "react-icons/fi";
// import { FaGoogle, FaFacebook, FaGithub } from "react-icons/fa";
// import { useCart } from "../context/CartContext";
// import products from "../data/product";

// /* ------------------ CART PAGE ------------------ */
// export default function CartPage() {
//   const { cartItems, addToCart, removeFromCart, deleteFromCart, clearCart } = useCart();
//   const navigate = useNavigate();
//   const [isClearing, setIsClearing] = useState(false);

//   // Navbar & Search States
//   const [showSearch, setShowSearch] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [showLogin, setShowLogin] = useState(false);
//   const [showSignup, setShowSignup] = useState(false);
//   const [showUserPopup, setShowUserPopup] = useState(false);

//   const totalProducts = cartItems.reduce((acc, item) => acc + item.quantity, 0);

//   const handleProductClick = (id) => {
//     navigate(`/product/${id}`);
//     setShowSearch(false);
//     setSearchQuery("");
//   };

//   const handleClearCart = () => {
//     setIsClearing(true);
//     setTimeout(() => {
//       clearCart();
//       setIsClearing(false);
//     }, 500);
//   };

//   const originalPrice = cartItems.reduce((total, item) => total + item.originalPrice * item.quantity, 0);
//   const discountTotal = cartItems.reduce(
//     (total, item) => total + (item.originalPrice - item.discountPriceNum) * item.quantity,
//     0
//   );
//   const finalTotal = cartItems.reduce((total, item) => total + item.discountPriceNum * item.quantity, 0);

//   const filteredProducts = products.filter((product) =>
//     product.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div className="bg-[#0d0d0d] text-white min-h-screen relative">
//       {/* ---------------- NAVBAR ---------------- */}
//       <nav className="sticky top-0 z-50 bg-black border-b border-gray-800 px-4 sm:px-6 py-3 flex justify-between items-center max-w-[1200px] mx-auto">
//         <span
//           className="text-2xl font-bold text-red-600 cursor-pointer"
//           onClick={() => navigate("/")}
//         >
//           Tech-Shop
//         </span>

//         <div className="flex items-center gap-5">
//           {/* Search */}
//           <button
//             onClick={() => setShowSearch(!showSearch)}
//             className="text-gray-300 hover:text-red-500 transition"
//           >
//             <FiSearch size={22} />
//           </button>

//           {/* Cart */}
//           <div
//             onClick={() => navigate("/cart")}
//             className="relative cursor-pointer"
//           >
//             <FiShoppingCart
//               size={22}
//               className="text-gray-300 hover:text-red-500"
//             />
//             {totalProducts > 0 && (
//               <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
//                 {totalProducts}
//               </span>
//             )}
//           </div>

//           {/* User */}
//           <div
//   className="relative"
//   onMouseEnter={() => setShowUserPopup(true)}
//   onMouseLeave={() => setShowUserPopup(false)}
// >
//   <FiUser
//     size={22}
//     className="text-gray-300 hover:text-red-500 cursor-pointer"
//   />
  
//   {showUserPopup && (
//     <div
//       className="absolute right-0 mt-2 w-60 bg-gray-900 border border-gray-700 rounded-lg shadow-xl z-50 animate-fadeIn"
//       onMouseEnter={() => setShowUserPopup(true)}
//     >
//       <div className="p-4 border-b border-gray-700">
//         <h3 className="text-lg font-semibold text-white">Hello!</h3>
//         <p className="text-gray-400 text-sm">Access account and manage orders</p>
//       </div>

//                 <div className="flex justify-around py-3 border-b border-gray-700">
//                   <button
//                     onClick={() => setShowLogin(true)}
//                     className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-semibold transition-all"
//                   >
//                     Login
//                   </button>
//                   <button
//                     onClick={() => setShowSignup(true)}
//                     className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-md text-sm font-semibold transition-all"
//                   >
//                     Signup
//                   </button>
//                 </div>

//                 <div className="p-3 text-center text-gray-400 text-sm">
//                   Please Login
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </nav>

//       {/* ---------------- SEARCH DROPDOWN FIXED ---------------- */}
//       {showSearch && (
//         <div className="fixed top-[60px] left-0 w-full bg-gray-900 z-50 flex flex-col items-center shadow-lg border-b border-gray-700 py-2">
//           <div className="w-[90%] sm:w-[60%] md:w-[50%] relative">
//             <input
//               type="text"
//               placeholder="Search for products..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="w-full p-3 rounded-full bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-red-600"
//               autoFocus
//             />
//             <FiX
//               onClick={() => {
//                 setShowSearch(false);
//                 setSearchQuery("");
//               }}
//               className="absolute top-1/2 right-3 transform -translate-y-1/2 text-white cursor-pointer"
//             />
//           </div>

//           {searchQuery && (
//             <div className="w-[90%] sm:w-[60%] md:w-[50%] max-h-80 overflow-y-auto mt-2">
//               {filteredProducts.length > 0 ? (
//                 filteredProducts.map((item) => (
//                   <div
//                     key={item.id}
//                     className="flex items-center gap-3 p-3 cursor-pointer hover:bg-gray-800 transition-colors rounded-lg"
//                     onClick={() => handleProductClick(item.id)}
//                   >
//                     <img
//                       src={item.images[0]}
//                       alt={item.name}
//                       className="w-12 h-12 object-cover rounded"
//                     />
//                     <div>
//                       <h4 className="text-white font-semibold">{item.name}</h4>
//                       <div className="flex gap-2">
//                         <span className="text-red-500 font-semibold">
//                           ₹{item.discountPriceNum.toLocaleString()}
//                         </span>
//                         {item.discountPriceNum < item.originalPrice && (
//                           <span className="text-gray-500 line-through text-sm">
//                             ₹{item.originalPrice.toLocaleString()}
//                           </span>
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                 ))
//               ) : (
//                 <p className="text-gray-400 text-center py-4">No products found</p>
//               )}
//             </div>
//           )}
//         </div>
//       )}

//       {/* ---------------- CART CONTENT ---------------- */}
//       {cartItems.length > 0 ? (
//         <div className="px-6 sm:px-10 py-10 flex flex-col lg:flex-row justify-between gap-10">
//           {/* Products */}
//           <section className="flex-1 flex flex-col gap-8 max-h-[80vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 pr-4">
//             {cartItems.map((item) => (
//               <div
//                 key={item.id}
//                 className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-gray-800 pb-6 gap-4 sm:gap-0"
//               >
//                 <div className="flex items-center gap-6 w-full sm:w-auto">
//                   <img
//                     src={item.images[0]}
//                     alt={item.name}
//                     onClick={() => navigate(`/product/${item.id}`)}
//                     className="w-36 h-36 object-contain bg-black rounded-md cursor-pointer hover:opacity-80 transition-all"
//                   />
//                   <div className="flex-1">
//                     <h2
//                       onClick={() => navigate(`/product/${item.id}`)}
//                       className="text-lg font-semibold hover:text-red-500 cursor-pointer"
//                     >
//                       {item.name}
//                     </h2>
//                     <div className="flex items-center gap-2 mt-1 flex-wrap">
//                       <span className="text-xl font-semibold text-white">
//                         ₹{item.discountPriceNum.toLocaleString()}
//                       </span>
//                       {item.discountPriceNum < item.originalPrice && (
//                         <span className="text-gray-500 line-through text-sm">
//                           ₹{item.originalPrice.toLocaleString()}
//                         </span>
//                       )}
//                       {/* Quantity controls */}
//                       <div className="flex items-center bg-[#1a1a1a] rounded-md ml-4">
//                         <button
//                           onClick={() => removeFromCart(item.id)}
//                           className="w-8 h-8 flex items-center justify-center text-xl font-bold text-white hover:bg-red-600 rounded-md"
//                         >
//                           −
//                         </button>
//                         <span className="px-4">{item.quantity}</span>
//                         <button
//                           onClick={() => addToCart(item)}
//                           className="w-8 h-8 flex items-center justify-center text-xl font-bold text-white hover:bg-green-600 rounded-md"
//                         >
//                           +
//                         </button>
//                       </div>
//                       <button
//                         onClick={() => deleteFromCart(item.id)}
//                         className="text-gray-400 hover:text-red-500 ml-2"
//                       >
//                         <FiTrash2 size={20} />
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </section>

//           {/* Order Summary */}
//           <aside className="lg:w-[350px] flex flex-col justify-start mt-10 lg:mt-0">
//             <h2 className="text-xl font-semibold mb-4">
//               Order Summary <span className="text-gray-400 text-base">({totalProducts} items)</span>
//             </h2>

//             <div className="flex justify-between mb-2">
//               <span className="text-gray-400">Original Price</span>
//               <span className="text-red-500 font-semibold">₹{originalPrice.toLocaleString()}</span>
//             </div>

//             <div className="flex justify-between mb-2">
//               <span className="text-gray-400">Discount</span>
//               <span className="text-green-500">−₹{discountTotal.toLocaleString()}</span>
//             </div>

//             <div className="flex justify-between mb-2">
//               <span className="text-gray-400">Delivery</span>
//               <span className="text-green-500">Free</span>
//             </div>

//             <hr className="border-gray-700 my-4" />

//             <div className="flex justify-between text-xl font-semibold mb-6">
//               <span>Total Price</span>
//               <span>₹{finalTotal.toLocaleString()}</span>
//             </div>

//             <button className="w-full bg-red-600 hover:bg-red-700 py-3 rounded-lg font-semibold transition-all">
//               Checkout
//             </button>

//             <button
//               onClick={handleClearCart}
//               className="w-full mt-3 border border-red-600 text-red-500 hover:bg-red-600 hover:text-white py-2 rounded-lg transition-all"
//             >
//               Clear Cart
//             </button>
//           </aside>
//         </div>
//       ) : (
//         <div className="flex flex-col items-center justify-center h-screen">
//           <h2 className="text-3xl font-semibold mb-4">🛒 Your Cart is Empty</h2>
//           <button
//             onClick={() => navigate("/products")}
//             className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-full transition-all"
//           >
//             Shop Now
//           </button>
//         </div>
//       )}

//       {/* ---------------- LOGIN/SIGNUP MODALS ---------------- */}
//       {showLogin && <LoginModal onClose={() => setShowLogin(false)} openSignup={() => { setShowLogin(false); setShowSignup(true); }} />}
//       {showSignup && <SignupModal onClose={() => setShowSignup(false)} openLogin={() => { setShowSignup(false); setShowLogin(true); }} />}
//     </div>
//   );
// }

// /* ---------------- LOGIN MODAL ---------------- */
// function LoginModal({ onClose, openSignup }) {
//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-md z-50">
//       <div className="bg-gray-900 w-[90%] max-w-md rounded-2xl shadow-lg p-8 relative border border-gray-700">
//         <FiX onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-red-500 cursor-pointer" />
//         <h2 className="text-2xl font-semibold mb-6 text-center text-white">Login</h2>
//         <input type="email" placeholder="Email" className="w-full mb-4 px-4 py-3 rounded-lg bg-black/50 text-gray-200 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-600" />
//         <input type="password" placeholder="Password" className="w-full mb-6 px-4 py-3 rounded-lg bg-black/50 text-gray-200 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-600" />
//         <button className="w-full bg-red-600 hover:bg-red-700 py-3 rounded-lg font-semibold transition-all">Login</button>
//         <div className="flex items-center my-6">
//           <div className="flex-grow border-t border-gray-700"></div>
//           <span className="px-3 text-gray-500 text-sm">or continue with</span>
//           <div className="flex-grow border-t border-gray-700"></div>
//         </div>
//         <div className="flex justify-center gap-6">
//           <FaGoogle className="text-2xl cursor-pointer text-gray-400 hover:text-white" />
//           <FaFacebook className="text-2xl cursor-pointer text-gray-400 hover:text-blue-500" />
//           <FaGithub className="text-2xl cursor-pointer text-gray-400 hover:text-white" />
//         </div>
//         <p className="text-gray-400 text-sm text-center mt-6">
//           Don’t have an account? <button className="text-red-500 hover:underline" onClick={() => { onClose(); openSignup(); }}>Sign up</button>
//         </p>
//       </div>
//     </div>
//   );
// }

// /* ---------------- SIGNUP MODAL ---------------- */
// function SignupModal({ onClose, openLogin }) {
//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-md z-50">
//       <div className="bg-gray-900 w-[90%] max-w-md rounded-2xl shadow-lg p-8 relative border border-gray-700">
//         <FiX onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-red-500 cursor-pointer" />
//         <h2 className="text-2xl font-semibold mb-6 text-center text-white">Sign Up</h2>
//         <input type="text" placeholder="Full Name" className="w-full mb-4 px-4 py-3 rounded-lg bg-black/50 text-gray-200 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-600" />
//         <input type="email" placeholder="Email" className="w-full mb-4 px-4 py-3 rounded-lg bg-black/50 text-gray-200 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-600" />
//         <input type="password" placeholder="Password" className="w-full mb-6 px-4 py-3 rounded-lg bg-black/50 text-gray-200 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-600" />
//         <button className="w-full bg-red-600 hover:bg-red-700 py-3 rounded-lg font-semibold transition-all">Create Account</button>
//         <div className="flex items-center my-6">
//           <div className="flex-grow border-t border-gray-700"></div>
//           <span className="px-3 text-gray-500 text-sm">or continue with</span>
//           <div className="flex-grow border-t border-gray-700"></div>
//         </div>
//         <div className="flex justify-center gap-6">
//           <FaGoogle className="text-2xl cursor-pointer text-gray-400 hover:text-white" />
//           <FaFacebook className="text-2xl cursor-pointer text-gray-400 hover:text-blue-500" />
//           <FaGithub className="text-2xl cursor-pointer text-gray-400 hover:text-white" />
//         </div>
//         <p className="text-gray-400 text-sm text-center mt-6">
//           Already have an account? <button className="text-red-500 hover:underline" onClick={() => { onClose(); openLogin(); }}>Login</button>
//         </p>
//       </div>
//     </div>
//   );
// }
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiTrash2 } from "react-icons/fi";
import { useCart } from "../context/CartContext";
import products from "../data/product";
import { Search, ShoppingCart, User, X } from "lucide-react";
import LoginModal from "../components/LoginModal";
import SignupModal from "../components/SignupModal";

/* ------------------ CART PAGE ------------------ */
export default function CartPage() {
  const { cartItems, addToCart, removeFromCart, deleteFromCart, clearCart } = useCart();
  const navigate = useNavigate();
  const [isClearing, setIsClearing] = useState(false);

  // Navbar & Search States
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [showUserPopup, setShowUserPopup] = useState(false);
  const [hoverTimer, setHoverTimer] = useState(null);

  const totalProducts = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
    setShowSearch(false);
    setSearchQuery("");
  };

  const handleClearCart = () => {
    setIsClearing(true);
    setTimeout(() => {
      clearCart();
      setIsClearing(false);
    }, 500);
  };

  const originalPrice = cartItems.reduce((total, item) => total + item.originalPrice * item.quantity, 0);
  const discountTotal = cartItems.reduce(
    (total, item) => total + (item.originalPrice - item.discountPriceNum) * item.quantity,
    0
  );
  const finalTotal = cartItems.reduce((total, item) => total + item.discountPriceNum * item.quantity, 0);

  // Navbar Hover Handlers
  const handleMouseEnter = () => {
    if (hoverTimer) clearTimeout(hoverTimer);
    setShowUserPopup(true);
  };

  const handleMouseLeave = () => {
    const timer = setTimeout(() => setShowUserPopup(false), 200);
    setHoverTimer(timer);
  };

  return (
    <div className="bg-[#0d0d0d] text-white min-h-screen relative">
      {/* ---------------- NAVBAR ---------------- */}
      <nav className="fixed top-0 left-0 w-full bg-black text-white flex items-center justify-between px-8 py-4 border-b border-gray-800 z-50">
        <span
          className="text-2xl font-bold text-red-600 cursor-pointer"
          onClick={() => navigate("/")}
        >
          Tech-Shop
        </span>

        <div className="flex items-center gap-6 relative">
          {/* Search Icon */}
          <Search
            className="cursor-pointer hover:text-red-500 transition-colors"
            onClick={() => setShowSearch(!showSearch)}
          />

          {/* Cart Icon with Badge */}
          <div className="relative cursor-pointer" onClick={() => navigate("/cart")}>
            <ShoppingCart className="hover:text-red-500 transition-colors" />
            {totalProducts > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center animate-pulse">
                {totalProducts}
              </span>
            )}
          </div>

          {/* User Icon */}
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <User className="cursor-pointer hover:text-red-500 transition-colors" />
            {showUserPopup && (
              <div className="absolute right-0 mt-3 w-72 bg-gray-900 border border-gray-700 rounded-lg shadow-xl animate-fadeIn">
                <div className="p-4 border-b border-gray-700">
                  <h3 className="text-lg font-semibold text-white">Hello!</h3>
                  <p className="text-gray-400 text-sm">
                    Access account and manage orders
                  </p>
                </div>

                <div className="flex justify-around py-3 border-b border-gray-700">
                  <button
                    onClick={() => {
                      setShowLogin(true);
                      setShowUserPopup(false);
                    }}
                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-semibold transition-all"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => {
                      setShowSignup(true);
                      setShowUserPopup(false);
                    }}
                    className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-md text-sm font-semibold transition-all"
                  >
                    Signup
                  </button>
                </div>

                <div className="p-3 text-center text-gray-400 text-sm">
                  Please Login
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* ---------------- SEARCH DROPDOWN ---------------- */}
      {showSearch && (
        <div className="fixed top-[64px] left-0 w-full z-40 flex flex-col items-center bg-gray-900/90 py-4 border-b border-gray-800 shadow-xl">
          <div className="relative w-[85%] sm:w-[65%] md:w-[50%]">
            <input
              type="text"
              placeholder="Search for products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-black/80 border border-gray-700 rounded-full px-6 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
              autoFocus
            />
            <X
              onClick={() => {
                setShowSearch(false);
                setSearchQuery("");
              }}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-red-500 cursor-pointer"
            />
          </div>

          {searchQuery && (
            <div className="mt-2 w-[85%] sm:w-[65%] md:w-[50%] max-h-80 overflow-y-auto bg-gray-900 rounded-lg shadow-lg border border-gray-700">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => handleProductClick(item.id)}
                    className="flex items-center gap-4 p-3 cursor-pointer hover:bg-gray-800 transition-colors"
                  >
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="w-12 h-12 object-cover rounded"
                    />
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
      )}

      {/* ---------------- CART CONTENT ---------------- */}
      <div className="pt-[100px] px-6 sm:px-10 py-10">
        {cartItems.length > 0 ? (
          <div className="flex flex-col lg:flex-row justify-between gap-10">
            {/* Products */}
            <section className="flex-1 flex flex-col gap-8 max-h-[80vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 pr-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-gray-800 pb-6 gap-4 sm:gap-0"
                >
                  <div className="flex items-center gap-6 w-full sm:w-auto">
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      onClick={() => navigate(`/product/${item.id}`)}
                      className="w-36 h-36 object-contain bg-black rounded-md cursor-pointer hover:opacity-80 transition-all"
                    />
                    <div className="flex-1">
                      <h2
                        onClick={() => navigate(`/product/${item.id}`)}
                        className="text-lg font-semibold hover:text-red-500 cursor-pointer"
                      >
                        {item.name}
                      </h2>
                      <div className="flex items-center gap-2 mt-1 flex-wrap">
                        <span className="text-xl font-semibold text-white">
                          ₹{item.discountPriceNum.toLocaleString()}
                        </span>
                        {item.discountPriceNum < item.originalPrice && (
                          <span className="text-gray-500 line-through text-sm">
                            ₹{item.originalPrice.toLocaleString()}
                          </span>
                        )}
                        {/* Quantity controls */}
                        <div className="flex items-center bg-[#1a1a1a] rounded-md ml-4">
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="w-8 h-8 flex items-center justify-center text-xl font-bold text-white hover:bg-red-600 rounded-md"
                          >
                            −
                          </button>
                          <span className="px-4">{item.quantity}</span>
                          <button
                            onClick={() => addToCart(item)}
                            className="w-8 h-8 flex items-center justify-center text-xl font-bold text-white hover:bg-green-600 rounded-md"
                          >
                            +
                          </button>
                        </div>
                        <button
                          onClick={() => deleteFromCart(item.id)}
                          className="text-gray-400 hover:text-red-500 ml-2"
                        >
                          <FiTrash2 size={20} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </section>

            {/* Order Summary */}
            <aside className="lg:w-[350px] flex flex-col justify-start mt-10 lg:mt-0">
              <h2 className="text-xl font-semibold mb-4">
                Order Summary <span className="text-gray-400 text-base">({totalProducts} items)</span>
              </h2>

              <div className="flex justify-between mb-2">
                <span className="text-gray-400">Original Price</span>
                <span className="text-red-500 font-semibold">₹{originalPrice.toLocaleString()}</span>
              </div>

              <div className="flex justify-between mb-2">
                <span className="text-gray-400">Discount</span>
                <span className="text-green-500">−₹{discountTotal.toLocaleString()}</span>
              </div>

              <div className="flex justify-between mb-2">
                <span className="text-gray-400">Delivery</span>
                <span className="text-green-500">Free</span>
              </div>

              <hr className="border-gray-700 my-4" />

              <div className="flex justify-between text-xl font-semibold mb-6">
                <span>Total Price</span>
                <span>₹{finalTotal.toLocaleString()}</span>
              </div>

              <button className="w-full bg-red-600 hover:bg-red-700 py-3 rounded-lg font-semibold transition-all">
                Checkout
              </button>

              <button
                onClick={handleClearCart}
                className="w-full mt-3 border border-red-600 text-red-500 hover:bg-red-600 hover:text-white py-2 rounded-lg transition-all"
              >
                Clear Cart
              </button>
            </aside>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-screen">
            <h2 className="text-3xl font-semibold mb-4">🛒 Your Cart is Empty</h2>
            <button
              onClick={() => navigate("/products")}
              className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-full transition-all"
            >
              Shop Now
            </button>
          </div>
        )}
      </div>

      {/* ---------------- LOGIN/SIGNUP MODALS ---------------- */}
      {showLogin && <LoginModal onClose={() => setShowLogin(false)} openSignup={() => { setShowLogin(false); setShowSignup(true); }} />}
      {showSignup && <SignupModal onClose={() => setShowSignup(false)} openLogin={() => { setShowSignup(false); setShowLogin(true); }} />}
    </div>
  );
}
