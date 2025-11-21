// src/components/ui/Logo.tsx
import React from "react";

export function Logo() {
  return (
    <div className="flex items-center gap-3">
      {/* Ícone do Saturno Animado (SVG Puro) */}
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="animate-float h-10 w-10 sm:h-12 sm:w-12"
      >
        <defs>
          <linearGradient id="planetGrad" x1="0" y1="0" x2="100" y2="100">
            <stop offset="0%" stopColor="#6366f1" /> {/* Indigo */}
            <stop offset="100%" stopColor="#a855f7" /> {/* Purple */}
          </linearGradient>
          <linearGradient id="ringGrad" x1="0" y1="0" x2="100" y2="100">
            <stop offset="0%" stopColor="#06B6D4" /> {/* Cyan */}
            <stop offset="100%" stopColor="#818cf8" /> {/* Indigo Light */}
          </linearGradient>
        </defs>

        {/* Planeta */}
        <circle cx="50" cy="50" r="30" fill="url(#planetGrad)" />

        {/* Anéis */}
        <ellipse
          cx="50"
          cy="50"
          rx="45"
          ry="12"
          stroke="url(#ringGrad)"
          strokeWidth="6"
          transform="rotate(-20 50 50)"
        />
      </svg>

      {/* Texto da Logo */}
      <div className="flex flex-col">
        <span className="font-mono text-xl leading-none font-extrabold tracking-tight text-white sm:text-2xl">
          HORIZON
        </span>
        <span className="text-[10px] font-semibold tracking-[0.3em] text-cyan-400 uppercase sm:text-xs">
          SECURE
        </span>
      </div>
    </div>
  );
}
