import React from "react";
import Point from "./assets/point.svg";
import SeoGroup from "./assets/seo_group.svg";

const Reason = () => {
  return (
    <div>
      <section className="w-full bg-blue-500 mt-24">
        <div className="flex flex-col gap-16 md:gap-20 lg:gap-28 lg:flex-row items-center justify-between p-8 max-w-none">
          {/* Text Section */}
          <div className="text-white lg:w-1/2 nn:text-lg md:text-xl lg:text-2xl">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4">
              Why YouTube SEO Score Matters
            </h3>
            <p className="text-sm md:text-base mm:w-96 lg:text-lg mb-8">
              In the bustling world of YouTube, standing out can be tough.
              That's where your YouTube SEO score comes into play. It's more
              than just a number - it's your key to visibility, engagement, and
              growth.
              <br />
              <br />A high SEO score means your content is optimized to be found
              by the right audience at the right time. It ensures your videos
              rank higher in search results, appear in suggested videos, and
              attract more views.
            </p>

            {/* Points Section */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <img
                  src={Point}
                  alt="Point icon"
                  className="w-5 h-5 md:w-6 md:h-6 mr-2"
                />
                <p className="text-sm md:text-base lg:text-lg">
                  Increased Visibility
                </p>
              </div>
              <div className="flex items-center">
                <img
                  src={Point}
                  alt="Point icon"
                  className="w-5 h-5 md:w-6 md:h-6 mr-2"
                />
                <p className="text-sm md:text-base lg:text-lg">
                  Higher Click-Through Rates
                </p>
              </div>
              <div className="flex items-center">
                <img
                  src={Point}
                  alt="Point icon"
                  className="w-5 h-5 md:w-6 md:h-6 mr-2"
                />
                <p className="text-sm md:text-base lg:text-lg">
                  Better Engagement
                </p>
              </div>
              <div className="flex items-center">
                <img
                  src={Point}
                  alt="Point icon"
                  className="w-5 h-5 md:w-6 md:h-6 mr-2"
                />
                <p className="text-sm md:text-base lg:text-lg">
                  Long-term Growth
                </p>
              </div>
            </div>

            {/* Learn More Button */}
            <button className="bg-white text-blue-700 font-semibold py-2 px-4 rounded hover:bg-gray-200 transition">
              Learn more
            </button>
          </div>

          {/* Vector Image Section */}
          <div className="lg:w-1/2 mt-8 lg:mt-0 justify-center lg:justify-end flex lg:block">
            <img
              src={SeoGroup}
              alt="vector"
              className="background-img w-full max-w-xs lg:block hidden md:max-w-sm lg:max-w-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reason;
