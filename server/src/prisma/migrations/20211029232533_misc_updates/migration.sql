/*
  Warnings:

  - You are about to drop the column `totalPoints` on the `PlayerMatch` table. All the data in the column will be lost.
  - Added the required column `gameWeek` to the `FantasyMatch` table without a default value. This is not possible if the table is not empty.
  - Added the required column `displayName` to the `Player` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "FantasyMatch" ADD COLUMN     "gameWeek" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "FantasyPlayerMatch" ADD COLUMN     "totalPoints" INTEGER;

-- AlterTable
ALTER TABLE "Player" ADD COLUMN     "displayName" VARCHAR(24) NOT NULL;

-- AlterTable
ALTER TABLE "PlayerMatch" DROP COLUMN "totalPoints";
