import React from "react";

export default function InputLabel({ name, type, placeholder, onChange }) {
  return (
    <div className="mb-5">
      <label
        htmlFor={name}
        className="block mb-2.5 text-sm font-medium text-heading capitalize"
      >
        {name}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        className="bg-white border text-black rounded-lg block w-full px-3 py-2.5"
        placeholder={placeholder}
        onChange={onChange}
        required
      />
    </div>
  );
}
