import React from "react";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({ label, ...props }) => (
  <label className="flex items-center gap-2 cursor-pointer">
    <input type="checkbox" {...props} className="accent-blue-600" />
    {label}
  </label>
);

export const Radio: React.FC<CheckboxProps> = ({ label, ...props }) => (
  <label className="flex items-center gap-2 cursor-pointer">
    <input type="radio" {...props} className="accent-blue-600" />
    {label}
  </label>
);
