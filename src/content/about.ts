/**
 * Section « À propos ».
 * Biographie officielle fournie par le client (octobre 2026), reproduite fidèlement
 * (seuls les accents ont été ajoutés). Ne pas réécrire sans son accord.
 */

export const about = {
  intro:
    "Yaafiné Production est une entreprise de production audiovisuelle, événementielle et de communication fondée par Elhadji Moussa Watt, à Malika. Elle accompagne les organisateurs d'événements, les entreprises et les particuliers en vidéo, en photo, en couverture et en décoration d'événements.",
  activities:
    "Le label organise aussi le Tournoi de football Jeunesse de Malika, qui rassemble plus de 500 jeunes, et diffuse ses vidéos sur sa chaîne Yaafiné TV.",

  founder: {
    name: "Elhadji Moussa Watt",
    nickname: "Moussa Yaafiné",
    role: "Fondateur et gérant de Yaafiné Production",
    // Chemin d'une photo du fondateur dans /public, ou null (photo d'équipe affichée)
    photo: null as string | null,
  },

  /** Les premiers paragraphes sont visibles, la suite s'ouvre avec « Lire toute son histoire ». */
  bioVisible: [
    "Je suis Elhadji Moussa Watt, plus connu sous le nom de Moussa Yaafiné, fondateur et gérant de Yaafiné Production.",
    "Mon histoire commence au Fouta, à Wouro Madiw, où je grandis jusqu'à mes 7 ans. C'est là que s'enracinent mes valeurs : la foi, la solidarité, le respect des anciens. À 7 ans, je rejoins Dakar, précisément à Médina Gounass. Élève brillant et passionné de football, je poursuis ma scolarité à l'École 20 et à l'École 16 de Guédiawaye, tout en suivant l'enseignement coranique à la maison. Sur les terrains comme en classe, je rêvais grand.",
  ],
  bioMore: [
    "Puis la vie a pris un autre tournant.",
    "Une maladie rare et invalidante a bouleversé mon parcours. De l'hôpital Roi Baudouin à Fann, de Le Dantec à l'hôpital régional de Thiès, j'ai parcouru les couloirs des hôpitaux. Cette maladie a transformé mon corps, freiné mes études, mais jamais elle n'a éteint ma volonté.",
    "Un jour, dans les rues de Dakar, vivant de la charité des autres, j'ai eu un déclic. Je me suis dit : « Ce n'est pas ma route. Je ne suis pas né pour tendre la main, je suis né pour créer. »",
    "C'est ainsi que je me suis tourné vers le domaine musical. La musique est devenue mon premier refuge, mon premier micro, ma première scène.",
    "Suite à de fortes pluies ayant causé d'importants dégâts, notre famille a déménagé à Malika. C'est à Malika Cité Sonatel, près du poste de santé, que beaucoup m'ont découvert. Dans le milieu musical malikois, on a commencé à me connaître, à me respecter.",
    "C'est de cette résilience qu'est née Yaafiné Production.",
    "Yaafiné Production, c'est bien plus qu'une entreprise de production audiovisuelle, événementielle et de communication. C'est ma réponse à la vie. Avec pour devise « Capturer vos plus beaux moments », je mets mon objectif et mon micro au service des autres.",
    "Depuis 9 ans, j'organise avec mon équipe le Tournoi de football Jeunesse de Malika, qui rassemble aujourd'hui plus de 500 jeunes.",
  ],
  mission: [
    "Sensibiliser plus de 500 jeunes à la discipline, la santé, l'éducation et la citoyenneté",
    "Lutter contre l'oisiveté, l'abandon scolaire et la délinquance juvénile",
    "Offrir une alternative digne à la rue",
    "Promouvoir le fair-play et l'éducation des filles par le sport",
  ],
  closing:
    "Je suis passé de la rue à l'organisation, de la mendicité à l'entrepreneuriat. Si j'ai créé Yaafiné, c'est pour prouver qu'un handicap n'est jamais une fin, mais un autre chemin.",
  quote: "Ton histoire ne s'arrête pas à ton épreuve. Elle commence avec.",
};
