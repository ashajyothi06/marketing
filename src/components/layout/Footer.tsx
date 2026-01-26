import { Link } from "react-router-dom";
import {
  Facebook,
  Linkedin,
  Instagram,
  Youtube,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t text-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-10">

          {/* Left: Logo + Newsletter */}
          <div className="max-w-md">

            {/* Text Logo */}
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl font-bold tracking-tight">
                <span className="text-[#5b2d8b]">digital</span>
                <span className="text-[#f58220] ml-1">piloto</span>
              </span>
            </Link>

            <p className="font-semibold mb-1">
              Subscribe To Our Newsletter!
            </p>
            <p className="text-sm text-gray-600 mb-3">
              Stay updated with the latest happenings in the digital world.
              <br />
              Subscribe now for Free!
            </p>

            <div className="flex mb-2">
              <input
                type="email"
                placeholder="Email Address"
                className="border border-gray-300 px-3 py-2 text-sm w-full focus:outline-none"
              />
              <button className="bg-[#0b1c2d] text-white px-5 text-sm">
                Subscribe
              </button>
            </div>

            <p className="text-xs text-gray-500">
              CIN : U73100WB2023PTC264567
            </p>
          </div>

          {/* Right: Links + Social */}
          <div className="flex flex-col items-end justify-between">

            {/* Top Links */}
            <div className="flex flex-wrap justify-end gap-6 text-sm mb-6">
              <Link to="/disclaimer" className="hover:text-orange-500">
                Disclaimer
              </Link>
              <Link to="/contact" className="hover:text-orange-500">
                Contact Us
              </Link>
              <Link to="/sitemap" className="hover:text-orange-500">
                Sitemap
              </Link>
              <Link to="/blog" className="hover:text-orange-500">
                Knowledge Hub
              </Link>
              <Link to="/privacy" className="hover:text-orange-500">
                Privacy Policy
              </Link>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4">
              <a href="#"><Facebook size={18} /></a>
              <a href="#"><Instagram size={18} /></a>
              <a href="#"><Linkedin size={18} /></a>
              <a href="#"><Youtube size={18} /></a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-6" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-3">
          <p>
            Please read the{" "}
            <span className="text-orange-500 cursor-pointer">
              Disclaimer
            </span>{" "}
            carefully before you take any action.
          </p>
          <p>
            © 2017 – {new Date().getFullYear()} | Digital Piloto Pvt Ltd
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
