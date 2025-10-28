import React from "react";

const Spinner = () => {
  return (
    <>
      <svg
        className="loader-container"
        height="40"
        viewBox="0 0 40 40"
        width="40"
      >
        <circle
          className="loader-track"
          cx="20"
          cy="20"
          fill="none"
          pathLength="100"
          r="17.5"
          strokeWidth="5"
        />
        <circle
          className="loader-car"
          cx="20"
          cy="20"
          fill="none"
          pathLength="100"
          r="17.5"
          strokeWidth="5"
        />
      </svg>

      <style jsx>{`
        .loader-container {
          --uib-size: 40px;
          --uib-color: black;
          --uib-speed: 2s;
          --uib-bg-opacity: 0;
          height: var(--uib-size);
          width: var(--uib-size);
          transform-origin: center;
          animation: rotate var(--uib-speed) linear infinite;
          will-change: transform;
          overflow: visible;
        }

        .loader-car {
          fill: none;
          stroke: var(--uib-color);
          stroke-dasharray: 1, 200;
          stroke-dashoffset: 0;
          stroke-linecap: round;
          animation: stretch calc(var(--uib-speed) * 0.75) ease-in-out infinite;
          will-change: stroke-dasharray, stroke-dashoffset;
          transition: stroke 0.5s ease;
        }

        .loader-track {
          fill: none;
          stroke: var(--uib-color);
          opacity: var(--uib-bg-opacity);
          transition: stroke 0.5s ease;
        }

        @keyframes rotate {
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes stretch {
          0% {
            stroke-dasharray: 0, 150;
            stroke-dashoffset: 0;
          }
          50% {
            stroke-dasharray: 75, 150;
            stroke-dashoffset: -25;
          }
          100% {
            stroke-dashoffset: -100;
          }
        }
      `}</style>
    </>
  );
};

export default Spinner;
