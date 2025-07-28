import React from "react";

interface EmptyStateProps {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  action?: React.ReactNode;
  className?: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({
  icon,
  title,
  description,
  action,
  className = "",
}) => {
  return (
    <div
      className={`flex flex-col items-center justify-center text-center p-6 ${className}`}
    >
      {icon && <div className="text-5xl mb-3 text-gray-400">{icon}</div>}
      <h2 className="text-lg font-semibold">{title}</h2>
      {description && (
        <p className="text-sm text-gray-500 mt-1">{description}</p>
      )}
      {action && <div className="mt-4">{action}</div>}
    </div>
  );
};

export default EmptyState;




// <EmptyState
//   icon={<span>📭</span>}
//   title="No Data Found"
//   description="Try adjusting filters or adding new items."
//   action={<button className="btn-primary">Add Item</button>}
// />;
