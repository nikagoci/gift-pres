import React from "react";

const Select = ({label, name, opt1, opt2, getName}) => {
  return (
    <div className="flex flex-col mb-4 gap-y-2">
      <label
        htmlFor={label}
        className="text-lg font-medium"
      >
        {name}
      </label>
      <select
        id={label}
        name={label}
        className="bg-gray-50 border border-gray-300 outline-none text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        {...getName(label)}
      >
        <option defaultValue>{opt1}</option>
        <option value="female">{opt2}</option>
      </select>
    </div>
  );
};

export default Select;
