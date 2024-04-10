export type FormInputs = {
  firstName: string;
  lastName: string;
  email: string;
  level: LEVEL_ENUM;
  sector: SECTOR_ENUM;
  pseudoIg: string;
  pseudoDiscord: string;
  phoneNumber: string;
  rank: RANKED_ENUM;
  network: string;
  partner: string;
  partnerName: string;
  partnerChoice: string;
  otherNetwork: string;
};

export type FormData = {
  lastName: string;
  firstName: string;
  email: string;
  level: LEVEL_ENUM;
  sector: SECTOR_ENUM;
  pseudoIg: string;
  pseudoDiscord: string;
  phoneNumber: string;
  rank: RANKED_ENUM;
  network: string;
  partner: string;
  rightImage: string;
};

export type RegisterTournamentInscriptionType = {
  firstName: string;
  lastName: string;
  email: string;
  pseudoIg: string;
  pseudoDiscord: string;
  phoneNumber: string;
  rank: string;
  network: string;
  tournamentId: string;
};

export enum TOURNAMENT_INFO_ENUM {
  DATE = "17 Avril",
  HEURE_DEBUT = "17h30",
  HEURE_FIN = "17H30",
}

export enum TOURNAMENT_DATA_ENUM {
  FIRST = "En vous inscrivant au tournoi, vous consentez à ce que vos données personnelles soient collectées et utilisées par les organisateurs dans le cadre de la gestion et de l'organisation du tournoi. Ces données peuvent inclure, sans s'y limiter, votre nom, votre adresse e-mail, votre numéro de téléphone, votre âge et toute autre information pertinente pour le tournoi.",
  SECOND = "Les organisateurs s'engagent à utiliser vos données uniquement à des fins liées à l'organisation du tournoi et à ne pas les partager avec des tiers sans votre consentement préalable, sauf si requis par la loi.",
  THIRD = "Vous avez le droit de retirer votre consentement à tout moment en contactant les organisateurs du tournoi. Cependant, veuillez noter que le retrait de votre consentement pourrait affecter votre participation au tournoi.",
}

export enum RIGHT_IMAGE_ENUM {
  FIRST = "En participant au tournoi, vous consentez à ce que des photos ou des vidéos de vous puissent être prises et utilisées par les organisateurs à des fins de promotion ou de couverture médiatique du tournoi.",
  SECOND = "Les organisateurs s'engagent à utiliser ces images de manière appropriée et respectueuse, et à ne pas les utiliser à des fins diffamatoires ou préjudiciables à votre réputation.",
  THRID = "Si vous préférez ne pas être photographié ou filmé, veuillez en informer les organisateurs au moment de votre inscription ou avant le début du tournoi.",
}

export enum CONSENT_ENUM {
  CONSENT = "consent",
  IMAGE = "image",
}

export enum LEVEL_ENUM {
  B1 = "B1",
  B2 = "B2",
  B3 = "B3",
  M1 = "M1",
  M2 = "M2",
  EXTERNE = "Externe",
}

export enum SECTOR_ENUM {
  INFO = "Informatique",
  ARCHI = "Architecture Intérieur",
  MC = "Marketing&Communication",
  CREA = "Création Et Design",
  AUDIO = "Audiovisuel",
  ANIM = "Animation 3D",
}

export enum RANKED_ENUM {
  BRONZE = "Bronze",
  SILVER = "Argent",
  GOLD = "Or",
  PLATINUM = "Platine",
  DIAMOND = "Diamant",
  CHAMPION = "Champion",
  GRAND_CHAMPION = "Grand Champion",
  UNRANKED = "Non classé",
}
