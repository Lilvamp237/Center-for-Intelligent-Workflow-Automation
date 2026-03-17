"use client";

import { useEffect, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*<>/\\|[]{}";

interface TextScrambleProps {
  text: string;
  className?: string;
  delay?: number;
}

export default function TextScramble({ text, className = "", delay = 0 }: TextScrambleProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isScrambling, setIsScrambling] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsScrambling(true);
      let frame = 0;
      const totalFrames = 28;
      const charsPerFrame = text.length / totalFrames;

      const interval = setInterval(() => {
        const revealedCount = Math.floor(frame * charsPerFrame);
        setDisplayText(
          text
            .split("")
            .map((char, idx) => {
              if (char === " ") return " ";
              if (idx < revealedCount) return char;
              return CHARS[Math.floor(Math.random() * CHARS.length)];
            })
            .join("")
        );

        frame++;
        if (frame > totalFrames) {
          setDisplayText(text);
          setIsScrambling(false);
          clearInterval(interval);
        }
      }, 38);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, delay]);

  return (
    <span
      className={`${className} ${isScrambling ? "font-mono" : ""}`}
      aria-label={text}
    >
      {displayText}
    </span>
  );
}
