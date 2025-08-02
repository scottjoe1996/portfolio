import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

import FieldWrapper from "./field-wrapper";

export interface BaseFieldProps extends Partial<UseFormRegisterReturn> {
  id: string;
  label: string;
  placeholder: string;
  autoComplete?: boolean;
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
  ...rest
}) => {
  return (
    <FieldWrapper id={id} label={label}>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete ? "on" : "off"}
        {...rest}
      />
    </FieldWrapper>
  );
};

export default TextField;
