import React from "react";
import logo from "../assets/Logo2.png";
import { AiFillTikTok } from "react-icons/ai";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div id="footer" className="bg-gray-800 text-white text-center p-4 rounded-t-2xl -mt-4 relative z-20">
      <div className="grid grid-cols-2 md:grid-cols-4  lg:grid-cols-4 gap-4 justify-between">
        <div className="flex flex-col items-center ">
          <img
            src={logo}
            alt="SK Auto Care Logo"
            className="h-12 w-auto mt-5 "
          />

          <div className="flex flex-inline gap-2 md:gap-3 lg:gap-3  text-2xl ">
            <a href="https://www.tiktok.com/@skautocare" target="_blank">
              <AiFillTikTok />
            </a>
            <a href="https://www.facebook.com/skautocare" target="_blank">
              <FaFacebook />
            </a>
            <a href="https://www.facebook.com/skautocare" target="_blank">
              <MdEmail />
            </a>
            <a href="https://wa.me/971547530870" target="_blank">
              <FaWhatsapp />
            </a>
          </div>
          {/* <a href="#" className='hover:underline text-gray-400'>Our Story</a>
                <a href="#" className='hover:underline text-gray-400'>Careers</a>
                <a href="#" className='hover:underline text-gray-400'>Contact</a> */}
        </div>
        <div className="flex flex-col items-start ">
          <h4 className="font-bold mb-1">Customer Services</h4>
          <a
            href="https://www.facebook.com/skautocare"
            className="hover:underline text-gray-400"
          >
            FAQs
          </a>
          <p className="hover:underline text-gray-400">Shipping & Delivery</p>
          <p className="hover:underline text-gray-400">Warranty Policy</p>
        </div>
        <div className="flex flex-col items-start">
          <h4 className="font-bold mb-1">Popular Categories</h4>
          <p className="hover:underline text-gray-400">Engine Parts </p>
          <p className="hover:underline text-gray-400">Brake Systems </p>
          <p className="hover:underline text-gray-400">Tires & Wheels </p>
          <p className="hover:underline text-gray-400 ">
          Accessories
          </p>
        </div>
        <div className="flex flex-col items-start">
          <h4 className="font-bold mb-1">Contact Us</h4>
          <a href="#" className="hover:underline text-gray-400">
            Phone
          </a>
          <a href="#" className="hover:underline text-gray-400">
            Whatsapp
          </a>
          <a href="#" className="hover:underline text-gray-400">
            Email support
          </a>
        </div>
      </div>
      <div className="mt-4 text-sm">
        &copy; 2025 SK Auto Care. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
