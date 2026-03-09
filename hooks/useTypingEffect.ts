"use client";

import { useState, useEffect } from "react";

export function useTypingEffect(isEnabled = true, delay = 100) {
  const [lineIndex, setLineIndex] = useState(0);

  useEffect(() => {
    if (!isEnabled) return;

    const timer = setTimeout(() => {
      setLineIndex((prev) => prev + 1);
    }, delay);

    return () => clearTimeout(timer);
  }, [lineIndex, isEnabled, delay]);

  return lineIndex;
}
