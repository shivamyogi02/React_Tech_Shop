
import React from "react";
import servicesData from "../data/servicesData"; // make sure this path is correct

export default function OurAdvantages() {
  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-red-500 mb-12">
          ⚡ Our Advantages
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {servicesData.map((item) => {
            const Icon = item.icon; // get component
            return (
              <div
                key={item.id}
                className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-red-500 transition-all duration-500 hover:-translate-y-2 shadow-lg"
              >
                <div className="flex justify-center mb-4 text-red-400 text-4xl transition-transform duration-300 hover:scale-110">
                  <Icon /> {/* Render icon as JSX */}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.info}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
