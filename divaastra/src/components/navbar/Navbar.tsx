import PersonIcon from "@mui/icons-material/Person";
import { Avatar } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import IMAGES from "../../utils/constants/images";
import Dropdown, { DropdownOption } from "../dropdown/Dropdown";

const Navbar: React.FC = () => {
  // Function to generate classes for NavLink based on active state
  const [selectedWithIcon, setSelectedWithIcon] = useState("");

  const optionsWithIcons: DropdownOption[] = [
    {
      label: "User",
      value: "user",
      icon: <PersonIcon className="text-blue-500" />,
    },
  ];

  const Image = <PersonIcon className="text-blue-500" />;

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="mx-4 flex items-center justify-between px-2 py-3">
        <Link to="/" className="text-2xl font-bold text-indigo-600">
          <img src={IMAGES.logo} alt="shieldspire" className="h-8 w-auto" />
        </Link>
        <div className="flex space-x-4">
          <Dropdown
            options={optionsWithIcons}
            value={selectedWithIcon}
            onChange={setSelectedWithIcon}
            showIcons={true}
            width="12em"
          />
          <Avatar
            alt="User Avatar"
            children={Image}
            className="cursor-pointer"
            sx={{ width: 40, height: 40 }}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
