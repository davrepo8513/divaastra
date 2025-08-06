import React, { useState } from "react";

interface TooltipWithIconProps {
  text: string;
  icon: React.ReactNode;
  position?: "top" | "bottom" | "left" | "right";
  trigger?: "hover" | "click";
}

const TooltipWithIcon: React.FC<TooltipWithIconProps> = ({
  text,
  icon,
  position = "top",
  trigger = "hover",
}) => {
  const [visible, setVisible] = useState(false);

  const positionClasses = {
    top: "bottom-full mb-2 left-1/2 -translate-x-1/2",
    bottom: "top-full mt-2 left-1/2 -translate-x-1/2",
    left: "right-full mr-2 top-1/2 -translate-y-1/2",
    right: "left-full ml-2 top-1/2 -translate-y-1/2",
  };

  const handleToggle = () => {
    if (trigger === "click") setVisible(!visible);
  };

  return (
    <div
      className="relative inline-flex items-center"
      onMouseEnter={() => trigger === "hover" && setVisible(true)}
      onMouseLeave={() => trigger === "hover" && setVisible(false)}
      onClick={handleToggle}
    >
      <span className="cursor-pointer">{icon}</span>

      {visible && (
        <div
          className={`absolute bg-gray-900 text-white text-xs px-2 py-1 rounded shadow-lg whitespace-nowrap z-50 ${positionClasses[position]}`}
        >
          {text}
        </div>
      )}
    </div>
  );
};

export default TooltipWithIcon;

// import { Info } from "lucide-react";
// import TooltipWithIcon from "./TooltipWithIcon";

// const Example = () => {
//   return (
//     <div className="p-10">
//       <TooltipWithIcon
//         text="This is additional info"
//         icon={<Info className="w-5 h-5 text-blue-500" />}
//         position="right"
//         trigger="hover"
//       />
//     </div>
//   );
// };
