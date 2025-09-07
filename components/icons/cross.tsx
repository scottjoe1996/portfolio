import React from "react";

interface CrossProps {
  size: string;
}

const Cross: React.FC<CrossProps> = ({ size }) => {
  return (
    <svg height={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
      <g id="cross">
        <line
          id="bottom-left-to-top-right"
          className="stroke-white stroke-20 [stroke-linecap:round]"
          x1="110"
          y1="10"
          x2="10"
          y2="110"
        />
        <line
          id="top-left-to-bottom-right"
          className="stroke-white stroke-20 [stroke-linecap:round]"
          x1="10"
          y1="10"
          x2="110"
          y2="110"
        />
      </g>
    </svg>
  );
};

export default Cross;
