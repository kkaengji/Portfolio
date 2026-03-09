"use client";

import { ReactNode } from "react";
import { useTypingEffect } from "@/hooks/useTypingEffect";

interface TypingAnimationProps {
  children: ReactNode[];
  delay?: number;
}

export default function TypingAnimation({
  children,
  delay = 450,
}: TypingAnimationProps) {
  const lineIndex = useTypingEffect(true, delay);

  return (
    <>
      {children.map((child, index) => (
        <div
          key={index}
          className={`type-line ${index < lineIndex ? "visible" : ""}`}
          style={{
            opacity: index < lineIndex ? 1 : 0,
            animation: index < lineIndex ? undefined : "none",
          }}
        >
          {child}
        </div>
      ))}
    </>
  );
}
