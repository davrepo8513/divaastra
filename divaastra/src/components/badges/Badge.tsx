import React from "react";

interface BadgeProps {
  label: string;
  color?: string;
}

const Badge: React.FC<BadgeProps> = ({ label, color = "bg-blue-500" }) => {
  return <span className={`px-3 py-1 rounded-full text-white text-sm ${color}`}>{label}</span>;
};

export default Badge;
