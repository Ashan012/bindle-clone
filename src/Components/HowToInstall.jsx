import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { steps } from "../assets/assets";

const HowToInstall = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="bg-[#f9f9f9] py-20 px-6 md:px-16 text-center">
      {/* Heading */}
      <div data-aos="fade-up">
        <h2 className="text-4xl md:text-5xl font-semibold text-[#222] mb-4">
          How to Install Our App
        </h2>
        <p className="text-[#333] text-sm md:text-base font-medium mb-12">
          Getting started is quick and easy! Follow these simple steps to
          install and start using MyBindle today.
        </p>
      </div>

      {/* Steps Row */}
      <div
        className="flex justify-center items-center gap-6 md:gap-12 mb-12"
        data-aos="zoom-in"
      >
        {steps.map((step, i) => (
          <React.Fragment key={i}>
            <div className="flex flex-col items-center">
              <span
                className={`text-4xl font-bold ${
                  i === 0 ? "text-[#ff4b2b]" : "text-[#222]"
                }`}
              >
                {step.number}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div className="w-16 sm:w-20 md:w-32 h-[2px] bg-gray-300"></div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Boxes */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
        data-aos="fade-up"
      >
        {steps.map((step, i) => (
          <div
            key={i}
            className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2"
          >
            <h3 className="text-xl font-semibold text-[#222] mb-2">
              {step.title}
            </h3>
            <p className="text-gray-600 font-medium">{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowToInstall;
