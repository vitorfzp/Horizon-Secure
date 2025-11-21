import React from 'react';

export function NewBadge({ text }: { text: string }) {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-950/30 text-xs text-cyan-300 mb-8 animate-fade-in-up backdrop-blur-md shadow-[0_0_20px_rgba(6,182,212,0.2)]">
      <span className="relative flex h-2.5 w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
      </span>
      <span className="font-mono tracking-wider uppercase">{text}</span>
    </div>
  );
}