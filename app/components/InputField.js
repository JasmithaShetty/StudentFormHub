import React from "react";

export default function InputField({ value, onChange, type, placeholder }) {
  return (
    <div className="w-full mb-4">
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 shadow focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
      />
    </div>
  );
}
