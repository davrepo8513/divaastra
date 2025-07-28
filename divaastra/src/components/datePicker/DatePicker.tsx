import React from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export interface DatePickerProps {
  label?: string;
  selected: Date | null;
  onChange: (date: Date | null) => void;
  placeholder?: string;
  error?: string;
  minDate?: Date;
  maxDate?: Date;
  showTimeSelect?: boolean;
  className?: string;
}

const DatePicker: React.FC<DatePickerProps> = ({
  label,
  selected,
  onChange,
  placeholder = "Select date",
  error,
  minDate,
  maxDate,
  showTimeSelect = false,
  className = "",
}) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      {label && (
        <label
          className={`text-sm font-medium ${
            error ? "text-red-500" : "text-gray-700"
          }`}
        >
          {label}
        </label>
      )}

      <ReactDatePicker
        selected={selected}
        onChange={onChange}
        placeholderText={placeholder}
        minDate={minDate}
        maxDate={maxDate}
        showTimeSelect={showTimeSelect}
        dateFormat={showTimeSelect ? "Pp" : "P"}
        className={`border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500 w-full ${
          error ? "border-red-500" : "border-gray-300"
        } ${className}`}
      />

      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
};

export default DatePicker;



// import React, { useState } from "react";
// import DatePicker from "@divaastra/components/common/DatePicker";

// const ExamplePage = () => {
//   const [date, setDate] = useState<Date | null>(null);

//   return (
//     <div className="p-5">
//       <DatePicker
//         label="Select Date"
//         selected={date}
//         onChange={(d) => setDate(d)}
//         minDate={new Date()}
//         error={!date ? "Date is required" : ""}
//       />
//     </div>
//   );
// };

// export default ExamplePage;
