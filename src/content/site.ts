/**
 * Coordonnées et informations générales de Yaafiné Production.
 * Toutes les infos affichées sur le site viennent d'ici : modifie ce fichier,
 * pas les composants.
 */

export const site = {
  name: "Yaafiné Production",
  shortName: "Yaafiné Prod",
  founder: "Elhadji Moussa Watt",
  city: "Keur Massar",
  region: "Dakar",
  country: "Sénégal",
  /**
   * Logo officiel : dépose le fichier dans /public (ex. /logo.svg ou /logo.png)
   * et indique son chemin ici. Tant que c'est null, le nom s'affiche en texte.
   */
  logo: "/logo.png" as string | null,
  /**
   * Diaporama de fond de tout le site (fondu enchaîné, reste fixe au défilement). Images dans /public/media/hero/.
   * `position` : partie de l'image à garder visible quand elle est recadrée
   * (ex. "center", "30% 50%"). Liste vide = fond bleu nuit uni.
   */
  heroSlides: [
    { src: "/media/hero/objectif.webp", position: "50% 55%" },
    { src: "/media/hero/clap-pellicule.webp", position: "30% 50%" },
    { src: "/media/hero/histoire-cinema.webp", position: "50% 35%" },
  ] as { src: string; position?: string }[],
  // Remplace par le vrai domaine dès qu'il existe (ex. https://yaafine.sn)
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://yaafine-production.vercel.app",
  description:
    "Yaafiné Production, label audiovisuel basé à Keur Massar : couverture événementielle, réalisation vidéo, photographie et décoration d'événements à Keur Massar et Dakar, Sénégal.",

  contact: {
    // Format international sans espaces ni « + », utilisé pour les liens WhatsApp
    whatsappPrimary: "221770593118",
    whatsappSecondary: "221779620568",
    whatsappPrimaryLabel: "+221 77 059 31 18",
    whatsappSecondaryLabel: "+221 77 962 05 68",
    /** Numéro indiqué sur les flyers (réservations) */
    phone: "221754422941",
    phoneLabel: "+221 75 442 29 41",
    email: "teleyaafine@gmail.com",
  },

  /**
   * Réseaux sociaux : ajoute uniquement des URL confirmées par le client.
   * Exemple : { label: "Instagram", href: "https://instagram.com/..." }
   */
  socials: [{ label: "YouTube", href: "https://www.youtube.com/@yaafinetv" }] as { label: string; href: string }[],
} as const;

export const nav = [
  { label: "Accueil", href: "/#accueil" },
  { label: "Services", href: "/#services" },
  { label: "Réalisations", href: "/realisations" },
  { label: "À propos", href: "/#a-propos" },
  { label: "Contact", href: "/#contact" },
];

/** Lien WhatsApp avec message prérempli. */
export function whatsappLink(message?: string, number: string = site.contact.whatsappPrimary) {
  const base = `https://wa.me/${number}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
