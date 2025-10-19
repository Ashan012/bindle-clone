import React from "react";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Emily R",
    country: "USA",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
    text: "This platform changed the way I stay in touch with my friends and family. The interface is smooth, and I love how easy it is to share my moments!",
  },
  {
    name: "Amit K",
    country: "India",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Finally, a social network that understands what I need! The privacy features are a game-changer, and I feel safer sharing my life online.",
  },
  {
    name: "Sophie M",
    country: "UK",
    img: "https://randomuser.me/api/portraits/women/21.jpg",
    text: "I joined just to explore, but now I can't imagine my day without it. The real-time chat and engaging communities make every interaction special!",
  },
  {
    name: "Javier L",
    country: "Spain",
    img: "https://randomuser.me/api/portraits/men/44.jpg",
    text: "Running my small business has never been easier! This platform helped me connect with customers, promote my products, and grow my brand.",
  },
  {
    name: "Lucas T",
    country: "Brazil",
    img: "https://randomuser.me/api/portraits/men/14.jpg",
    text: "The perfect blend of fun and functionality! Whether I want to go live, discover trending content, or just catch up with friends, everything is right here!",
  },
  {
    name: "Nora S",
    country: "Canada",
    img: "https://randomuser.me/api/portraits/women/55.jpg",
    text: "I've tried many social platforms, but this one truly stands out! The experience feels personal, the connections feel real, and every feature just makes sense.",
  },
];

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
