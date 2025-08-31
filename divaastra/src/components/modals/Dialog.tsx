// components/Dialog.tsx
import Button from "@shieldspire/components/buttons/Button";
import React from "react";

interface DialogProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  message?: string;
  onConfirm: () => void;
}

const Dialog: React.FC<DialogProps> = ({ open, onClose, title, message, onConfirm }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-5 w-full max-w-sm">
        {title && <h2 className="text-lg font-semibold mb-2">{title}</h2>}
        {message && <p className="mb-4">{message}</p>}
        <div className="flex justify-end gap-2">
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={onConfirm}>
            Confirm
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Dialog;
