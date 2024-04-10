/*
  Warnings:

  - You are about to drop the column `nbJoueurs` on the `Tournament` table. All the data in the column will be lost.
  - You are about to drop the column `otherNetwork` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Tournament" DROP COLUMN "nbJoueurs";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "otherNetwork";
