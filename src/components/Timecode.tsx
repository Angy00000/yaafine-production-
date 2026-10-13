"use client";

import { useEffect, useState } from "react";

/** Compteur façon caméra (HH:MM:SS:images) qui tourne depuis l'ouverture de la page. */
export function Timecode() {
  const [frames, setFrames] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const start = performance.now();
    const id = window.setInterval(() => {
      setFrames(Math.floor(((performance.now() - start) / 1000) * 25));
    }, 40);
    return () => window.clearInterval(id);
  }, []);

  const pad = (n: number) => String(n).padStart(2, "0");
  const f = frames % 25;
  const s = Math.floor(frames / 25);
  const text = `${pad(Math.floor(s / 3600))}:${pad(Math.floor(s / 60) % 60)}:${pad(s % 60)}:${pad(f)}`;

  return (
    <span aria-hidden className="tabular-nums">
      {text}
    </span>
  );
}
