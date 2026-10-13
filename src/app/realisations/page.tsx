import type { Metadata } from "next";
import { Portfolio } from "@/components/Portfolio";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Réalisations : vidéos et photos",
  description: `Vidéos et photos réalisées par ${site.name} : couverture d'événements, réalisation vidéo et photographie à Keur Massar et Dakar.`,
  alternates: { canonical: "/realisations" },
};

export default function RealisationsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 pt-32 pb-24 sm:px-6">
      <h1 className="display text-5xl sm:text-7xl">Réalisations</h1>
      <p className="mt-5 mb-12 max-w-xl text-mist sm:text-lg">
        Une sélection de nos vidéos et photos. Choisissez un onglet pour passer de l&apos;un à l&apos;autre.
      </p>
      <Portfolio />
    </div>
  );
}
