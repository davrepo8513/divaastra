import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `px-4 py-2 rounded-md text-sm font-medium ${
      isActive ? "bg-indigo-600 text-white" : "text-gray-700 hover:bg-gray-200"
    }`;

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="mx-4 flex items-center justify-between px-2 py-3">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-indigo-600">
          Divaastra
        </Link>

        {/* Nav Links */}
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
