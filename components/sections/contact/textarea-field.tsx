import React from "react";
import FieldWrapper from "./field-wrapper";

interface TextareaFieldProps {
  id: string;
  label: string;
  placeholder: string;
  rows: number;
}

const TextareaField: React.FC<TextareaFieldProps> = ({
  id,
  label,
  placeholder,
  rows,
}) => {
  return (
    <FieldWrapper id={id} label={label}>
      <textarea
        className="resize-none"
        id={id}
        placeholder={placeholder}
        rows={rows}
      />
    </FieldWrapper>
  );
};

export default TextareaField;
