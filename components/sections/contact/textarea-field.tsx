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
  error,
  ...rest
}) => {
  return (
    <FieldWrapper id={id} label={label} error={error}>
      <textarea
        className="resize-none align-bottom"
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
