
import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Search, ShoppingCart, User, X } from "lucide-react";
import { useCart } from "../context/CartContext";
import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";
import products from "../data/product";

export default function Navbar() {
  const [showSearch, setShowSearch] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [showUserPopup, setShowUserPopup] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [hoverTimer, setHoverTimer] = useState(null);

  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navigate = useNavigate();
  const location = useLocation();
  const { cartItems } = useCart();
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

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

  // 👇 Hide navbar on scroll down (only on mobile)
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

  // 👇 Fix white gap on /cart or page reload by setting consistent body padding
  useEffect(() => {
    const navbar = document.querySelector("nav");
    if (navbar) {
      const height = navbar.offsetHeight;
      document.body.style.paddingTop = `${height}px`;
      document.body.style.backgroundColor = "#000"; // ensures no white flash
    }
  }, [location.pathname]);

  return (
    <>
      {/* =================== NAVBAR =================== */}
      <nav
        className={`fixed top-0 left-0 w-full bg-black text-white flex items-center justify-between px-8 py-4 border-b border-gray-800 z-50 transition-transform duration-500 ease-in-out ${
          showNavbar ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <Link to="/" className="text-2xl font-bold text-red-600">
          Tech-Shop
        </Link>

        <div className="flex items-center gap-6 relative">
          {/* Search Icon */}
          <Search
            className="cursor-pointer hover:text-red-500 transition-colors"
            onClick={() => setShowSearch(!showSearch)}
          />

          {/* Cart Icon with Badge */}
          <Link to="/cart" className="relative">
            <ShoppingCart className="cursor-pointer hover:text-red-500 transition-colors" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center animate-pulse">
                {totalItems}
              </span>
            )}
          </Link>

          {/* User Icon + Hover Menu */}
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

      {/* =================== SEARCH BAR =================== */}
      <div
        className={`fixed top-[64px] left-0 w-full z-40 flex flex-col items-center transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          showSearch
            ? "opacity-100 translate-y-0 scale-100 backdrop-blur-md"
            : "opacity-0 -translate-y-8 scale-95 pointer-events-none"
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
              onClick={() => {
                setShowSearch(false);
                setSearchQuery("");
              }}
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
                  <img
                    src={item.images[0]}
                    alt={item.name}
                    className="w-12 h-12 object-cover rounded"
                  />
                  <div>
                    <h4 className="text-white text-sm font-semibold">
                      {item.name}
                    </h4>
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
      {showLogin && (
        <LoginModal
          onClose={() => setShowLogin(false)}
          openSignup={() => {
            setShowLogin(false);
            setShowSignup(true);
          }}
        />
      )}

      {showSignup && (
        <SignupModal
          onClose={() => setShowSignup(false)}
          openLogin={() => {
            setShowSignup(false);
            setShowLogin(true);
          }}
        />
      )}
    </>
  );
}
