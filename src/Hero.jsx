import React from "react";
import Side from "./assets/side.svg";
import Bg from "./assets/bg.svg";
import Right from "./assets/right.svg";
import Group from "./assets/group.svg";
import Play from "./assets/play.svg";

const HeroSection = () => {
  return (
    <section className="relative flex flex-col items-center text-left py-16 px-8 bg-gradient-to-b from-white to-gray-50">
      {/* Background Image */}
      <img
        src={Bg}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Floating Elements */}
      <div className="hidden md:block absolute inset-0 pointer-events-none z-10">
        <img
          src={Side}
          alt="Floating Element"
          className="absolute left-0 op:w-4/12 op:ml-10 op:rotate-12 nn:top-2/4 top-1/4 transform -translate-y-1/2 w-20 md:w-32 -rotate-12 xl:overflow-hidden mm:right-0 mm:w-72 mm:top-80 ll:w-60 ll:left-2 ll:mt-8"
        />
        <img
          src={Right}
          alt="Floating Element"
          className="absolute right-0 op:w-4/12 nn:top-3/4 nn:-right-36 mm:w-72 -bottom-1/4 transform nn:w-60 -translate-y-1/2 w-20 md:bottom-0 md:w-32 md:-right-7 rotate-12 xl:right-14 xl:-bottom-36 xl:overflow-hidden mm:-right-10 xl:w-32 ll:w-72 ll:-bottom-1/3"
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col items-center text-center md:flex-row md:items-start w-full max-w-6xl">
        {/* Text Section */}
        <div className="text-center md:text-center mx-auto">
          <h1 className="text-3xl md:text-5xl nn:ml-20 mm:text-8xl mm:max-w-7xl font-bold text-gray-800 max-w-3xl leading-tight ll:text-5xl ll:ml-16">
            Creators Grow Their
            <span className="text-blue-600">YouTube</span> Channel with ytRank
          </h1>
          <p className="text-base text-center mm:text-4xl mm:min-w-full md:text-xl text-gray-600 mt-4 max-w-xl md:ml-20 ll:text-3xl">
            Optimize your content, outsmart the competition, and accelerate your
            growth with AI-powered tools.
          </p>
        </div>
      </div>

      {/* Buttons Section */}
      <div className="mt-8 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 relative z-20">
        <button className="bg-blue-600 text-white mm:text-xl px-6 py-3 rounded-lg hover:bg-blue-700">
          Sign in with Google
        </button>
        <button className="flex items-center justify-center text-gray-800 font-medium">
          <img src={Play} alt="Play Button" className="w-6 h-6" />
          <span className="ml-2 mm:text-3xl">WATCH VIDEO</span>
        </button>
      </div>

      {/* Image Below the Buttons */}
      <div className="mt-12 md:mt-16 relative z-20">
        <img
          src={Group}
          alt="ytRank dashboard"
          className="w-full max-w-xs md:max-w-4xl nn:max-w-screen-mm rounded-lg nn:w-screen nn:h-full"
        />
      </div>
    </section>
  );
};

export default HeroSection;
