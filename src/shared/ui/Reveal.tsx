import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "../lib/cn";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delayMs?: number;
  threshold?: number;
  yOffset?: number;
};

export function Reveal({
  children,
  className,
  delayMs = 25,
  threshold = 0.18,
  yOffset = 28,
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const node = ref.current;

    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={cn(
        "transition-[opacity,transform,filter] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-[opacity,transform]",
        revealed ? "translate-y-0 opacity-100" : "opacity-0",
        className,
      )}
      style={{
        transform: revealed ? "translateY(0px)" : `translateY(${yOffset}px)`,
        transitionDelay: `${delayMs}ms`,
      }}
    >
      {children}
    </div>
  );
}
