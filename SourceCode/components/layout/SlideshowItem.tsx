// components/marketing/SlideshowItem.tsx
import { ReactNode } from "react";

interface SlideshowItemProps {
  children: ReactNode;
}

export function SlideshowItem({ children }: SlideshowItemProps) {
  return <div className="w-full">{children}</div>;
}
