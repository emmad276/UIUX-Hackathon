import React from "react";
import Image from "next/image";
import footerlogo from "@/app/public/footerlogo.png";
import face from "@/app/public/facebook.png";
import insta from "@/app/public/insta.png";
import pint from "@/app/public/pint.png";
import twit from "@/app/public/twitter.png";
import youtube from "@/app/public/youtube.png";
import paypal from "@/app/public/Group 13.png";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Footer = () => {
  return (
    <footer className=" py-12 border-t  w-full ">
      <div className="w-[90%] lg:w-[77.5%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  border-gray-200">
        {/* Logo and Description */}
        <div>
          <Image src={footerlogo} alt="Footer Logo" />
          <p
            className={`mb-6 mt-4 text-base leading-relaxed text-gray-700 ${inter.className}`}
          >
            Vivamus tristique odio sit amet velit semper, eu posuere turpis
            interdum. Cras egestas purus
          </p>
          <div className="flex space-x-4">
            <Image src={face} alt="Facebook" />
            <Image src={twit} alt="Twitter" />
            <Image src={insta} alt="Instagram" />
            <Image src={pint} alt="Pinterest" />
            <Image src={youtube} alt="YouTube" />
          </div>
        </div>
        {/* Category Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-500 mb-4">Category</h3>
          <ul className="space-y-2">
            <li className={`text-base text-gray-700 ${inter.className}`}>
              Sofa
            </li>
            <li className={`text-base text-gray-700 ${inter.className}`}>
              Armchair
            </li>
            <li className={`text-base text-gray-700 ${inter.className}`}>
              Wing Chair
            </li>
            <li
              className={`text-base ${inter.className} text-[#007580] underline`}
            >
              Desk Chair
            </li>
            <li className={`text-base text-gray-700 ${inter.className}`}>
              Wooden Chair
            </li>
            <li className={`text-base text-gray-700 ${inter.className}`}>
              Park Bench
            </li>
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-500 mb-4">Support</h3>
          <ul className="space-y-2">
            {[
              "Help & Support",
              "Terms & Conditions",
              "Privacy Policy",
              "Help",
            ].map((item, idx) => (
              <li
                key={idx}
                className={`text-base text-gray-700 ${inter.className}`}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-gray-500 mb-4">
            Newsletter
          </h3>
          <form className="flex flex-wrap gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700"
            >
              Subscribe
            </button>
          </form>
          <p className="mt-4 text-sm text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            tincidunt erat enim.
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="w-[90%] lg:w-[77.5%] mx-auto mt-8 border-t pt-4 text-sm text-gray-600 flex flex-wrap justify-between items-center">
        <p>© 2021 - Blogy - Designed & Developed by Zakroth</p>
        <div className="flex space-x-4">
          <Image src={paypal} alt="Paypal" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
