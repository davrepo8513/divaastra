// import React, { ReactNode } from "react";
// import clsx from "clsx";

// type Variant =
//   | "h1"
//   | "h2"
//   | "h3"
//   | "h4"
//   | "h5"
//   | "h6"
//   | "subtitle"
//   | "body"
//   | "caption"
//   | "overline";

// interface TypographyProps {
//   variant?: Variant;
//   children: ReactNode;
//   className?: string;
//   color?: "primary" | "secondary" | "danger" | "success" | "gray" | "black";
//   align?: "left" | "center" | "right";
//   weight?: "light" | "normal" | "medium" | "semibold" | "bold";
//   as?: keyof JSX.IntrinsicElements;
//   responsive?: boolean; // ✅ Enables responsive variants
// }

// const variantStyles: Record<Variant, string> = {
//   h1: "text-3xl md:text-5xl font-bold",
//   h2: "text-2xl md:text-4xl font-semibold",
//   h3: "text-xl md:text-3xl font-semibold",
//   h4: "text-lg md:text-2xl font-medium",
//   h5: "text-base md:text-xl font-medium",
//   h6: "text-sm md:text-lg font-medium",
//   subtitle: "text-base md:text-lg text-gray-600",
//   body: "text-sm md:text-base",
//   caption: "text-xs md:text-sm text-gray-500",
//   overline: "text-xs uppercase tracking-widest text-gray-400",
// };

// const colorStyles = {
//   primary: "text-blue-600",
//   secondary: "text-purple-600",
//   danger: "text-red-600",
//   success: "text-green-600",
//   gray: "text-gray-700",
//   black: "text-black",
// };

// const weightStyles = {
//   light: "font-light",
//   normal: "font-normal",
//   medium: "font-medium",
//   semibold: "font-semibold",
//   bold: "font-bold",
// };

// const Typography: React.FC<TypographyProps> = ({
//   variant = "body",
//   children,
//   className,
//   color = "black",
//   align = "left",
//   weight,
//   as,
//   responsive = true,
// }) => {
//   const Component = as || (variant.startsWith("h") ? (variant as any) : "p");

//   return (
//     <Component
//       className={clsx(
//         responsive
//           ? variantStyles[variant]
//           : variantStyles[variant].replace(/md:[^\s]+/g, ""), // remove md: classes if responsive=false
//         colorStyles[color],
//         weight && weightStyles[weight],
//         `text-${align}`,
//         className
//       )}
//     >
//       {children}
//     </Component>
//   );
// };

// export default Typography;





// Usage Examples
// tsx
// Copy
// Edit
// {/* Responsive by default */}
// <Typography variant="h1" color="primary">
//   Divaastra Social App
// </Typography>

// {/* Disable responsive (mobile/desktop same size) */}
// <Typography variant="h2" color="secondary" responsive={false}>
//   Welcome to Divaastra
// </Typography>

// {/* Subtitle with responsive size */}
// <Typography variant="subtitle" align="center">
//   Connect with the world 🌎
// </Typography>




// Features Added:
// ✅ Automatically adjusts font-size for mobile & desktop using Tailwind's md: classes.
// ✅ responsive={false} disables responsive sizing for fixed-size text.
// ✅ Still supports all colors, weights, and alignments.