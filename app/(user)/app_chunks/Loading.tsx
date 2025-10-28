"use client";
import React, { useState, useEffect, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

const Loading = () => {
  return (
    <Suspense fallback={<div />}>
      <Loader />
    </Suspense>
  );
};

export default Loading;

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const query = searchParams.get("name");

  useEffect(() => {
    console.log(isLoading, "rendered");

    setIsLoading(true);
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [pathname, query]);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          className="top-0 left-0 flex items-center justify-center h-screen w-screen fixed shadow-lg bg-indigo-50 z-[9999]"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.5 }}
        >
          <svg
            className="container2"
            height="100"
            viewBox="0 0 40 40"
            width="100"
          >
            <circle
              className="track"
              cx="20"
              cy="20"
              fill="none"
              pathLength="100"
              r="17.5"
              strokeWidth="1.8px"
            />
            <circle
              className="car"
              cx="20"
              cy="20"
              fill="none"
              pathLength="100"
              r="17.5"
              strokeWidth="1.8px"
            />
          </svg>

          <style>
            {`
  .container2 {
    --uib-size: 100px;
    --uib-color: black;
    --uib-speed: 0.5s;
    --uib-bg-opacity: 0.1;
    height: var(--uib-size);
    width: var(--uib-size);
    transform-origin: center;
    animation: rotate var(--uib-speed) linear infinite;
    will-change: transform;
    overflow: visible;
  }

  .car {
    fill: none;
    stroke: var(--uib-color);
    stroke-dasharray: 25, 75;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    transition: stroke 0.3s ease;
  }

  .track {
    fill: none;
    stroke: var(--uib-color);
    opacity: var(--uib-bg-opacity);
    transition: stroke 0.3s ease;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
          `}
          </style>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
