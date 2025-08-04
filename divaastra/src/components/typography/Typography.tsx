import React, { JSX, ReactNode } from "react";
import clsx from "clsx";

type Variant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "subtitle"
  | "body"
  | "caption"
  | "overline";

interface TypographyProps {
  variant?: Variant;
  children: ReactNode;
  className?: string;
  color?: "primary" | "secondary" | "danger" | "success" | "gray" | "black";
  align?: "left" | "center" | "right";
  weight?: "light" | "normal" | "medium" | "semibold" | "bold";
  as?: keyof JSX.IntrinsicElements;
}

const variantStyles: Record<Variant, string> = {
  h1: "text-4xl font-bold",
  h2: "text-3xl font-semibold",
  h3: "text-2xl font-semibold",
  h4: "text-xl font-medium",
  h5: "text-lg font-medium",
  h6: "text-base font-medium",
  subtitle: "text-lg text-gray-600",
  body: "text-base",
  caption: "text-sm text-gray-500",
  overline: "text-xs uppercase tracking-widest text-gray-400",
};

const colorStyles = {
  primary: "text-blue-600",
  secondary: "text-purple-600",
  danger: "text-red-600",
  success: "text-green-600",
  gray: "text-gray-700",
  black: "text-black",
};

const weightStyles = {
  light: "font-light",
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
};

const Typography: React.FC<TypographyProps> = ({
  variant = "body",
  children,
  className,
  color = "black",
  align = "left",
  weight,
  as,
}) => {
  const Component = as || (variant.startsWith("h") ? (variant as any) : "p");

  return (
    <Component
      className={clsx(
        variantStyles[variant],
        colorStyles[color],
        weight && weightStyles[weight],
        `text-${align}`,
        className
      )}
    >
      {children}
    </Component>
  );
};

export default Typography;



// Usage Examples:
// tsx
// Copy
// Edit
// <Typography variant="h1" color="primary">
//   Divaastra Social App
// </Typography>

// <Typography variant="subtitle" align="center">
//   Connect with people around the world
// </Typography>

// <Typography variant="caption" color="gray">
//   © 2025 Divaastra Inc.
// </Typography>






// ✅ Features:
// ✔️ Supports all header/body variants
// ✔️ Custom colors & weights
// ✔️ Alignments (left, center, right)
// ✔️ Can override HTML tag with as prop