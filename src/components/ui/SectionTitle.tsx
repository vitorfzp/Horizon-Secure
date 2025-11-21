import React from 'react';

export function SectionTitle({ children, subtitle, center = true }: { children: React.ReactNode, subtitle?: string, center?: boolean }) {
  return (
    <div className={`mb-16 ${center ? 'md:text-center max-w-3xl mx-auto' : ''} animate-fade-in-up`}>
      <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-600 mb-6 tracking-tight leading-[1.1] drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
        {children}
      </h2>
      {subtitle && (
        <p className="text-gray-400 text-lg leading-relaxed font-medium max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}