import { useEffect, useRef, useState } from "react";

export const mapSimulation = (routeData) => {
  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const timeoutRef = useRef(null);

  const step = () => {
    if (index >= routeData.length - 1) {
      setIsPlaying(false);
      return;
    }

    const current = routeData[index];
    const next = routeData[index + 1];

    if (!current || !next) return;

    // ⏱️ Calculate timestamp difference
    const t1 = new Date(current.timestamp).getTime();
    const t2 = new Date(next.timestamp).getTime();
    const delay = Math.max(t2 - t1, 1000); // fallback minimum 1s

    // Schedule next move
    timeoutRef.current = setTimeout(() => {
      setIndex((prev) => prev + 1);
    }, delay);
  };

  useEffect(() => {
    if (isPlaying) {
      if (index < routeData.length - 1) {
        step();
      } else {
        setIsPlaying(false);
      }
    }

    return () => clearTimeout(timeoutRef.current);
  }, [isPlaying, index, routeData.length]);

  useEffect(() => {
    setIndex(0);
    setIsPlaying(false);
    clearTimeout(timeoutRef.current);
  }, [routeData]);

  const togglePlay = () => setIsPlaying((prev) => !prev);

  const reset = () => {
    clearTimeout(timeoutRef.current);
    setIndex(0);
    setIsPlaying(false);
  };

  return {
    index,
    isPlaying,
    togglePlay,
    reset,
  };
};
