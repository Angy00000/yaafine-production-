/**
 * Section « À propos ».
 * Uniquement des informations confirmées. Quand le client fournit sa biographie,
 * remplace `founderBio` (un paragraphe par élément du tableau) : le cadre
 * « biographie à compléter » disparaît automatiquement.
 */

export const about = {
  intro:
    "Yaafiné Production est le label audiovisuel fondé par Elhadji Moussa Watt à Keur Massar. Il accompagne les organisateurs d'événements, les entreprises et les particuliers en vidéo, en photo, en couverture et en décoration d'événements.",
  activities:
    "Le label organise aussi ses propres événements, comme le tournoi de football dont la finale de la 7e édition s'est jouée le 24 décembre 2022, et diffuse ses vidéos sur sa chaîne Yaafiné TV.",
  approach:
    "Chaque projet commence par une discussion : ce que vous voulez montrer, à qui, et comment vous utiliserez les images. Nous adaptons ensuite le tournage et le montage à votre événement et à votre budget.",
  founderBio: [] as string[],
  // Chemin d'une photo du fondateur dans /public, ou null
  founderPhoto: null as string | null,
};
