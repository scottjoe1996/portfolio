import React from "react";

import Email from "@/components/icons/email";
import LoadingSpinner from "@/components/icons/loading-spinner";

interface ButtonProps {
  type?: HTMLButtonElement["type"];
  isLoading?: boolean;
  icon?: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  type,
  isLoading = false,
  onClick,
  children,
  icon,
}) => {
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
      className="container-shadow bg-foreground focus:ring-primary flex items-center justify-between gap-2.5 rounded-md px-3 py-2.5 text-sm font-medium text-white hover:cursor-pointer hover:bg-zinc-800 focus:ring-4 focus:outline-none disabled:cursor-not-allowed disabled:bg-zinc-600"
      disabled={isLoading}
      onClick={handleClick}
    >
      {isLoading ? <LoadingSpinner size="1rem" /> : icon}
      {children}
    </button>
  );
};

export default Button;
