import React from "react";
import { FiSearch } from "react-icons/fi";
import brandData from "../assets/brandsData.js";
import { useNavigate } from "react-router-dom";
const Homepage = () => {
  const navigate = useNavigate();
  const handleBrandClick = (brandName) => {
    navigate(`/brands/${brandName.toLowerCase()}`);
  };
  return (
    <>
      <main>
        {/* clear fixed navbar */}
        <section
          id="home"
          className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white min-h-[100vh]"
        >
          <div className="container mx-auto px-6 py-20 md:py-28">
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              {/* Left: headline + search + CTAs */}
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
                  Premium Auto Parts & Service for Your Vehicle
                </h1>
                <p className="mt-4 text-gray-300 max-w-xl">
                  Fast delivery, trusted brands and expert support. Find parts
                  by model, brand or part number or contact our team for help.
                </p>

                {/* Search / quick find */}
                <form
                  className="mt-6 w-full max-w-lg"
                  role="search"
                  aria-label="Search parts"
                >
                  <label htmlFor="hero-search" className="sr-only">
                    Search parts
                  </label>
                  <div className="relative">
                    <input
                      id="hero-search"
                      type="search"
                      placeholder="Search parts, brands or part number..."
                      className="w-full rounded-full bg-gray-800/60 placeholder-gray-400 text-white px-4 py-3 pr-12 focus:outline-none focus:ring-2 focus:ring-red-600"
                    />
                    <button
                      type="submit"
                      className="absolute right-1 top-1/2 -translate-y-1/2 bg-red-600 hover:bg-red-700 text-white rounded-full p-2.5 shadow"
                      aria-label="Submit search"
                    >
                      <FiSearch />
                    </button>
                  </div>
                </form>

                {/* CTAs */}
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="/brands"
                    className="inline-block rounded-full bg-red-600 hover:bg-red-700 px-5 py-3 font-semibold"
                  >
                    Browse Brands
                  </a>
                  <a
                    href="/contact"
                    className="inline-block rounded-full bg-transparent border border-white/20 px-5 py-3 text-white/90 hover:bg-white/5"
                  >
                    Get Support
                  </a>
                </div>

                <ul className="mt-6 flex flex-wrap gap-6 text-sm text-gray-300">
                  <li>Free shipping over $99</li>
                  <li>30-day returns</li>
                  <li>Verified OEM & aftermarket parts</li>
                </ul>
              </div>

              {/* Right: illustrative graphic */}
              <div className="flex items-center justify-center">
                <div className="w-full max-w-md">
                  {/* simple SVG illustration (keeps file self-contained) */}
                  <svg
                    viewBox="0 0 640 480"
                    className="w-full h-auto rounded-2xl shadow-2xl"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-labelledby="heroIllustrationTitle"
                  >
                    <title id="heroIllustrationTitle">
                      Car parts illustration
                    </title>
                    <defs>
                      <linearGradient id="g" x1="0" x2="1">
                        <stop offset="0" stopColor="#ef4444" />
                        <stop offset="1" stopColor="#f97316" />
                      </linearGradient>
                    </defs>
                    <rect
                      width="100%"
                      height="100%"
                      rx="16"
                      fill="url(#g)"
                      opacity="0.12"
                    />
                    <g transform="translate(40,40)">
                      <rect
                        x="0"
                        y="220"
                        width="560"
                        height="40"
                        rx="10"
                        fill="#111827"
                        opacity="0.15"
                      />
                      <g transform="translate(40,20)">
                        <rect
                          x="0"
                          y="80"
                          width="440"
                          height="150"
                          rx="12"
                          fill="#0f172a"
                        />
                        <circle cx="80" cy="170" r="30" fill="#111827" />
                        <circle cx="360" cy="170" r="30" fill="#111827" />
                        <rect
                          x="40"
                          y="30"
                          width="360"
                          height="40"
                          rx="8"
                          fill="#0b1220"
                          opacity="0.9"
                        />
                        <text
                          x="60"
                          y="58"
                          fill="#fff"
                          fontSize="20"
                          fontFamily="sans-serif"
                        >
                          SK Auto Care
                        </text>
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="brands" className="bg-gray-950 pb-10">
          <div className="container mx-auto px-4 py-12">
            <h2 className="text-3xl font-bold mb-6 text-white">
              Top Brands We Support
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
              {/* Product cards go here */}
              {brandData.map((brand) => (
                <div
                  key={brand.id}
                  className="bg-gray-900 rounded-lg p-6 text-center shadow transition-shadow hover:bg-gray-700"
                >
                  <img
                    src={brand.image}
                    alt={brand.name}
                    className="mx-auto h-20 w-auto object-contain"
                  />
                  {/* <h3 className="text-xl font-semibold text-white mb-2">{brand.name}</h3>
                  <p className="text-gray-400">{brand.description}</p> */}
                  <button
                    onClick={() => handleBrandClick(brand.name)}
                    className="mt-2 inline-block rounded-full bg-red-600 hover:bg-red-700 px-5 py-2 font-semibold text-white"
                  >
                    <span>Explore</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="bg-gray-950 pb-16">
          <div className="container mx-auto px-6 py-16">
            <div className="grid gap-10 md:grid-cols-2 md:items-center">
              {/* Left: text */}
              <div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-white">
                  About SK Auto Care
                </h2>
                <p className="mt-4 text-gray-300 max-w-xl">
                  SK Auto Care provides high-quality parts and trusted service
                  for all major vehicle makes. Our team combines expert
                  knowledge with fast delivery and friendly support so you can
                  get back on the road sooner.
                </p>

                <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 text-xl">✓</span>
                    <span>OEM & aftermarket parts — verified quality</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 text-xl">✓</span>
                    <span>Fast local shipping & global sourcing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 text-xl">✓</span>
                    <span>Expert advice & fitment support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 text-xl">✓</span>
                    <span>Hassle-free returns & warranty</span>
                  </li>
                </ul>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="/contact"
                    className="inline-block rounded-full bg-red-600 hover:bg-red-700 px-5 py-3 font-semibold text-white"
                  >
                    Get Support
                  </a>
                  <a
                    href="tel:+94770127459"
                    className="inline-block rounded-full bg-transparent border border-white/20 px-5 py-3 text-white/90 hover:bg-white/5"
                  >
                    Call +94 770 127459
                  </a>
                </div>

                <div className="mt-8 flex gap-8 text-sm text-gray-400">
                  <div>
                    <div className="text-2xl font-bold text-white">10k+</div>
                    <div>Parts sold</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">4.9★</div>
                    <div>Average rating</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">5k+</div>
                    <div>Happy customers</div>
                  </div>
                </div>
              </div>

              {/* Right: illustration */}
              {/* <div className="flex items-center justify-center">
                        <div className="w-full max-w-md rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-gray-800 to-gray-700 p-6">
                          <svg viewBox="0 0 640 360" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="aboutIllustrationTitle">
                            <title id="aboutIllustrationTitle">Garage and parts illustration</title>
                            <rect width="100%" height="100%" rx="12" fill="#0b1220" opacity="0.08"/>
                            <g transform="translate(20,20)" fill="none" stroke="#fff" strokeOpacity="0.18" strokeWidth="2">
                              <rect x="0" y="60" width="560" height="140" rx="12" fill="#0f172a" stroke="none" opacity="0.06"/>
                              <circle cx="90" cy="190" r="28" fill="#111827" stroke="none" opacity="0.1"/>
                              <circle cx="420" cy="190" r="28" fill="#111827" stroke="none" opacity="0.1"/>
                            </g>
                            <g transform="translate(40,40)">
                              <text x="20" y="40" fill="#fff" fontSize="20" fontFamily="sans-serif">SK Auto Care</text>
                            </g>
                          </svg>
                        </div>
                      </div> */}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Homepage;
