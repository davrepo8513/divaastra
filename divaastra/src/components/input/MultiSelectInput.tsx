import React, { useState } from "react";

export interface MultiSelectOption {
  label: string;
  value: string;
}

export interface MultiSelectInputProps {
  label?: string;
  options: MultiSelectOption[];
  selected: MultiSelectOption[];
  onChange: (selected: MultiSelectOption[]) => void;
  placeholder?: string;
  allowCustom?: boolean;
  error?: string;
  helperText?: string;
}

const MultiSelectInput: React.FC<MultiSelectInputProps> = ({
  label,
  options,
  selected,
  onChange,
  placeholder = "Select or type...",
  allowCustom = true,
  error,
  helperText,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const addOption = (option: MultiSelectOption) => {
    if (!selected.find((o) => o.value === option.value)) {
      onChange([...selected, option]);
    }
    setInputValue("");
    setIsOpen(false);
  };

  const removeOption = (value: string) => {
    onChange(selected.filter((o) => o.value !== value));
  };

  const handleCustomValue = () => {
    if (allowCustom && inputValue.trim() !== "") {
      addOption({ label: inputValue, value: inputValue });
    }
  };

  const filteredOptions = options.filter(
    (o) =>
      o.label.toLowerCase().includes(inputValue.toLowerCase()) &&
      !selected.find((s) => s.value === o.value)
  );

  return (
    <div className="flex flex-col gap-1 relative w-full">
      {label && (
        <label
          className={`text-sm font-medium ${
            error ? "text-red-500" : "text-gray-700"
          }`}
        >
          {label}
        </label>
      )}

      <div
        className={`border rounded-lg px-2 py-1 flex flex-wrap gap-1 items-center cursor-text ${
          error ? "border-red-500" : "border-gray-300"
        }`}
        onClick={() => setIsOpen(true)}
      >
        {selected.map((item) => (
          <div
            key={item.value}
            className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded flex items-center gap-1"
          >
            {item.label}
            <button
              type="button"
              className="text-xs font-bold text-red-500"
              onClick={() => removeOption(item.value)}
            >
              ✕
            </button>
          </div>
        ))}

        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onFocus={() => setIsOpen(true)}
          onBlur={() => setTimeout(() => setIsOpen(false), 150)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              handleCustomValue();
            }
          }}
          placeholder={placeholder}
          className="flex-1 bg-transparent outline-none py-1 text-sm"
        />
      </div>

      {isOpen && (
        <div className="absolute bg-white border rounded-md mt-1 max-h-40 overflow-y-auto w-full z-50 shadow">
          {filteredOptions.length > 0
            ? filteredOptions.map((option) => (
                <div
                  key={option.value}
                  onMouseDown={() => addOption(option)}
                  className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                >
                  {option.label}
                </div>
              ))
            : allowCustom &&
              inputValue.trim() && (
                <div
                  onMouseDown={handleCustomValue}
                  className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm text-blue-600"
                >
                  Add "{inputValue}"
                </div>
              )}
        </div>
      )}

      {(helperText || error) && (
        <p
          className={`text-xs mt-1 ${error ? "text-red-500" : "text-gray-500"}`}
        >
          {error || helperText}
        </p>
      )}
    </div>
  );
};

export default MultiSelectInput;




// import React, { useState } from "react";
// import MultiSelectInput, {
//   MultiSelectOption,
// } from "./components/common/MultiSelectInput";

// const allSkills: MultiSelectOption[] = [
//   { label: "React", value: "react" },
//   { label: "Node.js", value: "node" },
//   { label: "Python", value: "python" },
// ];

// const App: React.FC = () => {
//   const [skills, setSkills] = useState<MultiSelectOption[]>([]);

//   return (
//     <div className="p-6 max-w-md mx-auto">
//       <MultiSelectInput
//         label="Skills"
//         options={allSkills}
//         selected={skills}
//         onChange={setSkills}
//         placeholder="Type or select skills"
//         helperText="Add multiple skills, press Enter to add custom"
//       />
//     </div>
//   );
// };

// export default App;
