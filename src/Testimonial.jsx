import React from "react";
import Image_9 from "./svg/image 9.svg";
import Rect126 from "./svg/Rectangle 126man.svg";
import Star from "./svg/image 10star.svg";
import Rect127 from "./svg/Rectangle 126666.svg";
import Star1 from "./svg/image 10star.svg";

const Testimonial = () => {
  return (
    <div>
      <section className="testimonials flex flex-col justify-center py-12 bg-gray-50">
        <div className="flex flex-col sm:flex-row items-center justify-center text-center mb-10 mm:justify-start mm:ml-36">
          <h2 className="text-2xl sm:text-3xl text-center font-bold text-gray-800 sm:mr-4">
            <span className="text-gray-600">Real stories.</span>
            <br />
            Don’t take our word for it
          </h2>
          <img
            src={Image_9}
            alt=""
            className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 hidden sm:block mt-4 sm:mt-0"
          />
        </div>

        <div className="testimonials-content overflow-x-auto">
          <div className="testimonials-content-container flex flex-nowrap space-x-8">
            {/* Testimonial 1 */}
            <div className="testimonial1 bg-white shadow-lg rounded-lg p-6 flex-shrink-0 flex items-center ">
              <div className="testimonial-img mr-4">
                <img
                  src={Rect126}
                  alt=""
                  className="w-[180px] h-[174px] sm:w-[200px] sm:h-[194px] md:w-[220px] md:h-[214px] lg:w-[240px] lg:h-[234px] xl:w-[260px] xl:h-[254px] ll:w-[280px] ll:h-[274px] mm:w-[300px] mm:h-[294px] nn:w-[320px] nn:h-[314px] op:w-[340px] op:h-[334px] rounded-lg"
                />
              </div>
              <div
                className="testimonial-text"
                style={{ width: "100%", maxWidth: "340px" }}
              >
                <img
                  src={Star}
                  alt=""
                  className="w-[22px] h-[22px] mb-4 inline-block"
                  style={{ marginTop: "-10px" }}
                />
                <p className="pt1 text-gray-700 font-medium text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px]">
                  “YTRank has completely transformed my YouTube strategy! The
                  keyword tool helped me find trending topics, and my views have
                  doubled in just a month.”
                </p>
                <p className="pt2 font-bold text-gray-800 text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px]">
                  Yohan Dave
                </p>
                <p className="pt3 text-gray-600 text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px]">
                  Small Business Owner, Content Creator
                </p>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="testimonial2 bg-blue-200 shadow-lg rounded-lg p-6 flex-shrink-0 flex items-center">
              <div className="testimonial-img mr-4">
                <img
                  src={Rect127}
                  alt=""
                  className="w-[180px] h-[174px] sm:w-[200px] sm:h-[194px] md:w-[220px] md:h-[214px] lg:w-[240px] lg:h-[234px] xl:w-[260px] xl:h-[254px] ll:w-[280px] ll:h-[274px] mm:w-[300px] mm:h-[294px] nn:w-[320px] nn:h-[314px] op:w-[340px] op:h-[334px] rounded-lg"
                />
              </div>
              <div
                className="testimonial-text"
                style={{ width: "100%", maxWidth: "340px" }}
              >
                <img
                  src={Star1}
                  alt=""
                  className="w-[22px] h-[22px] mb-4 inline-block"
                  style={{ marginTop: "-10px" }}
                />
                <p className="pt1 text-gray-700 font-medium text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px]">
                  “YTRank has completely transformed my YouTube strategy! The
                  keyword tool helped me find trending topics, and my views have
                  doubled in just a month.”
                </p>
                <p className="pt2 font-bold text-gray-800 text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px]">
                  Yohan Dave
                </p>
                <p className="pt3 text-gray-600 text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px]">
                  Small Business Owner, Content Creator
                </p>
              </div>
            </div>

            {/* Additional testimonials can be added here */}
          </div>
        </div>

        <div className="text-center mt-10">
          <button className="btn bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">
            Read More
          </button>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
