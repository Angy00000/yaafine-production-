"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Slide = { src: string; position?: string };

const DURATION = 6500; // durée d'affichage de chaque image (ms)

/**
 * Fond de l'accueil : les images défilent en fondu enchaîné, avec un zoom lent.
 * Mouvement désactivé si le visiteur a demandé de réduire les animations.
 */
export function HeroSlideshow({ slides }: { slides: Slide[] }) {
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

  return (
    <>
      <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden>
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
        <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/35 to-ink/10" />
        <div className="absolute inset-0 hidden bg-gradient-to-r from-ink/60 via-ink/10 to-transparent md:block" />
      </div>

      {slides.length > 1 && (
        <div className="absolute right-5 bottom-6 z-10 flex items-center gap-2 sm:right-8 sm:bottom-10">
          {slides.map((s, i) => (
            <button
              key={s.src}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Afficher l'image ${i + 1} sur ${slides.length}`}
              aria-current={i === index}
              className="group flex h-6 items-center"
            >
              <span
                className={`block h-0.5 rounded-full transition-all duration-500 ${
                  i === index ? "w-8 bg-paper" : "w-4 bg-white/40 group-hover:bg-white/70"
                }`}
              />
            </button>
          ))}
          <button
            type="button"
            onClick={() => setPaused((p) => !p)}
            aria-label={paused ? "Relancer le diaporama" : "Mettre le diaporama en pause"}
            className="ml-1 flex h-6 w-6 items-center justify-center text-white/60 hover:text-paper"
          >
            {paused ? (
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5" aria-hidden><path d="M8 5.5v13l11-6.5-11-6.5Z" /></svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5" aria-hidden><path d="M7 5h4v14H7zM13 5h4v14h-4z" /></svg>
            )}
          </button>
        </div>
      )}
    </>
  );
}
