import React from "react";

interface StepperProps {
  steps: string[];
  currentStep: number;
}

const Stepper: React.FC<StepperProps> = ({ steps, currentStep }) => {
  return (
    <div className="flex items-center justify-between w-full">
      {steps.map((step, index) => (
        <div key={step} className="flex-1 flex flex-col items-center relative">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center z-10 ${
              index <= currentStep ? "bg-blue-600 text-white" : "bg-gray-300 text-gray-600"
            }`}
          >
            {index + 1}
          </div>
          {index < steps.length - 1 && (
            <div
              className={`absolute top-4 left-1/2 w-full h-1 -z-10 ${
                index < currentStep ? "bg-blue-600" : "bg-gray-300"
              }`}
            />
          )}
          <span className="mt-2 text-sm">{step}</span>
        </div>
      ))}
    </div>
  );
};

export default Stepper;

// <Stepper steps={["Details", "Review", "Confirm"]} currentStep={1} />;
