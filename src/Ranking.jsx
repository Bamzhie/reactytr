import React from "react";
import Seraking from "./assets/seranki.svg";
import Boost from "./assets/boost.svg";
import S_Ranking from "./assets/ranking.svg";

const RankingSection = () => {
  return (
    <div>
      <section className="relative p-8 md:p-16 nn:p-20 lg:rounded-md mx-auto bg-[#F0F3F6] lg:h-auto lg:py-24 xl:py-28">
        {/* Heading */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl nn:text-4xl lg:text-5xl text-center font-bold text-gray-900">
            Boost rankings, visibility, and attract more viewers with AI-driven
            insights
          </h2>
        </div>

        {/* Flex Container */}
        <div className="lg:flex lg:items-center">
          {/* Image Container */}
          <div className="relative w-full lg:w-1/2 flex items-center justify-center mb-8 lg:mb-0">
            <div className="relative w-[573px] h-[541px] sm:w-[450px] sm:h-[400px] lg:w-[573px] lg:h-[541px] xl:w-[600px] xl:h-[560px]">
              <img
                src={Seraking}
                alt="Background graphic"
                className="absolute w-full h-full object-contain"
              />
              <img
                src={Boost}
                alt="AI insights graphic"
                className="relative z-10 w-[300px] h-[280px] sm:w-[350px] sm:h-[320px] lg:w-[411.32px] lg:h-[385.04px] max-w-full max-h-full object-contain shadow-lg"
              />
            </div>
          </div>

          {/* List Container */}
          <div className="flex flex-col lg:w-1/2 lg:pl-16 lg:items-start xl:pl-20">
            <ul className="space-y-6 text-gray-700">
              <li>
                <span className="font-bold text-lg md:text-xl nn:text-2xl">
                  01. Daily Videos Ideas
                </span>
                <hr className="border-t border-black my-6" />
                <p className="text-sm md:text-base nn:text-lg">
                  Get fresh, AI-generated content ideas tailored to your YouTube
                  niche and audience.
                </p>
              </li>
              <li>
                <span className="font-bold text-lg md:text-xl nn:text-2xl">
                  02. Channel Competition Analysis
                </span>
                <hr className="border-t border-black my-6" />
                <p className="text-sm md:text-base nn:text-lg">
                  Our advanced tool provides in-depth insights into your
                  competitors' strategies, performance, and audience engagement.
                </p>
              </li>
              <li>
                <span className="font-bold text-lg md:text-xl nn:text-2xl">
                  03. Mentions Finder
                </span>
                <hr className="border-t border-black my-6" />
                <p className="text-sm md:text-base nn:text-lg">
                  This powerful tool scans millions of videos to find where your
                  brand is being talked about, helping you stay informed and
                  engaged.
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer image, positioned at the bottom right */}
        <div className="absolute -bottom-16 right-0 mb-8 mr-8">
          <img
            src={S_Ranking}
            alt="Footer graphic"
            className="w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32"
          />
        </div>
      </section>
    </div>
  );
};

export default RankingSection;
