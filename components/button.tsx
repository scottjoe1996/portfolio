import React from "react";

import LoadingSpinner from "@/components/icons/loading-spinner";

import { Icon } from "./icons/icon";

type Size = "small" | "large";

interface ButtonProps {
  type?: HTMLButtonElement["type"];
  isLoading?: boolean;
  icon?: React.FC<Icon>;
  className?: string;
  size?: Size;
  onClick?: () => void;
}

const SIZE_STYLES: Record<Size, { iconSize: string; buttonClass: string }> = {
  small: { iconSize: "1rem", buttonClass: "text-sm font-medium" },
  large: { iconSize: "2rem", buttonClass: "text-xl" },
};

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  type,
  size = "small",
  isLoading = false,
  onClick,
  children,
  className,
  icon: Icon,
}) => {
  const sizeStyle = SIZE_STYLES[size];

  const handleClick = React.useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      if (onClick) {
        onClick();
      }

      event.currentTarget.blur();
    },
    [onClick],
  );

  return (
    <button
      type={type}
      className={`${className} ${sizeStyle.buttonClass} container-shadow bg-foreground focus:ring-primary flex items-center justify-between gap-2.5 rounded-md px-3 py-2.5 text-white hover:cursor-pointer hover:bg-zinc-800 focus:ring-4 focus:outline-none disabled:cursor-not-allowed disabled:bg-zinc-600`}
      disabled={isLoading}
      onClick={handleClick}
    >
      {isLoading ? (
        <LoadingSpinner size={sizeStyle.iconSize} />
      ) : (
        Icon && <Icon size={sizeStyle.iconSize} />
      )}
      {children}
    </button>
  );
};

export default Button;
