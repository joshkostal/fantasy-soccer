/*
  Warnings:

  - You are about to drop the column `team1Id` on the `FantasyMatch` table. All the data in the column will be lost.
  - You are about to drop the column `team1Score` on the `FantasyMatch` table. All the data in the column will be lost.
  - You are about to drop the column `team2Id` on the `FantasyMatch` table. All the data in the column will be lost.
  - You are about to drop the column `team2Score` on the `FantasyMatch` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "FantasyMatch" DROP CONSTRAINT "FantasyMatch_team1Id_fkey";

-- DropForeignKey
ALTER TABLE "FantasyMatch" DROP CONSTRAINT "FantasyMatch_team2Id_fkey";

-- AlterTable
ALTER TABLE "FantasyMatch" DROP COLUMN "team1Id",
DROP COLUMN "team1Score",
DROP COLUMN "team2Id",
DROP COLUMN "team2Score";

-- CreateTable
CREATE TABLE "FantasyTeamMatch" (
    "teamId" INTEGER NOT NULL,
    "matchId" INTEGER NOT NULL,
    "teamScore" DECIMAL(5,2),

    CONSTRAINT "FantasyTeamMatch_pkey" PRIMARY KEY ("teamId","matchId")
);

-- AddForeignKey
ALTER TABLE "FantasyTeamMatch" ADD CONSTRAINT "FantasyTeamMatch_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "FantasyTeam"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FantasyTeamMatch" ADD CONSTRAINT "FantasyTeamMatch_matchId_fkey" FOREIGN KEY ("matchId") REFERENCES "FantasyMatch"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
