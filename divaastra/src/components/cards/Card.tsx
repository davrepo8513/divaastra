import clsx from "clsx";
import React from "react";

interface CardProps {
  title?: string;
  footer?: React.ReactNode;
  children: React.ReactNode;
  clickable?: boolean;
  className?: string;
}

const Card: React.FC<CardProps> = ({ title, footer, children, clickable = false, className }) => {
  return (
    <div
      className={clsx(
        "bg-white rounded-lg shadow p-4",
        clickable && "hover:shadow-lg cursor-pointer",
        className
      )}
    >
      {title && <h3 className="text-lg font-semibold mb-2">{title}</h3>}
      <div>{children}</div>
      {footer && <div className="mt-3 border-t pt-2">{footer}</div>}
    </div>
  );
};

export default Card;
