// import React, { useState } from "react";

// interface TooltipProps {
//   text: string;
//   children: React.ReactNode;
//   position?: "top" | "bottom" | "left" | "right";
// }

// const Tooltip: React.FC<TooltipProps> = ({
//   text,
//   children,
//   position = "top",
// }) => {
//   const [visible, setVisible] = useState(false);

//   const positionClasses = {
//     top: "bottom-full mb-2 left-1/2 -translate-x-1/2",
//     bottom: "top-full mt-2 left-1/2 -translate-x-1/2",
//     left: "right-full mr-2 top-1/2 -translate-y-1/2",
//     right: "left-full ml-2 top-1/2 -translate-y-1/2",
//   };

//   return (
//     <div
//       className="relative inline-block"
//       onMouseEnter={() => setVisible(true)}
//       onMouseLeave={() => setVisible(false)}
//     >
//       {children}
//       {visible && (
//         <div
//           className={`absolute bg-black text-white text-xs px-2 py-1 rounded ${positionClasses[position]}`}
//         >
//           {text}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Tooltip;


// // <Tooltip text="Click here to add item">
// //   <button className="p-2 bg-blue-500 text-white rounded">Hover Me</button>
// // </Tooltip>;



import React, { useState } from "react";

interface TooltipProps {
  text: string;
  icon?: React.ReactNode; // Optional icon for icon-only tooltip
  children?: React.ReactNode; // For wrapping normal elements
  position?: "top" | "bottom" | "left" | "right";
  trigger?: "hover" | "click";
}

const Tooltip: React.FC<TooltipProps> = ({
  text,
  icon,
  children,
  position = "top",
  trigger = "hover",
}) => {
  const [visible, setVisible] = useState(false);

  const positionClasses: Record<string, string> = {
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
      {/* Render either icon or children */}
      <span className="cursor-pointer">{icon ? icon : children}</span>

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

export default Tooltip;





// import { Info } from "lucide-react";
// import Tooltip from "./Tooltip";

// <Tooltip
//   text="This is info tooltip"
//   icon={<Info className="w-5 h-5 text-blue-500" />}
//   position="right"
// />;


// Normal Tooltip wrapping a button:
// <Tooltip text="Click to submit" position="top">
//   <button className="px-4 py-2 bg-blue-600 text-white rounded">Submit</button>
// </Tooltip>;
