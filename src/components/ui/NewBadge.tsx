import React from "react";

export function NewBadge({ text }: { text: string }) {
  return (
    <div className="animate-fade-in-up mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/30 px-4 py-2 text-xs text-cyan-300 shadow-[0_0_20px_rgba(6,182,212,0.2)] backdrop-blur-md">
      <span className="relative flex h-2.5 w-2.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75"></span>
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-500"></span>
      </span>
      <span className="font-mono tracking-wider uppercase">{text}</span>
    </div>
  );
}
