import React from "react";
import { FeaturesContent } from "../assets/assets";

function Features() {
  return (
    <section className="w-full px-6 md:px-12 lg:px-20 py-16 bg-[#FAFAFA]">
      {/* HEADING */}
      <div className="text-center mb-14">
        <h1 className="text-[30px] md:text-[40px] lg:text-[50px] font-bold text-[#282722] leading-tight">
          Features That Keep You Hooked!
        </h1>
        <p className="text-[18px] md:text-[22px] lg:text-[26px] font-semibold text-[#555] mt-4">
          Meet, Chat, Share – Anytime, Anywhere!
        </p>
      </div>

      {/* FEATURES GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {FeaturesContent.map((content, i) => (
          <div
            key={i}
            className="w-full max-w-[380px] h-auto p-10 bg-white rounded-3xl text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <h4 className="font-semibold text-[22px] md:text-[24px] leading-8 text-[#1A293C] mb-4">
              {content.title}
            </h4>
            <p className="text-[16px] md:text-[18px] leading-7 text-[#333] font-light">
              {content.content}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
