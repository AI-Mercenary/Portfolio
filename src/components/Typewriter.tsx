"use client";
import { useEffect, useState } from "react";

export function Typewriter({ text, className, style, speed = 18, startDelay = 400, cursorColor = "#E8192C" }:
  { text: string; className?: string; style?: React.CSSProperties; speed?: number; startDelay?: number; cursorColor?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        setCount(prev => {
          if (prev >= text.length) {
            clearInterval(interval);
            return prev;
          }
          return prev + 1;
        });
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, speed, startDelay]);

  return (
    <p className={className} style={style}>
      {text.slice(0, count)}
      {count < text.length && <span className="inline-block w-[2px] h-[1em] align-middle ml-0.5 animate-pulse" style={{ background: cursorColor }} />}
    </p>
  );
}
