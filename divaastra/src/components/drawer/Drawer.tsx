import { AnimatePresence, motion } from "framer-motion";
import React from "react";

interface DrawerProps {
  open: boolean;
  onClose: () => void;
  position?: "left" | "right";
  children: React.ReactNode;
}

const Drawer: React.FC<DrawerProps> = ({ open, onClose, position = "right", children }) => {
  return (
    <AnimatePresence>
      {open && (
        <>
          <div className="fixed inset-0 bg-black/40 z-40" onClick={onClose}></div>
          <motion.div
            initial={{ x: position === "right" ? "100%" : "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: position === "right" ? "100%" : "-100%" }}
            transition={{ duration: 0.3 }}
            className={`fixed top-0 ${position}-0 w-80 h-full bg-white shadow-lg z-50 p-4`}
          >
            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Drawer;
