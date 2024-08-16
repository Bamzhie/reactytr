import React from "react";

const Faq = () => {
  return (
    <div>
      <section className="faq-container py-12 bg-white">
        {/* FAQ Section */}
        <div className="faq max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 ll:px-14">
          <h2 className="text-2xl sm:text-3xl text-center font-bold text-gray-800 mb-4">
            Have a Question?
          </h2>
          <p className="text-base sm:text-lg text-center text-gray-600 mb-8">
            From getting started to advanced features. Find quick
            <br className="hidden sm:block" />
            answers to help you make the most of our platform.
          </p>

          {/* Separator Line */}
          <hr className="border-t border-gray-300 mb-8" />

          {/* Accordion Items */}
          <div className="space-y-4">
            {/* Accordion Item 1 */}
            <div className="accordion-item border border-gray-200 rounded-lg shadow-md">
              <input type="checkbox" id="item1" className="hidden" />
              <label
                htmlFor="item1"
                className="block cursor-pointer bg-gray-100 p-4 rounded-t-lg hover:bg-gray-200 text-base sm:text-lg ll:text-2xl"
              >
                What is ytRank?
              </label>
              <div className="accordion-item-content p-4 bg-white rounded-b-lg hidden">
                <p className="text-sm sm:text-base md:text-lg xl:text-2xl text-gray-700">
                  YTRank is an AI-powered tool designed to help YouTube creators
                  optimize their content, improve SEO, and grow their channels
                  through keyword research, SEO analysis, title generation, and
                  more.
                </p>
              </div>
            </div>

            {/* Accordion Item 2 */}
            <div className="accordion-item border border-gray-200 rounded-lg shadow-md">
              <input type="checkbox" id="item2" className="hidden" />
              <label
                htmlFor="item2"
                className="block cursor-pointer bg-gray-100 p-4 rounded-t-lg hover:bg-gray-200 text-base sm:text-lg ll:text-2xl"
              >
                How does the YouTube Keyword Tool work?
              </label>
              <div className="accordion-item-content p-4 bg-white rounded-b-lg hidden">
                <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-700">
                  The YouTube Keyword Tool helps you find the best keywords to
                  use in your video titles, descriptions, and tags, enhancing
                  your video’s discoverability on the platform.
                </p>
              </div>
            </div>

            {/* Accordion Item 3 */}
            <div className="accordion-item border border-gray-200 rounded-lg shadow-md">
              <input type="checkbox" id="item3" className="hidden" />
              <label
                htmlFor="item3"
                className="block cursor-pointer bg-gray-100 p-4 rounded-t-lg hover:bg-gray-200 text-base sm:text-lg ll:text-2xl"
              >
                What does the YouTube SEO Checker do?
              </label>
              <div className="accordion-item-content p-4 bg-white rounded-b-lg hidden">
                <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-700">
                  The YouTube SEO Checker analyzes your video content and
                  metadata to ensure it is optimized for search engines,
                  increasing your chances of ranking higher in search results.
                </p>
              </div>
            </div>

            {/* Accordion Item 4 */}
            <div className="accordion-item border border-gray-200 rounded-lg shadow-md">
              <input type="checkbox" id="item4" className="hidden" />
              <label
                htmlFor="item4"
                className="block cursor-pointer bg-gray-100 p-4 rounded-t-lg hover:bg-gray-200 text-base sm:text-lg ll:text-2xl"
              >
                How can the YouTube Title Generator benefit me?
              </label>
              <div className="accordion-item-content p-4 bg-white rounded-b-lg hidden">
                <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-700">
                  The YouTube Title Generator creates compelling titles for your
                  videos, helping you attract more viewers and improve
                  engagement.
                </p>
              </div>
            </div>

            {/* Accordion Item 5 */}
            <div className="accordion-item border border-gray-200 rounded-lg shadow-md">
              <input type="checkbox" id="item5" className="hidden" />
              <label
                htmlFor="item5"
                className="block cursor-pointer bg-gray-100 p-4 rounded-t-lg hover:bg-gray-200 text-base sm:text-lg ll:text-2xl"
              >
                What is the YouTube Channel Ranking feature?
              </label>
              <div className="accordion-item-content p-4 bg-white rounded-b-lg hidden">
                <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-700">
                  The YouTube Channel Ranking feature evaluates your channel's
                  overall performance, providing insights on how to improve your
                  channel's visibility and subscriber growth.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Separator Line */}
        <hr className="border-t border-gray-300 my-12" />

        {/* YTRank Word Section */}
        <div className="mt-20 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 ll:px-14">
          <div className="ytrank-word text-2xl font-bold text-gray-800 mb-4">
            YTRank <span className="text-blue-500">.</span>
          </div>
          <div className="text-sm sm:text-base md:text-lg text-gray-600">
            Join thousands of creators using YTRank for keyword
            <br className="hidden sm:block" />
            research, SEO scoring, and smart content ideas to enhance
            <br className="hidden sm:block" />
            their YouTube strategy
          </div>
          <hr className="border-t border-gray-300 my-12" />
        </div>

        {/* Footer */}
        <footer className="bg-black text-white h-full py-6">
          <div className="max-w-4xl px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 ll:px-14 flex justify-between">
            <div className="text-xs sm:text-sm">
              <p>© 2024 ytRank. All rights reserved.</p>
            </div>
            <div className="footer-ls flex space-x-4 text-xs sm:text-sm">
              <p className="hover:underline cursor-pointer">Privacy policy</p>
              <p className="hover:underline cursor-pointer">Terms of Service</p>
            </div>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default Faq;
