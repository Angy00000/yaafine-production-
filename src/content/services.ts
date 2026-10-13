/**
 * Prestations de Yaafiné Production (confirmées par le client et ses flyers).
 * `image` : chemin dans /public, ou null (un cadre « à remplacer » s'affiche).
 * `imagePosition` : partie de la photo à garder visible au recadrage.
 */

export type ServiceSlug = "evenementiel" | "video" | "photo" | "decoration";

export type Service = {
  slug: ServiceSlug;
  title: string;
  summary: string;
  details: string[];
  image: string | null;
  imagePosition?: string;
  imageAlt: string;
};

export const services: Service[] = [
  {
    slug: "evenementiel",
    title: "Couverture événementielle",
    summary:
      "Cérémonies, tournois, lancements, soirées : nous filmons et photographions votre événement du début à la fin, pour que rien ne vous échappe.",
    details: [
      "Captation vidéo et photo sur place",
      "Montage des moments forts",
      "Fichiers livrés prêts à partager",
    ],
    image: "/media/photos/foot-remise-trophee.webp",
    imagePosition: "50% 40%",
    imageAlt: "Remise du trophée au capitaine lors d'un tournoi couvert par Yaafiné Production",
  },
  {
    slug: "video",
    title: "Réalisation vidéo",
    summary:
      "Clips, films d'événements, contenus pour les réseaux sociaux : de l'idée au montage final, nous racontons votre histoire en images. Nos vidéos sont diffusées sur Yaafiné TV.",
    details: [
      "Préparation et écriture du projet",
      "Tournage et réalisation",
      "Montage, étalonnage et son",
    ],
    image: "/media/photos/foot-celebration-trophee.webp",
    imagePosition: "50% 35%",
    imageAlt: "Joueurs et supporters célébrant la victoire autour du trophée, de nuit",
  },
  {
    slug: "photo",
    title: "Photographie",
    summary:
      "Portraits, cérémonies, reportages : des images nettes et soignées, retouchées avant livraison.",
    details: [
      "Séances en extérieur ou en intérieur",
      "Retouche professionnelle",
      "Images haute définition",
    ],
    image: "/media/photos/portrait-ceremonie-1.webp",
    imagePosition: "50% 22%",
    imageAlt: "Portrait d'une invitée en tenue de cérémonie, mains ornées de henné",
  },
  {
    slug: "decoration",
    title: "Décoration d'événements",
    summary:
      "Mariage, baptême, anniversaire, cérémonie : nous habillons vos lieux en style traditionnel, moderne ou contemporain, pour des moments inoubliables.",
    details: [
      "Décoration de salles et décors de cérémonie",
      "Tentes et chapiteaux",
      "Tables et chaises",
      "Compositions florales",
    ],
    image: "/media/photos/deco-moderne.webp",
    imagePosition: "50% 45%",
    imageAlt: "Décoration de style moderne : salon bas, tissus wax, vanneries et chemin de table doré",
  },
];
