import React from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  className?: string;
  width?: string | number;
  height?: string | number;
  prefixIcon?: React.ReactNode;
  suffixIcon?: React.ReactNode;
  borderColor?: string;
  placeHolder?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  error,
  helperText,
  className = "",
  width = "100%",
  height = "40px",
  prefixIcon,
  suffixIcon,
  borderColor = "border-gray-300",
  placeholder = "",
  ...props
}) => {
  const errorStyles = error
    ? "border-red-500 focus:ring-red-500"
    : `focus:ring-blue-500 ${borderColor}`;
  const labelStyles = error ? "text-red-500" : "text-gray-700";
  const helperStyles = error ? "text-red-500" : "text-gray-500";

  return (
    <div className="flex flex-col gap-1" style={{ width }}>
      {label && (
        <label htmlFor={props.id} className={`text-sm font-medium ${labelStyles}`}>
          {label}
        </label>
      )}

      <div
        className={`flex items-center rounded-lg border px-2 py-1 ${errorStyles} ${className}`}
        style={{ height }}
      >
        {prefixIcon && <div className="mr-2 text-gray-500">{prefixIcon}</div>}
        <input
          {...props}
          placeholder={placeholder}
          className="flex-1 bg-transparent outline-none text-sm"
        />
        {suffixIcon && <div className="ml-2 text-gray-500">{suffixIcon}</div>}
      </div>

      {(helperText || error) && (
        <p className={`text-xs mt-1 ${helperStyles}`}>{error || helperText}</p>
      )}
    </div>
  );
};

export default Input;

{
  /* <Input
  id="username"
  label="Username"
  placeholder="Enter username"
  value={username}
  onChange={(e) => setUsername(e.target.value)}
  helperText="Your public display name"
  prefixIcon={<FaUser />}
  suffixIcon={<FaEye />}
  error={!username ? "Username is required" : ""}
  width="100%"
  height="45px"
/>; */
}
