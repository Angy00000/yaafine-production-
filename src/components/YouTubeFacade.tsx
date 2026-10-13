"use client";

import Image from "next/image";
import { useState } from "react";
import { PlayIcon } from "./icons";

/**
 * Lecteur YouTube léger : on affiche d'abord la miniature, et le vrai lecteur
 * ne se charge qu'au clic. Le site reste rapide, surtout en 3G/4G.
 */
export function YouTubeFacade({ id, title }: { id: string; title: string }) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <iframe
        className="absolute inset-0 h-full w-full"
        src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      className="group absolute inset-0 h-full w-full"
      aria-label={`Lire la vidéo : ${title}`}
    >
      <Image
        src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
        alt=""
        fill
        sizes="(min-width: 768px) 50vw, 100vw"
        className="object-cover"
      />
      <span className="absolute inset-0 bg-ink/30 transition-colors group-hover:bg-ink/10" />
      <span className="absolute top-1/2 left-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-electric text-white transition-transform group-hover:scale-105">
        <PlayIcon className="ml-1 h-7 w-7" />
      </span>
    </button>
  );
}
