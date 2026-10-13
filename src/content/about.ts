/**
 * Section « À propos ».
 * Uniquement des informations confirmées. Quand le client fournit sa biographie,
 * remplace `founderBio` (un paragraphe par élément du tableau) : le cadre
 * « biographie à compléter » disparaît automatiquement.
 */

export const about = {
  intro:
    "Yaafiné Production est le label audiovisuel fondé par Elhadji Moussa Watt à Keur Massar. Il accompagne les organisateurs d'événements, les entreprises et les particuliers en vidéo, en photo et en couverture d'événements.",
  approach:
    "Chaque projet commence par une discussion : ce que vous voulez montrer, à qui, et comment vous utiliserez les images. Nous adaptons ensuite le tournage et le montage à votre événement et à votre budget.",
  founderBio: [] as string[],
  // Chemin d'une photo du fondateur dans /public, ou null
  founderPhoto: null as string | null,
};
