import Image from "@divaastra/utils/constants/images";
import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  // Function to generate classes for NavLink based on active state
  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `px-4 py-2 text-sm font-medium border-b-2 ${
      isActive
        ? "border-indigo-600 text-indigo-600"
        : "border-transparent text-gray-700 hover:text-indigo-600 hover:border-indigo-600"
    }`;

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="mx-4 flex items-center justify-between px-2 py-3">
        <Link to="/" className="text-2xl font-bold text-indigo-600">
          <img src={Image.logo} alt="Divaastra" className="h-8 w-auto" />
        </Link>
        <div className="flex space-x-4">
          <NavLink to="/" className={navLinkClasses} end>
            Home
          </NavLink>
          <NavLink to="/about" className={navLinkClasses}>
            About
          </NavLink>
          <NavLink to="/contact" className={navLinkClasses}>
            Contact
          </NavLink>
          <NavLink to="/signup" className={navLinkClasses}>
            Sign up
          </NavLink>
          <NavLink to="/login" className={navLinkClasses}>
            Log in
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
