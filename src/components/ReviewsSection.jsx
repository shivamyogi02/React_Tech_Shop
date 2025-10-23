import React from "react";
import reviewsData from "../data/reviewsData";
import { Star } from "lucide-react";

export default function ReviewsSection() {
  return (
    <section className="bg-gray-900 text-white py-10 px-6 rounded-2xl mt-10 shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-red-500 text-center">
        ⭐ Customer Reviews
      </h2>

      <div className="space-y-6 max-w-3xl mx-auto">
        {reviewsData.map((review) => (
          <div
            key={review.id}
            className="bg-gray-800 p-5 rounded-xl shadow-md hover:shadow-xl transition-shadow"
          >
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-semibold text-lg">{review.name}</h3>
              <span className="text-sm text-gray-400">{review.date}</span>
            </div>

            <div className="flex items-center mb-3">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  className={`${
                    i < review.rateCount ? "text-yellow-400" : "text-gray-600"
                  }`}
                  fill={i < review.rateCount ? "#FACC15" : "none"}
                />
              ))}
            </div>

            <p className="text-gray-300">{review.review}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
