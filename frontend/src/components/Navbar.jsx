// ...existing code...
import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom"; // changed: import NavLink
import logo from "../assets/Logo2.png";
import { TiShoppingCart, TiThMenu } from "react-icons/ti";
import { PiPhoneCallDuotone } from "react-icons/pi";
import { IoIosCloseCircle } from "react-icons/io";
import { FaFacebook,FaWhatsapp   } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [searchOpen, setSearchOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);

  // Determine if we are on the homepage
  const showCart = location.pathname == "/payment/cart";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY.current) {
        // Scrolling down → hide header
        setShowHeader(false);
      } else {
        // Scrolling up → show header
        setShowHeader(true);
      }
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navClass = ({ isActive }) =>
    `transition-colors duration-200 ${
      isActive
        ? "text-red-400 font-bold border-b-2 border-red-400"
        : "text-white font-bold hover:text-red-700"
    }`;
  const phone = "+94770127459";

  return (
    <header
      className={`fixed bg-gray-950/75  top-0 left-0 w-full z-50  ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between lg:justify-self-end px-4 py-2 ">
        {/* Left: logo + nav (nav placed next to logo) */}
        <div className="flex items-center lg:space-x-60">
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="SK Auto Care"
              className="h-8 m-auto md:px-10 lg:h-12  w-auto object-contain"
            />
          </Link>

          <nav className="hidden md:flex items-center space-x-12 text-lg lg:ml-40">
            <NavLink to="/" end className={navClass}>
              Home
            </NavLink>
            <a href="/#brands" className="text-white font-bold hover:text-red-700 ">
              Brands
            </a>
            <a href="#footer" className="text-white font-bold hover:text-red-700">
              About Us
            </a>
            <a href="#footer" className="text-white font-bold hover:text-red-700">
              Contact
            </a>
          </nav>
        </div>

        {/* Center: search (visible on sm+)
        <div className="hidden sm:flex flex-1 justify-end px-4">
          <form className="w-full max-w-md">
            <label htmlFor="site-search" className="sr-only">
              Search
            </label>
            <div className="relative">
              <input
                id="site-search"
                type="search"
                placeholder="Search parts, brands..."
                className="w-full bg-gray-700 text-white bold placeholder-gray-400 rounded-full px-4 py-1.5 focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              <button
                type="submit"
                className="absolute right-1 top-1/2 -translate-y-1/2 text-gray-300 hover:text-white p-1"
              >
                <FiSearch />
              </button>
            </div>
          </form>
        </div> */}

        {/* Right: cart, search (mobile), menu */}
        <div className="flex  items-center space-x-5 bg-gray-700 px-3 py-2 rounded-3xl ml-2">
          {/* on mobile show search icon */}
          {/* <button
            className="text-white text-2xl hidden"
            onClick={() => setSearchOpen(!searchOpen)}
            aria-label="Toggle search"
          >
            <FiSearch />
          </button> */}
          <a
            href={`tel:${phone}`}
            className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-3 py-1.5 rounded-full text-sm font-semibold"
            aria-label={`Call us at ${phone}`}
          >
            <span className="hidden sm:flex mr-1">Call Now</span>
            <PiPhoneCallDuotone className="text-white font-bold text-[20px]" />
          </a>
          <a href="https://wa.me/971547530870" target="_blank" className="text-white font-bold text-[20px]">
            <FaWhatsapp />
          </a>
          {showCart && (
            <Link to="/cart" className="text-white text-[20px]">
              <TiShoppingCart />
            </Link>
          )}

          <button
            className="text-2xl text-gray-800 p-2  sm:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <IoIosCloseCircle className="text-2xl text-white animate-pulse" />
            ) : (
              <TiThMenu className="text-2xl text-white " />
            )}
          </button>
        </div>
      </div>

      {/* Mobile search panel (below header) */}
      {/* {searchOpen && (
        <div className="md:hidden bg-gray-900 border-t">
          <div className="container mx-auto px-4 py-2">
            <form>
              <label htmlFor="mobile-search" className="sr-only">
                Search
              </label>
              <div className="relative">
                <input
                  id="mobile-search"
                  type="search"
                  placeholder="Search parts, brands..."
                  className="w-full bg-gray-800 text-white placeholder-gray-400 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-600"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-300 hover:text-white p-1"
                >
                  <FiSearch />
                </button>
              </div>
            </form>
          </div>
        </div>
      )} */}

      {/* Mobile Dropdown */}
      {isOpen && (
        <nav className="md:hidden bg-gray-800 border-t shadow-md">
          <ul className="flex flex-col items-center py-4 space-y-4 text-white font-medium">
            <li>
              <NavLink
                to="/"
                end
                onClick={() => setIsOpen(false)}
                className={navClass}
              >
                Home
              </NavLink>
            </li>
            <li>
              <a
                href="/#brands"
                onClick={() => setIsOpen(false)}
                className={navClass}
              >
                Brands
              </a>
            </li>
            <li>
              <a
                href="/#footer"
                onClick={() => setIsOpen(false)}
                className={navClass}
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/#footer"
                onClick={() => setIsOpen(false)}
                className={navClass}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

