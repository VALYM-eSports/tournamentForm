/*
  Warnings:

  - You are about to drop the column `level` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `partner` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `partnerChoice` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `partnerName` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `sector` on the `User` table. All the data in the column will be lost.
  - Added the required column `tournamentId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "level",
DROP COLUMN "partner",
DROP COLUMN "partnerChoice",
DROP COLUMN "partnerName",
DROP COLUMN "sector",
ADD COLUMN     "tournamentId" TEXT NOT NULL,
ALTER COLUMN "network" DROP NOT NULL,
ALTER COLUMN "otherNetwork" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_tournamentId_fkey" FOREIGN KEY ("tournamentId") REFERENCES "Tournament"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
