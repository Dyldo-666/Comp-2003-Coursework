// components/marketing/Slideshow.tsx
"use client";

import { Children, ReactNode } from "react";

interface SlideshowProps {
  activeKey: number;
  page?: number;      // kept for compatibility, not strictly needed
  direction?: number; // reserved if you want animations later
  children: ReactNode;
}

export function Slideshow({ activeKey, children }: SlideshowProps) {
  const items = Children.toArray(children);

  return (
    <div className="relative w-full overflow-hidden">
      {items.map((child, index) => (
        <div
          key={index}
          className={index === activeKey ? "block w-full" : "hidden w-full"}
        >
          {child}
        </div>
      ))}
    </div>
  );
}