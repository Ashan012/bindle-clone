import React from "react";
import { FaStar } from "react-icons/fa";
import { testimonials } from "../assets/assets";

const Testimonials = () => {
  return (
    <section className="bg-gray-50 py-20 px-6 md:px-16 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-14">
        What Our Users Say
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-2xl p-6 text-left hover:shadow-lg transition-shadow"
          >
            <div className="flex mb-3 text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <p className="text-gray-700 mb-6 leading-relaxed">{item.text}</p>
            <div className="flex items-center gap-3">
              <img
                src={item.img}
                alt={item.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold text-gray-900">{item.name}</h4>
                <p className="text-gray-500 text-sm">{item.country}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="mt-12 bg-red-500 text-white font-semibold py-3 px-8 rounded-full hover:bg-red-600 transition">
        See More
      </button>
    </section>
  );
};

export default Testimonials;
