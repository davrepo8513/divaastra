import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 border-t mt-5">
      <div className="mx-2 px-2 py-4 flex flex-col md:flex-row items-center justify-between">
        {/* Logo / Brand */}
        <Link to="/" className="text-lg font-bold text-indigo-600">
          Divaastra
        </Link>

        {/* Links */}
        <div className="flex space-x-4 mt-3 md:mt-0">
          <Link to="/about" className="hover:text-indigo-500">
            About
          </Link>
          <Link to="/contact" className="hover:text-indigo-500">
            Contact
          </Link>
          <Link to="/privacy" className="hover:text-indigo-500">
            Privacy Policy
          </Link>
        </div>

        {/* Copyright */}
        <p className="mt-3 md:mt-0 text-sm text-gray-500">
          © {new Date().getFullYear()} Divaastra. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
