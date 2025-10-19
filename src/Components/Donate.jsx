import React from "react";
import { assets } from "../assets/assets";

const DonateSection = () => {
  return (
    <section className="relative bg-[#FF4E47] rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center justify-between text-white max-w-6xl mx-auto my-20 shadow-2xl overflow-hidden">
      {/* LEFT CONTENT */}
      <div className="md:w-1/2 space-y-6 z-10 text-center md:text-left">
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Be the Reason <br /> Someone Smiles Today!
        </h2>

        <p className="text-lg md:text-xl text-white/90 leading-relaxed">
          Your generosity can change lives — every donation brings hope,
          support, and a brighter future. Give today and make a difference!
        </p>

        <button className="bg-white text-[#FF4E47] font-semibold px-8 py-4 rounded-xl shadow-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300">
          Donate Now
        </button>
      </div>

      {/* RIGHT IMAGES */}
      <div className="hidden md:flex relative md:w-1/2 justify-center items-end mt-10 md:mt-0 h-[480px]">
        {/* LEFT IMAGE */}
        <img
          src={assets.paymentMehthod}
          alt="Payment"
          className="w-[240px] h-auto rounded-[40px] translate-y-[60%] shadow-2xl object-contain border-4 border-white/20 backdrop-blur-sm"
        />

        {/* RIGHT IMAGE */}
        <img
          src={assets.thankyou}
          alt="Thank you"
          className="w-[300px] h-auto rounded-[50px] translate-y-[40%] ml-[-50px] shadow-2xl object-contain border-4 border-white/20"
        />

        {/* Glow Effect */}
        <div className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-[#FF4E47] via-transparent to-transparent blur-3xl opacity-40"></div>
      </div>

      {/* Decorative Circle Glow */}
      <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default DonateSection;
