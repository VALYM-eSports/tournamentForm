export enum LEVEL_ENUM {
  B1 = "b1",
  B2 = "b2",
  B3 = "b3",
  M1 = "Master 1",
  M2 = "Master 2",
  EXTERNE = "Externe",
}

export enum SECTOR_ENUM {
  INFO = "informatique",
  ARCHI = "Architecture",
  MC = "Marketing&Communication",
  CREA = "Crea",
  AUDIO = "Audiovisuel",
  ANIM = "3D",
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
};