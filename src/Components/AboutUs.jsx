import React from "react";
import { assets, miniFeatures } from "../assets/assets";

const AboutUs = () => {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-10">
      {/* LEFT IMAGE */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src={assets.aboutPhone}
          alt="App preview"
          className="w-[280px] sm:w-[350px] md:w-[420px] lg:w-[480px] drop-shadow-2xl"
        />
      </div>

      {/* RIGHT CONTENT */}
      <div className="md:w-1/2 space-y-6 text-center md:text-left">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
          Where Every Click Sparks a Connection!
        </h2>

        <p className="text-gray-600 text-lg sm:text-xl leading-relaxed">
          MyBindle brings people closer than ever. From sharing stories to
          exploring creative content — it’s your space to connect and shine.
        </p>

        <div className="space-y-5">
          {miniFeatures.map((item, i) => (
            <div
              key={i}
              className="bg-[#F9F9F9] hover:bg-[#F2F2F2] transition-all duration-300 p-6 rounded-2xl shadow-sm hover:shadow-lg"
            >
              <h4 className="text-xl sm:text-2xl font-semibold text-[#1A293C] pb-1">
                {item.title}
              </h4>
              <p className="text-[#525252] text-base sm:text-lg">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
