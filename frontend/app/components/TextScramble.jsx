"use client";

import { useRef } from "react";

const CHARS = "QWERTYUIOP";

export function TextScramble({ children, className = "", speed = 10 }) {
  const ref = useRef(null);
  const intervalRef = useRef(null);
  const isAnimating = useRef(false);

  const scramble = () => {
    const el = ref.current;
    if (!el || isAnimating.current) return;

    isAnimating.current = true;
    clearInterval(intervalRef.current);

    // ✅ Collect all text nodes inside children recursively
    const textNodes = [];
    const walk = (node) => {
      node.childNodes.forEach((child) => {
        if (
          child.nodeType === Node.TEXT_NODE &&
          child.textContent.trim() !== ""
        ) {
          textNodes.push(child);
        } else {
          walk(child);
        }
      });
    };
    walk(el);

    // Save original text content
    const originalTexts = textNodes.map((node) => node.textContent);
    let iteration = 0;
    const totalLength = originalTexts.reduce((acc, t) => acc + t.length, 0);

    intervalRef.current = setInterval(() => {
      let globalIndex = 0;

      textNodes.forEach((node, idx) => {
        const chars = node.textContent.split("");
        node.textContent = chars
          .map((char, i) => {
            if (char === " ") return " ";
            const index = globalIndex + i;
            if (index < iteration) return originalTexts[idx][i];
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("");
        globalIndex += chars.length;
      });

      iteration += 0.5;

      if (iteration >= totalLength) {
        clearInterval(intervalRef.current);
        // ✅ Restore original text nodes
        textNodes.forEach((node, idx) => {
          node.textContent = originalTexts[idx];
        });
        isAnimating.current = false;
      }
    }, speed);
  };

  return (
    <div
      ref={ref}
      onMouseEnter={scramble}
      className={`flex justify-between items-center gap-1 cursor-pointer select-none ${className}`}
    >
      {children}
    </div>
  );
}
