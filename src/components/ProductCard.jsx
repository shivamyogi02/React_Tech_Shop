import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="bg-gray-900 rounded-xl shadow-lg p-4 text-center hover:scale-105 transition">
      <img
        src={product.images[0]}
        alt={product.name}
        className="w-40 h-40 object-contain mx-auto"
      />
      <h2 className="mt-3 text-lg font-semibold">{product.name}</h2>
      <p className="text-gray-400">₹{product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="mt-3 bg-yellow-500 text-black font-semibold px-4 py-2 rounded-lg hover:bg-yellow-400"
      >
        Add to Cart
      </button>
    </div>
  );
}
