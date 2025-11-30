// components/marketing/SlideshowItem.tsx
import { ReactNode } from "react";

export interface SlideshowItemProps {
  children?: ReactNode; // optional to fix the TS error
}

export function SlideshowItem({ children }: SlideshowItemProps) {
  return <div className="w-full h-full">{children}</div>;
}
