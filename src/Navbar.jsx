import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between nn:justify-around nn:space-x-40 items-center py-6 bg-white shadow-sm">
        {/* Logo and Menu Items Wrapper */}
        <div className="flex items-center space-x-6 w-full md:w-auto">
          <div className="text-2xl font-bold text-gray-800 mm:text-5xl ll:ml-20 mm:ml-36 xl:text-3xl">
            ytRank.
          </div>

          {/* Desktop Menu Items (aligned to the left on large screens) */}
          <ul className="hidden md:flex items-center space-x-6 xl:text-2xl">
            <li className="relative">
              {/* Features Toggle Button */}
              <button
                id="features-toggle"
                className="text-gray-600 hover:text-blue-500 font-medium"
              >
                Features
              </button>
              {/* Dropdown Menu */}
              <div
                id="features-menu"
                className="absolute left-0 hidden mt-2 w-48 bg-white shadow-lg rounded-lg"
              >
                <ul className="space-y-2 p-4">
                  <li>
                    <a
                      href="#"
                      className="block text-gray-600 hover:text-blue-500"
                    >
                      YouTube Keyword Tool
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block text-gray-600 hover:text-blue-500"
                    >
                      YouTube SEO Checker
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block text-gray-600 hover:text-blue-500"
                    >
                      YouTube Title Generator
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block text-gray-600 hover:text-blue-500"
                    >
                      YouTube Channel Ranking
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block text-gray-600 hover:text-blue-500"
                    >
                      Competition Research
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block text-gray-600 hover:text-blue-500"
                    >
                      Mentions Finder
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-500 font-medium"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-500 font-medium"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-500 font-medium"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Hamburger Icon */}
        <input type="checkbox" id="menu-toggle" className="hidden peer" />
        <label
          htmlFor="menu-toggle"
          className="md:hidden text-gray-600 hover:text-gray-800 cursor-pointer"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </label>

        {/* Download Button (Desktop) */}
        <a
          href="#"
          className="hidden md:block bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
        >
          Download Chrome Extension
        </a>

        {/* Mobile Menu */}
        <div className="mobile-menu fixed inset-0 hidden peer-checked:block bg-white z-10 md:hidden">
          <label
            htmlFor="menu-toggle"
            className="self-end text-gray-600 hover:text-gray-800 cursor-pointer"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </label>
          <ul className="flex flex-col items-center space-y-4 mt-6">
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-500 font-medium"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-500 font-medium"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-500 font-medium"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-500 font-medium"
              >
                Contact
              </a>
            </li>
          </ul>
          <a
            href="#"
            className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 mt-4"
          >
            Download Chrome Extension
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
