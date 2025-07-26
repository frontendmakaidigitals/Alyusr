// hooks/useInView.js or useInView.tsx
import { useRef, useEffect, useState } from "react";
import { useInView as framerUseInView } from "framer-motion";

export function useInView(options = { once: true, amount: 0.3 }) {
  const ref = useRef(null);
  const inView = framerUseInView(ref, options);
  const [hasBeenInView, setHasBeenInView] = useState(false);

  useEffect(() => {
    if (inView) setHasBeenInView(true);
  }, [inView]);

  return {
    ref,
    inView,
    hasBeenInView, // useful if you want to animate once
  };
}
