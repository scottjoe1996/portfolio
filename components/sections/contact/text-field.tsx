import React from "react";
import FieldWrapper from "./field-wrapper";

interface TextFieldProps {
  id: string;
  label: string;
  placeholder: string;
  type: React.HTMLInputTypeAttribute;
}

const TextField: React.FC<TextFieldProps> = ({
  id,
  label,
  placeholder,
  type,
}) => {
  return (
    <FieldWrapper id={id} label={label}>
      <input id={id} type={type} placeholder={placeholder} />
    </FieldWrapper>
  );
};

export default TextField;
