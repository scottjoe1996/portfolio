import React from "react";

interface EmailProps {
  size: string;
}

const Email: React.FC<EmailProps> = ({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 197.64 187.75"
      height={size}
    >
      <title id="email-title">Paper plane</title>
      <g id="send-email">
        <path
          id="paper-plane"
          className="fill-zinc-50"
          d="M.53,90.67c19.07,10.05,38.13,20.09,57.2,30.14.34.18.76.15,1.07-.09l47.46-36.02-33.39,43.73c-.13.17-.21.39-.21.61l.02,57.72c0,.95,1.21,1.37,1.79.61l31.14-40.37c.3-.38.83-.5,1.26-.27,13.64,7.18,27.29,14.37,40.92,21.56.56.3,1.25,0,1.43-.61,16.12-55.45,32.25-110.92,48.37-166.39.24-.82-.6-1.54-1.37-1.19C131.01,29.69,65.8,59.28.59,88.88c-.76.34-.79,1.41-.05,1.8Z"
        />
      </g>
    </svg>
  );
};

export default Email;
