import React from "react";

export function SectionTitle({
  children,
  subtitle,
  center = true,
}: {
  children: React.ReactNode;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <div
      className={`mb-16 ${center ? "mx-auto max-w-3xl md:text-center" : ""} animate-fade-in-up`}
    >
      <h2 className="mb-6 bg-gradient-to-b from-white via-gray-200 to-gray-600 bg-clip-text text-4xl leading-[1.1] font-black tracking-tight text-transparent drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] md:text-6xl">
        {children}
      </h2>
      {subtitle && (
        <p className="mx-auto max-w-2xl text-lg leading-relaxed font-medium text-gray-400">
          {subtitle}
        </p>
      )}
    </div>
  );
}
