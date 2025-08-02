import React from "react";
import FieldWrapper from "./field-wrapper";
import { BaseFieldProps } from "./text-field";

interface TextareaFieldProps extends BaseFieldProps {
  rows: number;
}

const TextareaField: React.FC<TextareaFieldProps> = ({
  id,
  label,
  placeholder,
  rows,
  autoComplete,
  ...rest
}) => {
  return (
    <FieldWrapper id={id} label={label}>
      <textarea
        className="resize-none"
        id={id}
        placeholder={placeholder}
        autoComplete={autoComplete ? "on" : "off"}
        rows={rows}
        {...rest}
      />
    </FieldWrapper>
  );
};

export default TextareaField;
