import React from "react";
import Rect1 from "./svg/Rectangle 123gggg.svg";
import Rect2 from "./svg/Rectangle 123gggg.svg";
import Rect3 from "./svg/Rectangle 123gggg.svg";

const Insight = () => {
  return (
    <div>
      <section className="insights py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-4 sm:mb-6">
            Insights and Updates
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-center text-gray-600 mb-6 sm:mb-10">
            Dive into our latest articles and stay updated with
            <br className="hidden lg:block" />
            industry trends, expert tips, and the newest features
          </p>
          <div className="cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-full ll:max-w-6xl mx-auto">
            <div className="card bg-blue-100 shadow-lg rounded-lg p-4 sm:p-6">
              <img
                src={Rect1}
                alt="Card"
                className="w-full h-36 sm:h-48 object-cover rounded-md mb-4"
              />
              <div className="timestamp-date flex justify-between text-gray-500 text-xs sm:text-sm mb-2 sm:mb-4">
                <p className="timestamp">6 min read</p>
                <p className="date">Aug 3, 2024</p>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                Boost Your YouTube Success with the New ytRank Chrome Extension
              </h3>
            </div>

            <div className="card bg-blue-100 shadow-lg rounded-lg p-4 sm:p-6">
              <img
                src={Rect2}
                alt="Card"
                className="w-full h-36 sm:h-48 object-cover rounded-md mb-4"
              />
              <div className="timestamp-date flex justify-between text-gray-500 text-xs sm:text-sm mb-2 sm:mb-4">
                <p className="timestamp">6 min read</p>
                <p className="date">Aug 3, 2024</p>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                Grow Your YouTube Channel <br className="hidden md:block" />
                with ytRank: AI-Powered <br className="hidden md:block" />
                Insights and Tools
              </h3>
            </div>

            <div className="card bg-blue-100 shadow-lg rounded-lg p-4 sm:p-6">
              <img
                src={Rect3}
                alt="Card"
                className="w-full h-36 sm:h-48 object-cover rounded-md mb-4"
              />
              <div className="timestamp-date flex justify-between text-gray-500 text-xs sm:text-sm mb-2 sm:mb-4">
                <p className="timestamp">6 min read</p>
                <p className="date">Aug 3, 2024</p>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                Boost Your YouTube Success with the New ytRank Chrome Extension
              </h3>
            </div>
          </div>

          <div className="text-center mt-8 sm:mt-10">
            <button className="btn bg-blue-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-blue-600">
              Read More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Insight;
