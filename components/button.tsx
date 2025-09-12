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

const SIZE_STYLES: Record<
  Size,
  {
    icon: { size: string; className?: string };
    buttonClass: string;
    childrenClass?: string;
  }
> = {
  small: { icon: { size: "1rem" }, buttonClass: "text-sm font-medium" },
  large: {
    icon: { size: "2rem" },
    buttonClass: "text-xl",
    childrenClass: "px-3",
  },
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
        <LoadingSpinner
          size={sizeStyle.icon.size}
          className={sizeStyle.icon.className}
        />
      ) : (
        Icon && (
          <Icon
            size={sizeStyle.icon.size}
            className={sizeStyle.icon.className}
          />
        )
      )}
      <span className={sizeStyle.childrenClass}>{children}</span>
    </button>
  );
};

export default Button;
