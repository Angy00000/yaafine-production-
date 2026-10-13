"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { photoCategories, type PhotoCategory, type PhotoItem } from "@/content/portfolio";

const ratioOf = { landscape: "3/2", portrait: "4/5", square: "1/1" } as const;

/** Galerie photo avec filtres par catégorie et agrandissement au clic. */
export function PhotoGallery({ photos, filters = true }: { photos: PhotoItem[]; filters?: boolean }) {
  const [cat, setCat] = useState<PhotoCategory | "all">("all");
  const [open, setOpen] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const shown = cat === "all" ? photos : photos.filter((p) => p.category === cat);
  const present = photoCategories.filter((c) => photos.some((p) => p.category === c.key));

  const show = useCallback(
    (i: number) => {
      setOpen(i);
      const d = dialogRef.current;
      if (d && !d.open) d.showModal();
    },
    [],
  );
  const close = () => dialogRef.current?.close();
  const step = useCallback(
    (dir: 1 | -1) => setOpen((i) => (i === null ? i : (i + dir + shown.length) % shown.length)),
    [shown.length],
  );

  useEffect(() => {
    const d = dialogRef.current;
    if (!d) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    const onClose = () => setOpen(null);
    d.addEventListener("keydown", onKey);
    d.addEventListener("close", onClose);
    return () => {
      d.removeEventListener("keydown", onKey);
      d.removeEventListener("close", onClose);
    };
  }, [step]);

  const current = open !== null ? shown[open] : null;

  return (
    <div>
      {filters && present.length > 1 && (
        <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filtrer les photos">
          {[{ key: "all" as const, label: "Toutes" }, ...present].map((c) => (
            <button
              key={c.key}
              type="button"
              aria-pressed={cat === c.key}
              onClick={() => setCat(c.key)}
              className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
                cat === c.key ? "border-paper bg-paper text-ink" : "border-white/20 text-mist hover:border-white/50 hover:text-paper"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      )}

      {shown.length === 0 ? (
        <p className="rounded-sm border border-dashed border-white/20 p-8 text-center text-mist">Les photos arrivent bientôt.</p>
      ) : (
        <ul className="columns-2 gap-3 md:columns-3 md:gap-4">
          {shown.map((p, i) => (
            <li key={p.id} className="mb-3 break-inside-avoid md:mb-4">
              <button
                type="button"
                onClick={() => show(i)}
                className="group relative block w-full overflow-hidden bg-navy"
                style={{ aspectRatio: ratioOf[p.orientation] }}
                aria-label={`Agrandir : ${p.alt}`}
              >
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </button>
            </li>
          ))}
        </ul>
      )}

      <dialog
        ref={dialogRef}
        aria-label="Photo agrandie"
        onClick={(e) => e.target === e.currentTarget && close()}
        className="m-auto h-full max-h-none w-full max-w-none bg-ink p-0 text-paper backdrop:bg-black/80"
      >
        {current && (
          <div className="flex h-full flex-col items-center justify-center p-4 sm:p-10" onClick={(e) => e.target === e.currentTarget && close()}>
            <div className="relative h-[75vh] w-full max-w-5xl">
              <Image src={current.src} alt={current.alt} fill sizes="100vw" className="object-contain" />
            </div>
            <p className="mt-4 max-w-2xl text-center text-sm text-mist">{current.alt}</p>
            <div className="mt-4 flex items-center gap-3">
              <button type="button" onClick={() => step(-1)} className="rounded-full border border-white/25 px-4 py-2 text-sm hover:border-white" aria-label="Photo précédente">
                Précédente
              </button>
              <span className="text-sm text-mist tabular-nums">
                {(open ?? 0) + 1} / {shown.length}
              </span>
              <button type="button" onClick={() => step(1)} className="rounded-full border border-white/25 px-4 py-2 text-sm hover:border-white" aria-label="Photo suivante">
                Suivante
              </button>
            </div>
            <button
              type="button"
              onClick={close}
              className="absolute top-4 right-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-xl hover:border-white"
              aria-label="Fermer"
            >
              ×
            </button>
          </div>
        )}
      </dialog>
    </div>
  );
}
