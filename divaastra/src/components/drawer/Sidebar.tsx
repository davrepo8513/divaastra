import React from "react";

interface SidebarProps {
  items: { label: string; icon?: React.ReactNode; onClick: () => void }[];
}

const Sidebar: React.FC<SidebarProps> = ({ items }) => {
  return (
    <div className="w-64 bg-gray-800 text-white h-screen p-4 space-y-3">
      {items.map((item, idx) => (
        <button
          key={idx}
          className="flex items-center gap-3 p-2 w-full hover:bg-gray-700 rounded"
          onClick={item.onClick}
        >
          {item.icon}
          {item.label}
        </button>
      ))}
    </div>
  );
};

export default Sidebar;
