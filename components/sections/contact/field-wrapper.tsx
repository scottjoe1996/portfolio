import React from "react";

interface FieldWrapperProps {
  id: string;
  label: string;
  error?: string;
}

const FieldWrapper: React.FC<React.PropsWithChildren<FieldWrapperProps>> = ({
  id,
  label,
  error,
  children,
}) => {
  const errorDescriptionId = `${id}-error`;

  const StyleChildren = React.Children.map(children, (child) => {
    if (
      React.isValidElement<React.InputHTMLAttributes<HTMLInputElement>>(child)
    ) {
      return React.cloneElement(child, {
        className: `${child.props.className ?? ""} w-full appearance-none rounded-md border-2 bg-white px-3 py-2 leading-relaxed ${error ? "border-red-600" : ""} focus:border-primary focus:outline-2 focus:outline-primary`,
        "aria-describedby": errorDescriptionId,
      });
    }
  });

  return (
    <div className="mb-4">
      <label className="outlin mb-2 block text-sm font-bold" htmlFor={id}>
        {label}
      </label>
      {StyleChildren}
      {error && (
        <p
          id={errorDescriptionId}
          className="mt-1 text-sm text-red-600 transition-[translate,opacity] duration-400 ease-in-out starting:-translate-y-1/2 starting:opacity-0"
        >
          {error}
        </p>
      )}
    </div>
  );
};

export default FieldWrapper;
