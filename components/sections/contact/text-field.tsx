import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

import FieldWrapper from "./field-wrapper";

export interface BaseFieldProps extends Partial<UseFormRegisterReturn> {
  id: string;
  label: string;
  placeholder: string;
  disabled?: boolean;
  autoComplete?: boolean;
  error?: string;
}

interface TextFieldProps extends BaseFieldProps {
  type: React.HTMLInputTypeAttribute;
}

const TextField: React.FC<TextFieldProps> = ({
  id,
  label,
  placeholder,
  type,
  autoComplete,
  disabled = false,
  error,
  ...rest
}) => {
  return (
    <FieldWrapper id={id} label={label} error={error}>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete ? "on" : "off"}
        disabled={disabled}
        {...rest}
      />
    </FieldWrapper>
  );
};

export default TextField;
