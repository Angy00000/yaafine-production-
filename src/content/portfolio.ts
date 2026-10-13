/**
 * Réalisations affichées sur le site.
 *  - Vidéo : identifiant YouTube (la partie après « youtu.be/ ») dans `youtubeId`.
 *  - Photo : fichier dans /public/media/photos/, chemin dans `src`.
 * `category` sert aux filtres de la galerie photo.
 * N'invente jamais de client ou de projet : laisse `client` vide si l'info manque.
 */

import type { ServiceSlug } from "./services";

export type VideoItem = {
  id: string;
  /** Titre affiché sous la vidéo (laisser vide si inconnu) */
  title?: string;
  description?: string;
  client?: string;
  service?: ServiceSlug;
  youtubeId: string | null;
  demo: boolean;
};

export type PhotoCategory = "evenements" | "decoration" | "portraits";

export const photoCategories: { key: PhotoCategory; label: string }[] = [
  { key: "evenements", label: "Événements" },
  { key: "decoration", label: "Décoration" },
  { key: "portraits", label: "Portraits" },
];

export type PhotoItem = {
  id: string;
  src: string;
  alt: string;
  category: PhotoCategory;
  /** Format de l'image : paysage, portrait ou carré */
  orientation: "landscape" | "portrait" | "square";
};

/** Vidéos de la chaîne YouTube Yaafiné TV. La première est mise en avant. */
export const videos: VideoItem[] = [
  { id: "v1", youtubeId: "RdELqpsULCk", demo: false },
  { id: "v2", youtubeId: "pw7Qn99-OO8", demo: false },
  { id: "v3", youtubeId: "7nfRLi97nMc", demo: false },
  { id: "v4", youtubeId: "88CUg5bpIXw", demo: false },
  { id: "v5", youtubeId: "GFeDlc_4i0o", demo: false },
];

/** Ordre pensé pour alterner les sujets ; les 6 premières s'affichent sur l'accueil. */
export const photos: PhotoItem[] = [
  { id: "p1", src: "/media/photos/foot-celebration-trophee.webp", alt: "Joueurs et supporters soulevant le trophée, de nuit", category: "evenements", orientation: "landscape" },
  { id: "p2", src: "/media/photos/deco-moderne.webp", alt: "Décoration de style moderne avec tissus wax, vanneries et chemin de table doré", category: "decoration", orientation: "portrait" },
  { id: "p3", src: "/media/photos/portrait-ceremonie-2.webp", alt: "Invitée en tenue de cérémonie posant devant le panneau photo des mariés", category: "portraits", orientation: "portrait" },
  { id: "p4", src: "/media/photos/foot-joie-but.webp", alt: "Joueuses en jaune célébrant un but", category: "evenements", orientation: "landscape" },
  { id: "p5", src: "/media/photos/deco-traditionnel-2.webp", alt: "Table d'honneur en style traditionnel, tissu kente et corbeilles de fruits", category: "decoration", orientation: "landscape" },
  { id: "p6", src: "/media/photos/foot-remise-trophee.webp", alt: "Remise du trophée au capitaine de l'équipe en maillot Yaafiné TV", category: "evenements", orientation: "landscape" },
  { id: "p7", src: "/media/photos/portrait-ceremonie-1.webp", alt: "Portrait d'une invitée souriante, mains ornées de henné", category: "portraits", orientation: "portrait" },
  { id: "p8", src: "/media/photos/foot-finale-7e-edition.webp", alt: "L'équipe Yaafiné Production devant la banderole de la finale de la 7e édition du tournoi", category: "evenements", orientation: "landscape" },
  { id: "p9", src: "/media/photos/deco-traditionnel-1.webp", alt: "Décor traditionnel avec tentures kente et composition florale", category: "decoration", orientation: "landscape" },
  { id: "p10", src: "/media/photos/foot-equipe-plage.webp", alt: "Photo d'équipe sur le terrain en sable", category: "evenements", orientation: "landscape" },
  { id: "p11", src: "/media/photos/foot-table-trophees.webp", alt: "Table des trophées avant la finale", category: "evenements", orientation: "landscape" },
  { id: "p12", src: "/media/photos/foot-entree-joueurs.webp", alt: "Entrée des équipes avant le match", category: "evenements", orientation: "landscape" },
];
