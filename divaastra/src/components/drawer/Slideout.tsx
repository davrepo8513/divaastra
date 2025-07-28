import React from "react";
import { X } from "lucide-react";

interface SlideoutProps {
  isOpen: boolean;
  onClose: () => void;
  position?: "left" | "right" | "top" | "bottom";
  title?: string;
  width?: string; // e.g. "w-80" for side drawers
  height?: string; // e.g. "h-1/2" for top/bottom
  children: React.ReactNode;
}

const Slideout: React.FC<SlideoutProps> = ({
  isOpen,
  onClose,
  position = "right",
  title,
  width = "w-80",
  height = "h-full",
  children,
}) => {
  const positionClasses: Record<string, string> = {
    left: `top-0 left-0 ${width} ${height}`,
    right: `top-0 right-0 ${width} ${height}`,
    top: `top-0 left-0 w-full ${height}`,
    bottom: `bottom-0 left-0 w-full ${height}`,
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out
        ${positionClasses[position]}
        ${
          isOpen
            ? "translate-x-0 translate-y-0"
            : position === "right"
            ? "translate-x-full"
            : position === "left"
            ? "-translate-x-full"
            : position === "top"
            ? "-translate-y-full"
            : "translate-y-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">{title}</h2>
          <button onClick={onClose}>
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 overflow-y-auto h-full">{children}</div>
      </div>
    </>
  );
};

export default Slideout;



// Right-side Drawer:
// const [open, setOpen] = React.useState(false);

// <>
//   <button
//     onClick={() => setOpen(true)}
//     className="px-4 py-2 bg-blue-600 text-white rounded"
//   >
//     Open Drawer
//   </button>

//   <Slideout isOpen={open} onClose={() => setOpen(false)} title="Settings">
//     <p>Drawer content goes here.</p>
//   </Slideout>
// </>;



// Left-side Drawer:
// <Slideout isOpen={open} onClose={() => setOpen(false)} position="left" title="Menu">
//   <p>Navigation items</p>
// </Slideout>


// Top Slideout:
// <Slideout isOpen={open} onClose={() => setOpen(false)} position="top" height="h-1/3" title="Notifications">
//   <p>Notification content</p>
// </Slideout>
