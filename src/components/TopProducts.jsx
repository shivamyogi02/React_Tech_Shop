import React, { useState } from "react";
import products from "../data/product";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function TopProducts() {
  const [category, setCategory] = useState("All");
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const categories = ["All", "Headphones", "Earbuds", "Earphones", "Neckbands"];

  const getCategory = (product) => {
    if (product.category) return product.category;
    const name = product.name.toLowerCase();
    if (name.includes("wh") || name.includes("ch") || name.includes("xb") || name.includes("jbl"))
      return "Headphones";
    if (name.includes("buds")) return "Earbuds";
    if (name.includes("bassheads") || name.includes("wired")) return "Earphones";
    if (name.includes("rockerz") || name.includes("neckband")) return "Neckbands";
    return "Headphones";
  };

  const filteredProducts =
    category === "All"
      ? products
      : products.filter((p) => getCategory(p) === category);

  return (
    <section className="bg-black text-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10 text-red-500 uppercase tracking-wide">
          🎧 Top Products
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-6 py-2 rounded-full border border-gray-700 text-sm font-medium transition-all duration-300 ${
                category === cat
                  ? "bg-red-600 text-white shadow-md scale-105"
                  : "text-gray-400 hover:bg-gray-800 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-5 hover:-translate-y-2"
            >
              <div
                onClick={() => navigate(`/product/${product.id}`)}
                className="cursor-pointer relative"
              >
                <img
                  src={product.images?.[0]}
                  alt={product.name}
                  className="w-full h-56 object-contain mb-4 hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="text-yellow-400 text-sm mb-2">★★★★★</div>
              <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
              <p className="text-gray-400 text-sm mb-3 line-clamp-2">{product.desc}</p>
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="text-green-400 font-semibold text-lg">{product.discountPrice}</span>
                <span className="text-gray-500 line-through text-sm">{product.price}</span>
              </div>
              <button
                onClick={() => addToCart(product)}
                className="bg-red-600 hover:bg-red-700 w-full py-2 rounded-full transition-all font-semibold"
              >
                Add to Cart
              </button>
            </div>
          ))}

          {/* Browse All Products Card */}
          <div
            onClick={() => navigate("/products")}
            className="bg-gray-900 rounded-2xl shadow-lg flex items-center justify-center cursor-pointer hover:shadow-2xl transition-all duration-300 p-5 hover:-translate-y-2"
          >
            <span className="text-white font-bold text-lg flex items-center gap-2">
              Browse All Products <span className="text-red-500">→</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
