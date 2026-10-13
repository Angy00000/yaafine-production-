"use client";

import Link from "next/link";
import { useState } from "react";
import { photos, videos } from "@/content/portfolio";
import { services } from "@/content/services";
import { site } from "@/content/site";
import { MediaFrame } from "./MediaFrame";
import { YouTubeFacade } from "./YouTubeFacade";
import { PlayIcon } from "./icons";

const serviceName = (slug?: string) => services.find((s) => s.slug === slug)?.title ?? "";
const ratioOf = { landscape: "3/2", portrait: "4/5", square: "1/1" } as const;

type Tab = "videos" | "photos";

/** Galerie des réalisations, avec un onglet Vidéos et un onglet Photos. */
export function Portfolio({ limit, showMoreLink = false }: { limit?: number; showMoreLink?: boolean }) {
  const [tab, setTab] = useState<Tab>("videos");
  const youtube = site.socials.find((s) => s.label === "YouTube");
  const shownVideos = limit ? videos.slice(0, limit) : videos;
  const shownPhotos = limit ? photos.slice(0, limit * 2) : photos;

  const tabs: { key: Tab; label: string; count: number }[] = [
    { key: "videos", label: "Vidéos", count: videos.length },
    { key: "photos", label: "Photos", count: photos.length },
  ];

  return (
    <div>
      <div role="tablist" aria-label="Type de réalisation" className="inline-flex rounded-full border border-white/15 p-1">
        {tabs.map((t) => (
          <button
            key={t.key}
            role="tab"
            id={`tab-${t.key}`}
            aria-selected={tab === t.key}
            aria-controls={`panel-${t.key}`}
            onClick={() => setTab(t.key)}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
              tab === t.key ? "bg-paper text-ink" : "text-mist hover:text-paper"
            }`}
          >
            {t.label} <span className="opacity-60">({t.count})</span>
          </button>
        ))}
      </div>

      {tab === "videos" && (
        <div id="panel-videos" role="tabpanel" aria-labelledby="tab-videos" className="mt-10">
          {shownVideos.length === 0 ? (
            <Empty text="Les vidéos arrivent bientôt." />
          ) : (
            <ul className="grid gap-x-6 gap-y-10 md:grid-cols-2">
              {shownVideos.map((v, i) => (
                <li key={v.id} className={i === 0 && shownVideos.length % 2 === 1 ? "md:col-span-2" : ""}>
                  <div className="relative aspect-video overflow-hidden bg-navy">
                    {v.youtubeId ? (
                      <YouTubeFacade id={v.youtubeId} title={v.title || `Vidéo ${i + 1} de ${site.name}`} />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(circle_at_30%_25%,#1a3a8a_0%,#0a1a44_55%,#040a1c_100%)]">
                        <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/30 text-mist">
                          <PlayIcon className="ml-1 h-6 w-6" />
                        </span>
                      </div>
                    )}
                  </div>
                  {(v.title || v.service) && (
                    <div className="mt-3 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      {v.title && <h3 className="font-semibold">{v.title}</h3>}
                      {v.service && <span className="text-sm text-mist">{serviceName(v.service)}</span>}
                    </div>
                  )}
                  {v.description && <p className="mt-1 text-sm text-mist">{v.description}</p>}
                  {v.demo && <DemoBadge />}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      {tab === "photos" && (
        <div id="panel-photos" role="tabpanel" aria-labelledby="tab-photos" className="mt-10">
          {shownPhotos.length === 0 ? (
            <Empty text="Les photos arrivent bientôt." />
          ) : (
            <ul className="columns-2 gap-3 md:columns-3 md:gap-4">
              {shownPhotos.map((p) => (
                <li key={p.id} className="mb-3 break-inside-avoid md:mb-4">
                  <MediaFrame
                    src={p.src}
                    alt={p.alt}
                    ratio={ratioOf[p.orientation]}
                    sizes="(min-width: 768px) 33vw, 50vw"
                  />
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      <div className="mt-12 flex flex-wrap gap-3">
        {showMoreLink && (
          <Link
            href="/realisations"
            className="inline-block rounded-full border border-white/30 px-6 py-3 font-semibold transition-colors hover:border-white hover:bg-white/5"
          >
            Voir toutes les réalisations
          </Link>
        )}
        {youtube && (
          <a
            href={youtube.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 font-semibold transition-colors hover:border-white hover:bg-white/5"
          >
            <PlayIcon className="h-4 w-4" />
            Notre chaîne YouTube
          </a>
        )}
      </div>
    </div>
  );
}

function DemoBadge() {
  return <p className="mt-2 text-xs text-mist">Exemple — à remplacer par une vraie réalisation</p>;
}

function Empty({ text }: { text: string }) {
  return (
    <p className="rounded-sm border border-dashed border-white/20 p-8 text-center text-mist">
      {text}{" "}
      <Link href="/#contact" className="text-electric-2 underline underline-offset-4">
        Parlez-nous de votre projet
      </Link>
    </p>
  );
}
