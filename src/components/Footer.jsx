
import React from "react";
import { Link } from "react-router-dom";
import { footMenu, footSocial } from "../data/footerData";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-gray-300 py-16 w-full">
      {/* Top Footer Section */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row justify-between gap-10">
        {/* Left — Logo & Subscribe */}
        <div className="flex-1 lg:flex-none text-left">
          <Link to="/">
            <h2 className="text-2xl font-bold text-red-500 mb-3 animate-pulse cursor-pointer transform transition-transform duration-300 hover:scale-105">
              TechShop
            </h2>
          </Link>
          <p className="text-gray-400 mb-5 max-w-sm">
            Discover top tech gadgets with amazing deals and fast delivery.
          </p>

          {/* Subscribe Form with Envelope Icon */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 bg-gray-800 rounded-xl p-4 shadow-lg shadow-red-600/10 hover:shadow-red-500/20 transition-all duration-500 w-full sm:w-auto">
            <div className="relative w-full sm:w-64">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
                📧
              </span>
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent text-sm px-10 py-2 outline-none border border-gray-700 rounded-lg focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all duration-300 w-full"
              />
            </div>
            <button className="bg-red-600 hover:bg-red-700 px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/40">
              Subscribe
            </button>
          </div>
        </div>

        {/* Center — Menu Links */}
        <div className="flex-1 flex flex-wrap justify-between gap-10 lg:gap-16">
          {footMenu
            .filter((menu) => menu.title !== "Company")
            .map((menuSection) => (
              <div key={menuSection.id} className="min-w-[120px] mb-6 lg:mb-0">
                <h3 className="text-lg font-semibold mb-4 text-white">
                  {menuSection.title}
                </h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                  {menuSection.menu.map((item) => (
                    <li
                      key={item.id}
                      className="hover:text-white transition-colors duration-300 cursor-pointer relative group"
                    >
                      {item.link}
                      <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

          {/* Right — Company */}
          {footMenu
            .filter((menu) => menu.title === "Company")
            .map((menuSection) => (
              <div key={menuSection.id} className="min-w-[120px]">
                <h3 className="text-lg font-semibold mb-4 text-white">
                  {menuSection.title}
                </h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                  {menuSection.menu.map((item) => (
                    <li
                      key={item.id}
                      className="hover:text-white transition-colors duration-300 cursor-pointer relative group"
                    >
                      {item.link}
                      <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      </div>

      {/* Bottom Social & Copyright */}
      <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col lg:flex-row justify-between items-center gap-4">
        <div className="flex gap-6 text-gray-400 text-2xl">
          {footSocial.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.id}
                href={social.path}
                className="hover:text-red-500 transform hover:scale-110 transition-all duration-300"
              >
                <Icon />
              </a>
            );
          })}
        </div>
        <p className="text-gray-500 text-sm text-center lg:text-left">
          © {new Date().getFullYear()} TechShop. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
