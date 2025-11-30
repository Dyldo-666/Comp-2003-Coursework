// components/ui/Button.tsx
"use client";

import React from "react";
import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "ghost" | "outline" | "link";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  loading?: boolean;
}

export function Button({
  children,
  variant = "default",
  size = "md",
  fullWidth = false,
  loading = false,
  className,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-montserrat font-bold transition-all duration-200 rounded";

  const variants = {
    default: "bg-yellow-400 hover:bg-yellow-300 text-black",
    ghost: "bg-transparent border border-black hover:bg-yellow-100",
    outline:
      "bg-white border-2 border-black hover:bg-yellow-200 text-black",
    link: "text-yellow-500 underline hover:text-yellow-600 p-0",
  };

  const sizes = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-5 py-3 text-lg",
  };

  return (
    <button
      {...props}
      disabled={loading || props.disabled}
      className={clsx(
        base,
        variants[variant],
        sizes[size],
        fullWidth && "w-full",
        loading && "opacity-50 cursor-not-allowed",
        className
      )}
    >
      {loading ? "Loading..." : children}
    </button>
  );
}
