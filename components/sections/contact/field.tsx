"use client";

import React from "react";

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}

const Field: React.FC<FieldProps> = ({ id, label, placeholder }) => {
  return (
    <div className="mb-4">
      <label className="mb-2 block text-sm font-bold" htmlFor={id}>
        {label}
      </label>
      <input
        className="w-full appearance-none rounded-md border-2 px-3 py-2 leading-relaxed"
        id={id}
        type="email"
        placeholder={placeholder}
      />
    </div>
  );
};

export default Field;
