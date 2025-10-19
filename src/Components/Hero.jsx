
import React from "react";
import { assets } from "../assets/assets";

function Hero() {
  return (
    <div className="w-full  xl:h-screen bg-[#FF5349] flex flex-col  ">
      {/* LOGO */}
      <div className="flex justify-center pt-6">
        <img
          src={assets.logo}
          alt="logo"
          className="w-[140px] sm:w-[160px] md:w-[180px] object-contain"
        />
      </div>

      {/* HERO SECTION */}
      <section className="flex flex-col lg:flex-row  justify-between px-6 sm:px-10 lg:px-20 py-10 lg:py-16 flex-1">
        {/* LEFT CONTENT */}
        <div className="w-full lg:w-1/2 space-y-6 z-10  lg:text-left text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-[#FAFAFA] leading-tight tracking-tight drop-shadow-md">
            Stay Connected <br /> Stay Social <br /> Stay You!
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-[#FAFAFA]/90 font-medium leading-relaxed lg:leading-9 max-w-2xl mx-auto lg:mx-0">
            A place where friendships grow, communities thrive, and moments turn
            into unforgettable experiences. Whether you're looking to reconnect
            with old friends, build new relationships, or share what matters
            most to you – MyBindle is your home on the internet.
          </p>

          <div className="flex justify-center lg:justify-start pt-4">
            <button className="w-[180px] sm:w-[200px] lg:w-[243px] h-[60px] sm:h-[70px] bg-[#F2F2F2] rounded-2xl text-[#FF5349] font-semibold text-lg sm:text-xl transition-transform hover:scale-105 hover:bg-white shadow-lg">
              Get Started
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE — hidden on md & below */}
        <div className="hidden lg:flex justify-center items-center lg:w-1/2">
          <img
            src={assets.HeaderPhone}
            alt="hero-phone"
            className="h-[90vh] w-[420px] xl:w-[500px] object-contain drop-shadow-2xl"
          />
        </div>
      </section>
    </div>
  );
}

export default Hero;
