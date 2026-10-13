/**
 * Les trois prestations confirmées par le client.
 * N'ajoute pas de service sans son accord.
 * `image` : chemin dans /public (ex. "/media/services/evenementiel.jpg"), ou null tant
 * qu'aucune photo n'est fournie (un cadre « à remplacer » s'affiche alors).
 */

export type Service = {
  slug: "evenementiel" | "video" | "photo";
  title: string;
  summary: string;
  details: string[];
  image: string | null;
  imageAlt: string;
};

export const services: Service[] = [
  {
    slug: "evenementiel",
    title: "Couverture événementielle",
    summary:
      "Cérémonies, conférences, lancements, soirées : nous filmons et photographions votre événement du début à la fin, pour que rien ne vous échappe.",
    details: [
      "Captation vidéo et photo sur place",
      "Montage des moments forts",
      "Fichiers livrés prêts à partager",
    ],
    image: null,
    imageAlt: "Couverture d'un événement par Yaafiné Production",
  },
  {
    slug: "video",
    title: "Réalisation vidéo",
    summary:
      "Clips, films institutionnels, contenus pour les réseaux sociaux : de l'idée au montage final, nous racontons votre histoire en images.",
    details: [
      "Préparation et écriture du projet",
      "Tournage et réalisation",
      "Montage, étalonnage et son",
    ],
    image: null,
    imageAlt: "Tournage vidéo réalisé par Yaafiné Production",
  },
  {
    slug: "photo",
    title: "Photographie",
    summary:
      "Portraits, reportages, photos de produits ou d'entreprise : des images nettes et soignées, retouchées avant livraison.",
    details: [
      "Séances en extérieur ou en intérieur",
      "Retouche professionnelle",
      "Images haute définition",
    ],
    image: null,
    imageAlt: "Photographie réalisée par Yaafiné Production",
  },
];
