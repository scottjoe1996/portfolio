"use client";

import React from "react";

import { Icon } from "./icon";

interface Coordinates {
  x: number;
  y: number;
}

const INITIAL_LEFT_EYE_POSITION: Coordinates = { x: 37.79, y: 46.13 };
const INITIAL_RIGHT_EYE_POSITION: Coordinates = { x: 71.13, y: 46.13 };

const RetroComputer: React.FC<Icon> = ({ size = "1rem" }) => {
  const [leftEyeCoordinates, setLeftEyeCoordinates] =
    React.useState<Coordinates>(INITIAL_LEFT_EYE_POSITION);
  const [rightEyeCoordinates, setRightEyeCoordinates] =
    React.useState<Coordinates>(INITIAL_RIGHT_EYE_POSITION);
  const rightEyeId = "right-eye";
  const leftEyeId = "left-eye";

  const getEyeMovement = React.useCallback(
    (event: MouseEvent, eyeId: string): { x: number; y: number } => {
      const totalX = window.innerWidth;
      const totalY = window.innerHeight;

      const eyeElement = document.getElementById(eyeId) as HTMLElement;
      const eyeElementRect = eyeElement.getBoundingClientRect();

      return {
        x: Math.min(((event.clientX - eyeElementRect.x) / totalX) * 5, 5),
        y: Math.min(((event.clientY - eyeElementRect.y) / totalY) * 10, 10),
      };
    },
    [],
  );

  React.useEffect(() => {
    const onMoveEvent = (event: MouseEvent) => {
      const leftEyeMovement = getEyeMovement(event, leftEyeId);
      const rightEyeMovement = getEyeMovement(event, rightEyeId);

      setLeftEyeCoordinates(() => ({
        x: INITIAL_LEFT_EYE_POSITION.x + rightEyeMovement.x,
        y: INITIAL_LEFT_EYE_POSITION.y + rightEyeMovement.y,
      }));
      setRightEyeCoordinates(() => ({
        x: INITIAL_RIGHT_EYE_POSITION.x + leftEyeMovement.x,
        y: INITIAL_RIGHT_EYE_POSITION.y + leftEyeMovement.y,
      }));
    };

    window.addEventListener("mousemove", onMoveEvent);
    return () => window.removeEventListener("mousemove", onMoveEvent);
  }, [getEyeMovement]);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100.59 100.59"
      height={size}
      aria-description="A retro computer who's screen has a nuetral face"
    >
      <g id="retro-computer-colour">
        <rect
          id="computer-case"
          className="fill-[#e1d5bd] stroke-[#11140e]"
          x=".29"
          y=".29"
          width="100"
          height="100"
          rx="14.7"
          ry="14.7"
        />
        <g id="screen">
          <rect
            id="screen-2"
            data-name="screen"
            className="fill-[lime]"
            x="16.96"
            y="16.96"
            width="66.67"
            height="66.67"
            rx="11.76"
            ry="11.76"
          />
          <path
            id="border"
            d="M73.5,14.43H27.08c-6.98,0-12.65,5.66-12.65,12.65v46.43c0,6.99,5.67,12.65,12.65,12.65h46.42c6.99,0,12.65-5.66,12.65-12.65V27.08c0-6.99-5.66-12.65-12.65-12.65ZM80.08,20.44s.05-.06.07-.09c.42-.54,1.13-1.38,1.48-1.45.18-.04.38-.02.52.11,1.13.99,1.68,2.14,2.24,3.53.14.34-.06.73-.42.81l-1.76.36c-.28.05-.55-.09-.66-.35-.35-.79-.82-1.52-1.38-2.16-.03-.03-.06-.06-.09-.1-.06-.09-.1-.21-.1-.33s.04-.24.1-.33ZM73.5,81.45H27.08c-4.38,0-7.95-3.56-7.95-7.94V27.08c0-4.38,3.57-7.94,7.95-7.94h46.42c4.39,0,7.95,3.56,7.95,7.94v46.43c0,4.38-3.56,7.94-7.95,7.94ZM85.35,72.58c0,2.45-.51,4.64-1.48,6.51-.15.29-.53.39-.81.22l-1.53-.89c-.28-.16-.36-.51-.22-.79.73-1.43,1.11-3.14,1.11-5.05v-32.7c0-.32.26-.59.59-.59h1.76c.32,0,.59.26.59.59v32.7ZM85.35,28.07v9.45c0,.32-.26.59-.59.59h-1.76c-.32,0-.59-.26-.59-.59v-9.49c.02-.89-.04-1.73-.19-2.52-.06-.32.14-.64.45-.7l1.73-.35c.32-.06.64.14.7.45.19,1.01.28,2.06.25,3.16Z"
          />
          <g id="face">
            <line
              id="mouth"
              className="fill-none stroke-[#11140e] stroke-4"
              x1="41.96"
              y1="66.96"
              x2="66.96"
              y2="66.96"
            />
            <circle
              id={rightEyeId}
              cx={rightEyeCoordinates.x}
              cy={rightEyeCoordinates.y}
              r="4.17"
            />
            <circle
              id={leftEyeId}
              cx={leftEyeCoordinates.x}
              cy={leftEyeCoordinates.y}
              r="4.17"
            />
          </g>
          <g id="screen-highlights">
            <path
              id="bottom-highlight"
              className="fill-[#11140e]"
              d="M84.76,39.29c.32,0,.59.26.59.59v32.7c0,2.44-.51,4.64-1.48,6.51-.15.29-.53.39-.81.22l-1.53-.89c-.28-.16-.37-.51-.22-.79.73-1.44,1.11-3.14,1.11-5.05v-32.7c0-.32.26-.59.59-.59h1.76Z"
            />
            <path
              id="middle-highlight"
              className="fill-[#11140e]"
              d="M85.35,28.08v9.45c0,.32-.26.59-.59.59h-1.76c-.32,0-.59-.26-.59-.59v-9.49c.02-.88-.04-1.73-.19-2.52-.06-.32.14-.64.46-.7l1.73-.35c.32-.06.63.14.7.45.19,1,.28,2.06.25,3.16Z"
            />
            <path
              id="top-highlight"
              className="fill-[#11140e]"
              d="M83.98,23.35l-1.76.36c-.28.05-.55-.09-.66-.35-.35-.79-.82-1.52-1.38-2.16-.03-.03-.06-.06-.09-.1-.06-.09-.1-.21-.1-.33s.04-.24.1-.33c.02-.04.05-.06.07-.09.42-.54,1.13-1.38,1.48-1.45.18-.04.38-.02.52.11,1.13.99,1.68,2.14,2.24,3.53.14.34-.06.73-.42.81Z"
            />
          </g>
        </g>
        <g id="buttons">
          <rect
            id="right-button"
            x="77.13"
            y="90.85"
            width="3.22"
            height="2.22"
            rx=".59"
            ry=".59"
          />
          <rect
            id="left-button"
            x="66.96"
            y="90.85"
            width="8.57"
            height="2.22"
            rx=".59"
            ry=".59"
          />
        </g>
        <path
          id="toggle-switch"
          d="M36.86,89.59h-15.35c-.65,0-1.25.26-1.68.69-.43.43-.69,1.02-.69,1.68,0,1.31,1.06,2.37,2.37,2.37h15.35c.65,0,1.25-.26,1.68-.69.43-.43.69-1.02.69-1.68,0-1.31-1.06-2.37-2.37-2.37ZM36.84,93.56c-.88,0-1.6-.72-1.6-1.61s.72-1.6,1.6-1.6,1.61.72,1.61,1.6-.72,1.61-1.61,1.61Z"
        />
      </g>
    </svg>
  );
};

export default RetroComputer;
