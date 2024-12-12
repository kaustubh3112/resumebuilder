import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const CustomDatePicker = ({ selectedDate, onChange, minDate, maxDate }) => {
  const years = Array.from(
    { length: new Date().getFullYear() - 1990 + 1 },
    (_, i) => 1990 + i
  );
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div className="relative inline-block w-full">
      <DatePicker
        renderCustomHeader={({
          date,
          changeYear,
          changeMonth,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
        }) => (
          <div className="flex justify-between items-center px-4 py-2 bg-gray-50 border border-gray-200 rounded-md">
            <button
              onClick={decreaseMonth}
              disabled={prevMonthButtonDisabled}
              className={`px-3 py-1 text-sm font-medium ${
                prevMonthButtonDisabled
                  ? "text-gray-400 cursor-not-allowed"
                  : "text-blue-600 hover:bg-blue-100"
              }`}
            >
              <BiChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              <select
                value={date.getFullYear()}
                onChange={({ target: { value } }) => changeYear(value)}
                className="border rounded px-2 py-1 text-sm"
              >
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>

              <select
                value={months[date.getMonth()]}
                onChange={({ target: { value } }) =>
                  changeMonth(months.indexOf(value))
                }
                className="border rounded px-2 py-1 text-sm"
              >
                {months.map((month) => (
                  <option key={month} value={month}>
                    {month}
                  </option>
                ))}
              </select>
            </div>

            <button
              onClick={increaseMonth}
              disabled={nextMonthButtonDisabled}
              className={`px-3 py-1 text-sm font-medium ${
                nextMonthButtonDisabled
                  ? "text-gray-400 cursor-not-allowed"
                  : "text-blue-600 hover:bg-blue-100"
              }`}
            >
              <BiChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
        selected={selectedDate}
        onChange={onChange}
        minDate={minDate}
        maxDate={maxDate}
        showIcon
        toggleCalendarOnIconClick
        popperPlacement="top-end"
        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default CustomDatePicker;
