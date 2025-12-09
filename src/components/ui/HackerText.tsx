"use client";
import React, { useState, useEffect } from "react";

interface HackerTextProps {
  text: string;
  className?: string;
  speed?: number;
}

export function HackerText({
  text,
  className = "",
  speed = 40,
}: HackerTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&";

  useEffect(() => {
    let iterations = 0;
    const interval = setInterval(() => {
      setDisplayText((prev) =>
        prev
          .split("")
          .map((letter, index) => {
            if (index < iterations) {
              return text[index];
            }
            return letters[Math.floor(Math.random() * letters.length)];
          })
          .join(""),
      );

      if (iterations >= text.length) {
        clearInterval(interval);
      }

      iterations += 1 / 3;
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return <span className={`font-mono ${className}`}>{displayText}</span>;
}
