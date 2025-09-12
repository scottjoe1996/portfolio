import React from "react";

import { Icon } from "./icon";

const LoadingSpinner: React.FC<Icon> = ({ size = "1rem", className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      height={size}
      className={className}
    >
      <title id="loading-spinner-title">Loading spinner</title>
      <desc id="loading-spinner-description">
        A spinning loading indicator.
      </desc>
      <g id="loading-spinner">
        <circle
          cx="50"
          cy="50"
          r="40"
          strokeWidth="18"
          className="stroke-zinc-500"
          fill="none"
        />
        <path
          d="M 26.489 17.64 A 40 40 0 0 1 73.511 17.64"
          fill="none"
          strokeWidth="18"
          className="stroke-zinc-200"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 50 50"
            to="360 50 50"
            dur="1.3s"
            repeatCount="indefinite"
          />
        </path>
      </g>
    </svg>
  );
};

export default LoadingSpinner;
