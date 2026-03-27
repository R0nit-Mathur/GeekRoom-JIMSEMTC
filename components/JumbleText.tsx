"use client";
import { useEffect, useState } from "react";

const CHARS = "!@#$%^&*()_+{}:|<>?~ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export default function JumbleText({ text, trigger }: { text: string; trigger: boolean }) {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    if (!trigger) {
      setDisplayText("");
      return;
    }
    let iteration = 0;
    let interval: NodeJS.Timeout | null = null;

    interval = setInterval(() => {
      setDisplayText((prev) =>
        text
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return text[index];
            }
            if (text[index] === " ") return " ";
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("")
      );
      if (iteration >= text.length) {
        if (interval) clearInterval(interval);
      }
      iteration += 1 / 4;
    }, 40);

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [text, trigger]);

  return (
    <span className={!trigger ? "opacity-0" : "opacity-100"}>
      {trigger ? displayText : text}
    </span>
  );
}
