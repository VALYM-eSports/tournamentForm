-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "level" TEXT NOT NULL,
    "sector" TEXT NOT NULL,
    "pseudoIg" TEXT NOT NULL,
    "pseudoDiscord" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "rank" TEXT NOT NULL,
    "network" TEXT NOT NULL,
    "partner" TEXT NOT NULL,
    "partnerName" TEXT NOT NULL,
    "partnerChoice" TEXT NOT NULL,
    "otherNetwork" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tournament" (
    "id" TEXT NOT NULL,
    "nbJoueursEquipe" INTEGER NOT NULL,
    "nbJoueurs" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "nbJoueursInscrits" INTEGER NOT NULL,

    CONSTRAINT "Tournament_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
