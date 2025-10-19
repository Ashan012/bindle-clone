import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <section className="relative bg-gradient-to-r from-[#FF4E47] to-[#FF6A5B] rounded-3xl text-white flex flex-col md:flex-row items-center justify-between max-w-[1600px] mx-5 xl:mx-auto my-16 px-6 md:px-16 py-16 shadow-xl overflow-hidden">
      {/* LEFT CONTENT */}
      <div className="md:w-1/2 z-10 text-center md:text-left space-y-6">
        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold leading-tight drop-shadow-sm">
          Join the Fun – <br /> Download MyBindle Now!
        </h2>
        <p className="text-base sm:text-lg lg:text-xl opacity-90 max-w-lg mx-auto md:mx-0">
          Your Social Network, Your Way. <br className="hidden sm:block" />
          Download MyBindle Now and Be a Part <br className="hidden sm:block" />
          of a Community That’s Always Evolving!
        </p>

        {/* DOWNLOAD BUTTONS */}
        <div className="flex  items-center gap-4 pt-4 justify-center md:justify-start">
          <button className="bg-white text-[#FF4E47] font-semibold p-3 sm:px-8 sm:py-4 rounded-xl shadow-md hover:bg-gray-100 hover:scale-105 transition text-lg">
            App Store
          </button>
          <button className="bg-white text-[#FF4E47] font-semibold p-3 sm:px-8 sm:py-4 rounded-xl shadow-md hover:bg-gray-100 hover:scale-105 transition text-lg">
            Play Store
          </button>
        </div>
      </div>

      {/* RIGHT PHONES (hidden on md) */}
      <div className="hidden lg:flex relative md:w-1/2 justify-center items-end h-[420px] md:h-[480px] mt-10 md:mt-0">
        {/* LEFT PHONE */}
        <img
          src={assets.footerImg1}
          alt="Phone Left"
          className="hidden xl:block absolute w-[320px] bottom-[-80px]  xl:left-[-20%] rounded-[40px] shadow-2xl object-contain"
        />
        {/* RIGHT PHONE */}
        <img
          src={assets.footerImg2}
          alt="Phone Right"
          className="absolute w-[360px] bottom-[-90px] right-[10%] rounded-[45px] shadow-2xl object-contain"
        />
      </div>
    </section>
  );
};

export default Footer;
