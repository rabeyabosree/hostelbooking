import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import Logo from './Logo';

function Footer() {
  return (
    <footer className="bg-green-800 text-gray-300 mt-10">

      <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-4 gap-8">

       <Logo />

        {/* Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Hostels</li>
            <li className="hover:text-white cursor-pointer">My Bookings</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-white font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Help Center</li>
            <li className="hover:text-white cursor-pointer">Terms & Conditions</li>
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-3">
          <h3 className="text-white font-semibold">Contact</h3>

          <p className="flex items-center gap-2 text-sm">
            <MdLocationOn /> Dhaka, Bangladesh
          </p>

          <p className="flex items-center gap-2 text-sm">
            <MdPhone /> +880 1234-567890
          </p>

          <p className="flex items-center gap-2 text-sm">
            <MdEmail /> support@stayfinder.com
          </p>

          {/* Social */}
          <div className="flex gap-3 pt-2 text-lg">
            <FaFacebookF className="cursor-pointer hover:text-white" />
            <FaInstagram className="cursor-pointer hover:text-white" />
            <FaTwitter className="cursor-pointer hover:text-white" />
          </div>

        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 text-center py-4 text-sm">
        © {new Date().getFullYear()} StayFinder. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;