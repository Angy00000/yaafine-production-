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
  /** Grande image de fond de l'accueil (ex. /media/hero.jpg, 1920 px de large), ou null */
  heroImage: null as string | null,
  // Remplace par le vrai domaine dès qu'il existe (ex. https://yaafine.sn)
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://yaafine-production.vercel.app",
  description:
    "Yaafiné Production, label audiovisuel basé à Keur Massar : couverture événementielle, réalisation vidéo et photographie à Keur Massar et Dakar, Sénégal.",

  contact: {
    // Format international sans espaces ni « + », utilisé pour les liens WhatsApp
    whatsappPrimary: "221770593118",
    whatsappSecondary: "221779620568",
    whatsappPrimaryLabel: "+221 77 059 31 18",
    whatsappSecondaryLabel: "+221 77 962 05 68",
    email: "teleyaafine@gmail.com",
  },

  /**
   * Réseaux sociaux : ajoute uniquement des URL confirmées par le client.
   * Exemple : { label: "Instagram", href: "https://instagram.com/..." }
   */
  socials: [] as { label: string; href: string }[],
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
