import React from "react";
import Trending from "./assets/trending.svg";
import Seo from "./assets/seo_score.svg";
import Analytics from "./assets/analytics.svg";
import Tag from "./assets/tag.svg";

const Features = () => {
  return (
    <div>
      <section className="py-16 px-8 bg-gray-50">
        {/* Container to set max width */}
        <div className="max-w-screen-xl mx-auto" style={{ maxWidth: "1220px" }}>
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold nn:text-5xl text-gray-800">
              Powerful Features to Elevate Your Contents
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl nn:text-3xl mx-auto">
              Unlock tools designed to optimize, enhance, and amplify your
              content's impact on YouTube
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-screen-lg mx-auto">
            {/* Unlock Trending Keywords */}
            <div className="bg-blue-100 rounded-xl p-4 lg:col-span-2 lg:row-span-2 flex flex-col items-start lg:ml-28 nn:ml-16">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Unlock Trending Keywords
                </h3>
                <p className="text-gray-700 mb-3 text-sm leading-relaxed nn:text-lg">
                  Discover high-potential keywords to boost your video's
                  visibility and reach.
                </p>
                <ul className="grid grid-cols-2 gap-y-1 text-xs nn:text-sm text-gray-600">
                  <li>small business ideas</li>
                  <li>fitness for beginners</li>
                  <li>work from home jobs</li>
                  <li>online dating advice</li>
                  <li>skincare routine</li>
                </ul>
              </div>
              <img
                src={Trending}
                alt="Unlock Trending Keywords Image"
                className="mt-auto"
                style={{ width: "100%", maxWidth: "170px" }}
              />
            </div>

            {/* YouTube SEO Score */}
            <div className="bg-pink-100 rounded-xl p-4 lg:col-span-2 flex flex-col items-start">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 nn:text-xl">
                  YouTube SEO Score
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed nn:text-lg">
                  Analyze your content for SEO best practices, get actionable
                  insights, and ensure your videos are optimized to rank higher
                  in search results.
                </p>
              </div>
              <img
                src={Seo}
                alt="YouTube SEO Score Image"
                className="mt-auto"
                style={{ width: "80%", maxWidth: "240px" }}
              />
            </div>

            {/* Analytics */}
            <div className="bg-blue-100 rounded-xl p-4 flex flex-col justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 nn:text-xl">
                  Analytics
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed nn:text-lg">
                  Track your campaign performance.
                </p>
              </div>
              <img
                src={Analytics}
                alt="Analytics Image"
                className="mt-auto"
                style={{
                  width: "80%",
                  maxWidth: "150px",
                  height: "auto",
                }}
              />
            </div>

            {/* Tag Generator */}
            <div className="bg-pink-100 rounded-xl p-4 flex flex-col justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 nn:text-xl">
                  Tag Generator
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed nn:text-lg">
                  Create optimized tags for your videos to improve
                  discoverability and engagement.
                </p>
              </div>
              <img
                src={Tag}
                alt="Tag Generator Image"
                className="mt-auto"
                style={{
                  width: "60%",
                  maxWidth: "120px",
                  height: "auto",
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
