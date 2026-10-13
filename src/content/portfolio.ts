/**
 * Réalisations affichées sur le site.
 *
 * Les entrées avec `demo: true` sont des EXEMPLES : elles s'affichent avec la mention
 * « Exemple — à remplacer ». Pour publier une vraie réalisation :
 *  - Vidéo : colle l'identifiant YouTube (la partie après « v= » ou « youtu.be/ »)
 *    dans `youtubeId`, mets un vrai titre et passe `demo` à false.
 *  - Photo : dépose le fichier dans /public/media/photos/ et indique son chemin
 *    dans `src` (ex. "/media/photos/ceremonie-01.jpg"), puis `demo: false`.
 * N'invente jamais de client ou de projet : laisse `client` vide si l'info manque.
 */

export type VideoItem = {
  id: string;
  /** Titre affiché sous la vidéo (laisser vide si inconnu) */
  title?: string;
  description?: string;
  client?: string;
  service?: "evenementiel" | "video" | "photo";
  youtubeId: string | null;
  demo: boolean;
};

export type PhotoItem = {
  id: string;
  title: string;
  src: string | null;
  alt: string;
  service: "evenementiel" | "video" | "photo";
  /** Format de l'image : paysage, portrait ou carré */
  orientation: "landscape" | "portrait" | "square";
  demo: boolean;
};

/** Vidéos de la chaîne YouTube Yaafiné TV. La première est mise en avant. */
export const videos: VideoItem[] = [
  { id: "v1", youtubeId: "RdELqpsULCk", demo: false },
  { id: "v2", youtubeId: "pw7Qn99-OO8", demo: false },
  { id: "v3", youtubeId: "7nfRLi97nMc", demo: false },
  { id: "v4", youtubeId: "88CUg5bpIXw", demo: false },
  { id: "v5", youtubeId: "GFeDlc_4i0o", demo: false },
];

export const photos: PhotoItem[] = [
  { id: "p1", title: "Photo d'exemple", src: null, alt: "Emplacement photo à remplacer", service: "photo", orientation: "portrait", demo: true },
  { id: "p2", title: "Photo d'exemple", src: null, alt: "Emplacement photo à remplacer", service: "evenementiel", orientation: "landscape", demo: true },
  { id: "p3", title: "Photo d'exemple", src: null, alt: "Emplacement photo à remplacer", service: "photo", orientation: "square", demo: true },
  { id: "p4", title: "Photo d'exemple", src: null, alt: "Emplacement photo à remplacer", service: "evenementiel", orientation: "landscape", demo: true },
  { id: "p5", title: "Photo d'exemple", src: null, alt: "Emplacement photo à remplacer", service: "photo", orientation: "portrait", demo: true },
  { id: "p6", title: "Photo d'exemple", src: null, alt: "Emplacement photo à remplacer", service: "video", orientation: "landscape", demo: true },
];
