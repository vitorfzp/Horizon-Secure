import React from "react";
import { LucideIcon } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  icon?: LucideIcon;
}

export function Button({
  children,
  variant = "primary",
  className = "",
  icon: Icon,
  ...props
}: ButtonProps) {
  const base =
    "group relative px-6 py-3 rounded-lg text-sm font-bold tracking-wider transition-all duration-500 flex items-center justify-center gap-2 overflow-hidden cursor-pointer uppercase font-mono";

  const variants = {
    primary:
      "bg-white text-black hover:text-white border-2 border-transparent hover:border-white/50 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(99,102,241,0.6)] hover:bg-transparent before:absolute before:inset-0 before:bg-gradient-to-r before:from-indigo-600 before:to-purple-600 before:translate-y-full hover:before:translate-y-0 before:transition-transform before:duration-500 before:z-[-1]",
    secondary:
      "bg-transparent text-white border-2 border-white/20 hover:border-white/50 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] backdrop-blur-sm",
    ghost:
      "text-gray-400 hover:text-white transition-colors hover:bg-white/10 rounded-lg",
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {Icon && (
          <Icon
            size={16}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        )}
      </span>
    </button>
  );
}
