// import React from "react";
// import { FeaturesContent } from "../assets/assets";

// function Features() {
//   return (
//     <div className="w-full p-[5%]">
//       <div className="text-center mb-10">
//         <h1 className="text-[78.67px] font-semibold text-[#282722] tracking-[-5%] leading-[85px] pb-5">
//           Features That Keep You Hooked!
//         </h1>
//         <p className="text-[26px] leading-[33px] font-semibold">
//           Meet, Chat, Share – Anytime, Anywhere!
//         </p>
//       </div>
//       <div className="flex gap-[42px] flex-wrap justify-center">
//         {FeaturesContent.map((content, i) => (
//           <div
//             key={i}
//             className="w-[400px] h-[244px] p-12 rounded-3xl text-center bg-[#F2F2F2] shadow-xl"
//           >
//             <h4 className="font-semibold text-2xl leading-9 tracking-[-4%] pb-4 text-[#1A293C]">
//               {content.title}
//             </h4>
//             <p className="font-[300] text-[20px] leading-8 text-[#222222] ">
//               {content.content}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Features;

import React from "react";
import { FeaturesContent } from "../assets/assets";

function Features() {
  return (
    <section className="w-full px-6 md:px-12 lg:px-20 py-16 bg-[#FAFAFA]">
      {/* HEADING */}
      <div className="text-center mb-14">
        <h1 className="text-[40px] md:text-[60px] lg:text-[78px] font-bold text-[#282722] leading-tight">
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
