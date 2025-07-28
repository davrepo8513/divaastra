import React, { useEffect } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-md p-5 relative">
        <button
          className="absolute top-2 right-2 text-gray-600"
          onClick={onClose}
        >
          ✕
        </button>
        {title && <h2 className="text-lg font-semibold mb-4">{title}</h2>}
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
