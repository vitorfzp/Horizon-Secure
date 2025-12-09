"use client";
import React, { useEffect, useRef, useState } from "react";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

export function Reveal({ children, delay = 0, direction = "up" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const getTransform = () => {
    if (!isVisible) {
      if (direction === "up") return "translate-y-20";
      if (direction === "down") return "-translate-y-20";
      if (direction === "left") return "translate-x-20";
      if (direction === "right") return "-translate-x-20";
    }
    return "translate-0";
  };

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transform transition-all duration-1000 ease-out ${isVisible ? "opacity-100" : "opacity-0"} ${getTransform()}`}
    >
      {children}
    </div>
  );
}
