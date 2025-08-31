import React from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export interface DateRangePickerProps {
  label?: string;
  startDate: Date | null;
  endDate: Date | null;
  onChange: (dates: [Date | null, Date | null]) => void;
  placeholderStart?: string;
  placeholderEnd?: string;
  error?: string;
  minDate?: Date;
  maxDate?: Date;
  className?: string;
}

const DateRangePicker: React.FC<DateRangePickerProps> = ({
  label,
  startDate,
  endDate,
  onChange,
  placeholderStart = "Start date",
  placeholderEnd = "End date",
  error,
  minDate,
  maxDate,
  className = "",
}) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      {label && (
        <label className={`text-sm font-medium ${error ? "text-red-500" : "text-gray-700"}`}>
          {label}
        </label>
      )}

      <ReactDatePicker
        selectsRange
        startDate={startDate}
        endDate={endDate}
        onChange={(update) => onChange(update as [Date | null, Date | null])}
        placeholderText={`${placeholderStart} - ${placeholderEnd}`}
        minDate={minDate}
        maxDate={maxDate}
        dateFormat="P"
        className={`border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500 w-full ${
          error ? "border-red-500" : "border-gray-300"
        } ${className}`}
      />

      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
};

export default DateRangePicker;

// import React, { useState } from "react";
// import DateRangePicker from "@shieldspire/components/common/DateRangePicker";

// const ExamplePage = () => {
//   const [dates, setDates] = useState<[Date | null, Date | null]>([null, null]);

//   return (
//     <div className="p-5">
//       <DateRangePicker
//         label="Select Date Range"
//         startDate={dates[0]}
//         endDate={dates[1]}
//         onChange={setDates}
//         minDate={new Date()}
//         error={!dates[0] || !dates[1] ? "Date range is required" : ""}
//       />
//     </div>
//   );
// };

// export default ExamplePage;
