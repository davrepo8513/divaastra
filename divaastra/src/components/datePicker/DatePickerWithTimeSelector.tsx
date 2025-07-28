// import React from "react";
// import ReactDatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// type Mode = "single" | "range";

// export interface DatePickerProps {
//   label?: string;
//   mode?: Mode; // single or range
//   value: Date | null | [Date | null, Date | null];
//   onChange: (value: Date | [Date | null, Date | null] | null) => void;
//   placeholder?: string;
//   placeholderStart?: string;
//   placeholderEnd?: string;
//   error?: string;
//   minDate?: Date;
//   maxDate?: Date;
//   className?: string;
//   showTime?: boolean; // NEW: enable time selection
//   timeFormat?: string; // e.g. "HH:mm"
//   dateFormat?: string; // custom date format
// }

// const DatePicker: React.FC<DatePickerProps> = ({
//   label,
//   mode = "single",
//   value,
//   onChange,
//   placeholder = "Select date",
//   placeholderStart = "Start date",
//   placeholderEnd = "End date",
//   error,
//   minDate,
//   maxDate,
//   className = "",
//   showTime = false,
//   timeFormat = "HH:mm",
//   dateFormat = "P",
// }) => {
//   const isRange = mode === "range";
//   const startDate = isRange && Array.isArray(value) ? value[0] : null;
//   const endDate = isRange && Array.isArray(value) ? value[1] : null;

//   return (
//     <div className="flex flex-col gap-1 w-full">
//       {label && (
//         <label
//           className={`text-sm font-medium ${
//             error ? "text-red-500" : "text-gray-700"
//           }`}
//         >
//           {label}
//         </label>
//       )}

//       <ReactDatePicker
//         selected={!isRange && (value as Date | null)}
//         onChange={(date) => onChange(date as Date)}
//         selectsRange={isRange}
//         startDate={startDate}
//         endDate={endDate}
//         onChange={(update) => {
//           if (isRange) onChange(update as [Date | null, Date | null]);
//           else onChange(update as Date);
//         }}
//         placeholderText={
//           isRange ? `${placeholderStart} - ${placeholderEnd}` : placeholder
//         }
//         minDate={minDate}
//         maxDate={maxDate}
//         showTimeSelect={showTime}
//         timeFormat={timeFormat}
//         timeIntervals={15}
//         dateFormat={showTime ? `${dateFormat} ${timeFormat}` : dateFormat}
//         className={`border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500 w-full ${
//           error ? "border-red-500" : "border-gray-300"
//         } ${className}`}
//       />

//       {error && <p className="text-xs text-red-500">{error}</p>}
//     </div>
//   );
// };

// export default DatePicker;




// import React, { useState } from "react";
// import DatePicker from "@divaastra/components/common/DatePicker";

// const ExampleSingleTime = () => {
//   const [date, setDate] = useState<Date | null>(null);

//   return (
//     <div className="p-5">
//       <DatePicker
//         label="Pick a Date & Time"
//         mode="single"
//         value={date}
//         onChange={setDate}
//         showTime={true}
//       />
//     </div>
//   );
// };

// export default ExampleSingleTime;




// Date Range + Time Picker:
// import React, { useState } from "react";
// import DatePicker from "@divaastra/components/common/DatePicker";

// const ExampleRangeTime = () => {
//   const [range, setRange] = useState<[Date | null, Date | null]>([null, null]);

//   return (
//     <div className="p-5">
//       <DatePicker
//         label="Pick Date & Time Range"
//         mode="range"
//         value={range}
//         onChange={setRange}
//         showTime={true}
//         placeholderStart="From"
//         placeholderEnd="To"
//       />
//     </div>
//   );
// };

// export default ExampleRangeTime;
