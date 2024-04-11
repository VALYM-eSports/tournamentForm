import { RegisterTournamentInscriptionType } from "@/utils/enum";
import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function registerDao(userData: RegisterTournamentInscriptionType) {
  try {
    const {
      firstName,
      lastName,
      email,
      pseudoIg,
      pseudoDiscord,
      phoneNumber,
      rank,
      network,
      tournamentId,
    } = userData;
    await prisma.user.create({
      data: {
        firstName,
        lastName,
        email,
        pseudoIg,
        pseudoDiscord,
        phoneNumber,
        rank,
        network,
        tournamentId,
      },
    });
    await prisma.$disconnect();
    return true;
  } catch (e) {
    await prisma.$disconnect();
    throw e;
  }
}

export async function verifyIsRegister(email: string) {
  try {
    const user = await prisma.user.findFirst({
      where: {
        email: email.toLowerCase(),
      },
    });
    await prisma.$disconnect();
    return user;
  } catch (e) {
    await prisma.$disconnect();
    throw e;
  }
}

export async function countUserRegisterOnTournament(tournamentId: string) {
  try {
    const count = await prisma.user.count({
      where: {
        tournamentId: tournamentId,
      },
    });
    await prisma.$disconnect();
    return count;
  } catch (e) {
    await prisma.$disconnect();
    throw e;
  }
}
