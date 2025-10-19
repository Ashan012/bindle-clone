import React from "react";
import { assets } from "../assets/assets";

const DownloadSection = () => {
  return (
    <section className="relative bg-[#FF4E47] rounded-3xl overflow-hidden text-white flex flex-col md:flex-row items-center justify-between max-w-[1600px] mx-auto my-16 px-6 md:px-16 py-16 md:py-20">
      {/* LEFT CONTENT */}
      <div className="md:w-1/2 space-y-6 z-10 text-center md:text-left">
        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight">
          Join the Fun – <br /> Download MyBindle Now!
        </h2>
        <p className="text-base sm:text-lg lg:text-xl opacity-90">
          Your Social Network, Your Way. <br className="hidden sm:block" />
          Download MyBindle Now and Be a Part <br className="hidden sm:block" />
          of a Community That’s Always Evolving!
        </p>

        {/* DOWNLOAD BUTTONS */}
        <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 justify-center md:justify-start">
          <button className="bg-white text-[#FF4E47] font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-100 transition text-lg">
            App Store
          </button>
          <button className="bg-white text-[#FF4E47] font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-100 transition text-lg">
            Play Store
          </button>
        </div>
      </div>

      {/* RIGHT PHONES */}
      <div className="hidden md:flex relative md:w-1/2  justify-center items-end h-[350px] sm:h-[420px] md:h-[480px] mt-10 md:mt-0">
        {/* LEFT PHONE */}
        <img
          src={assets.footerImg1}
          alt="Phone Left"
          className="absolute hidden lg:block   lg:w-[340px] bottom-[-100px] left-[-30%]  rounded-[35px] shadow-2xl object-contain"
        />
        {/* RIGHT PHONE */}
        <img
          src={assets.footerImg2}
          alt="Phone Right"
          className="absolute w-[220px] sm:w-[280px] md:w-[320px] lg:w-[360px] bottom-[-100px] right-[10%] md:right-[-10%] lg:right-[20%] rounded-[40px] shadow-2xl object-contain"
        />
      </div>
    </section>
  );
};

export default DownloadSection;
