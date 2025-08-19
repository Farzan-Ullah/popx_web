import React from "react";

const InputWithLabel = ({
  label,
  type = "text",
  name,
  required = false,
  placeholder,
  value,
}) => {
  return (
    <div className="relative w-full mb-6 font-[Rubik]">
      <label
        htmlFor={name}
        className="absolute -top-2 left-3 px-1 text-sm"
        style={{ color: "#6C25FF", backgroundColor: "#F7F8F9" }}
      >
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        required={required}
        placeholder={placeholder}
        value={value}
        className="w-full border border-gray-300 rounded-md p-3 bg-transparent focus:outline-none focus:ring-2 focus:ring-purple-500 font-[Rubik] placeholder-gray-400"
      />
    </div>
  );
};

export default InputWithLabel;
