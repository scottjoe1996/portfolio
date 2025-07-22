"use client";

import React from "react";

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
  type: React.HTMLInputTypeAttribute;
}

const Field: React.FC<FieldProps> = ({ id, label, placeholder, type }) => {
  return (
    <div className="mb-4">
      <label className="mb-2 block text-sm font-bold" htmlFor={id}>
        {label}
      </label>
      <input
        className="w-full appearance-none rounded-md border-2 bg-white px-3 py-2 leading-relaxed"
        id={id}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Field;
