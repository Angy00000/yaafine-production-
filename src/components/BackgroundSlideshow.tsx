"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Slide = { src: string; position?: string };

const DURATION = 6500; // durée d'affichage de chaque image (ms)

/**
 * Fond fixe de tout le site : les images défilent en fondu enchaîné avec un zoom lent,
 * et restent visibles derrière toutes les sections pendant le défilement.
 * Mouvement coupé si le visiteur a demandé de réduire les animations.
 */
export function BackgroundSlideshow({ slides }: { slides: Slide[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (slides.length < 2 || paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      if (!document.hidden) setIndex((i) => (i + 1) % slides.length);
    }, DURATION);
    return () => window.clearInterval(id);
  }, [slides.length, paused]);

  if (slides.length === 0) {
    return <div className="fixed inset-0 z-0 bg-[radial-gradient(ellipse_at_70%_20%,#16357f_0%,#0a1a44_40%,#040a1c_80%)]" aria-hidden />;
  }

  return (
    <>
      <div className="fixed inset-0 z-0 overflow-hidden bg-ink" aria-hidden>
        {slides.map((s, i) => (
          <div
            key={s.src}
            className={`absolute inset-0 transition-opacity duration-[1600ms] ease-in-out ${i === index ? "opacity-100" : "opacity-0"}`}
          >
            <Image
              src={s.src}
              alt=""
              fill
              priority={i === 0}
              sizes="100vw"
              className={`hero-kenburns object-cover ${i === index ? "is-active" : ""}`}
              style={{ objectPosition: s.position ?? "center" }}
            />
          </div>
        ))}
        {/* Voile pour garder le texte lisible */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/35 to-ink/15" />
        <div className="absolute inset-0 hidden bg-gradient-to-r from-ink/60 via-ink/10 to-transparent md:block" />
      </div>

      {slides.length > 1 && (
        <button
          type="button"
          onClick={() => setPaused((p) => !p)}
          aria-label={paused ? "Relancer le diaporama de fond" : "Mettre en pause le diaporama de fond"}
          className="absolute top-[calc(100svh-4.25rem)] right-7 z-40 flex h-9 w-9 sm:right-10 items-center justify-center rounded-full border border-white/20 bg-ink/60 text-white/70 backdrop-blur-sm hover:text-paper"
        >
          {paused ? (
            <svg viewBox="0 0 24 24" fill="currentColor" className="ml-0.5 h-3.5 w-3.5" aria-hidden><path d="M8 5.5v13l11-6.5-11-6.5Z" /></svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5" aria-hidden><path d="M7 5h4v14H7zM13 5h4v14h-4z" /></svg>
          )}
        </button>
      )}
    </>
  );
}
