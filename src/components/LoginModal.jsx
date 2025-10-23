import { X } from "lucide-react";
import { FaGoogle, FaFacebook, FaGithub } from "react-icons/fa";

export default function LoginModal({ onClose, openSignup }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-md z-50">
      <div className="bg-gray-900 w-[90%] max-w-md rounded-2xl shadow-lg p-8 relative animate-fadeIn border border-gray-700">
        <X
          className="absolute top-4 right-4 text-gray-400 hover:text-red-500 cursor-pointer transition-all duration-300 hover:rotate-90"
          onClick={onClose}
        />

        <h2 className="text-2xl font-semibold mb-6 text-center text-white">Login</h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 px-4 py-3 rounded-lg bg-black/50 text-gray-200 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-600"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 px-4 py-3 rounded-lg bg-black/50 text-gray-200 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-600"
        />

        <button className="w-full bg-red-600 hover:bg-red-700 transition-colors py-3 rounded-lg font-semibold">
          Login
        </button>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-700"></div>
          <span className="px-3 text-gray-500 text-sm">or continue with</span>
          <div className="flex-grow border-t border-gray-700"></div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6">
          <FaGoogle className="text-2xl cursor-pointer text-gray-400 hover:text-white hover:scale-110 transition-all duration-300" />
          <FaFacebook className="text-2xl cursor-pointer text-gray-400 hover:text-blue-500 hover:scale-110 transition-all duration-300" />
          <FaGithub className="text-2xl cursor-pointer text-gray-400 hover:text-white hover:scale-110 transition-all duration-300" />
        </div>

        <p className="text-gray-400 text-sm text-center mt-6">
          Don’t have an account?{" "}
          <button
            className="text-red-500 hover:underline"
            onClick={() => {
              onClose();
              openSignup();
            }}
          >
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
}
