import React, { useState } from "react";

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  maxLength?: number;
  autoResize?: boolean;
}

const Textarea: React.FC<TextareaProps> = ({
  maxLength,
  autoResize = true,
  ...props
}) => {
  const [value, setValue] = useState("");

  return (
    <div className="flex flex-col gap-1 w-full">
      <textarea
        {...props}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          if (autoResize) {
            e.target.style.height = "auto";
            e.target.style.height = e.target.scrollHeight + "px";
          }
        }}
        maxLength={maxLength}
        className="border rounded p-2 focus:ring-2 focus:ring-blue-500 resize-none"
      />
      {maxLength && (
        <p className="text-xs text-gray-500">
          {value.length}/{maxLength}
        </p>
      )}
    </div>
  );
};

export default Textarea;
