import React from "react";

interface FieldWrapperProps {
  id: string;
  label: string;
}

const FieldWrapper: React.FC<React.PropsWithChildren<FieldWrapperProps>> = ({
  id,
  label,
  children,
}) => {
  const StyleChildren = React.Children.map(children, (child) => {
    if (React.isValidElement<HTMLElement>(child)) {
      return React.cloneElement(child, {
        className: `${child.props.className} w-full appearance-none rounded-md border-2 bg-white px-3 py-2 leading-relaxed`,
      });
    }
  });

  return (
    <div className="mb-4">
      <label className="mb-2 block text-sm font-bold" htmlFor={id}>
        {label}
      </label>
      {StyleChildren}
    </div>
  );
};

export default FieldWrapper;
