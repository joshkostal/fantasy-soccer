/*
  Warnings:

  - You are about to drop the column `isStarter` on the `PlayerMatch` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[fantasyLeagueId,ownerId]` on the table `FantasyTeam` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[matchWeek,homeTeamId,awayTeamId]` on the table `Match` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[playerId,matchId]` on the table `PlayerMatch` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "FantasyLeague" ALTER COLUMN "name" SET DATA TYPE VARCHAR(64);

-- AlterTable
ALTER TABLE "FantasyTeam" ALTER COLUMN "name" SET DATA TYPE VARCHAR(64);

-- AlterTable
ALTER TABLE "FantasyTeamPlayer" ADD COLUMN     "id" SERIAL NOT NULL,
ADD PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Player" ALTER COLUMN "name" SET DATA TYPE VARCHAR(64);

-- AlterTable
ALTER TABLE "PlayerMatch" DROP COLUMN "isStarter";

-- AlterTable
ALTER TABLE "Position" ALTER COLUMN "name" SET DATA TYPE VARCHAR(32);

-- AlterTable
ALTER TABLE "Team" ALTER COLUMN "name" SET DATA TYPE VARCHAR(64),
ALTER COLUMN "shortName" SET DATA TYPE VARCHAR(8);

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "name" SET DATA TYPE VARCHAR(64),
ALTER COLUMN "email" SET DATA TYPE VARCHAR(64);

-- CreateTable
CREATE TABLE "FantasyPlayerMatch" (
    "playerMatchId" INTEGER NOT NULL,
    "fantasyTeamPlayerId" INTEGER NOT NULL,
    "isStarter" BOOLEAN NOT NULL DEFAULT false
);

-- CreateIndex
CREATE UNIQUE INDEX "FantasyPlayerMatch.playerMatchId_fantasyTeamPlayerId_unique" ON "FantasyPlayerMatch"("playerMatchId", "fantasyTeamPlayerId");

-- CreateIndex
CREATE UNIQUE INDEX "FantasyTeam.fantasyLeagueId_ownerId_unique" ON "FantasyTeam"("fantasyLeagueId", "ownerId");

-- CreateIndex
CREATE UNIQUE INDEX "Match.matchWeek_homeTeamId_awayTeamId_unique" ON "Match"("matchWeek", "homeTeamId", "awayTeamId");

-- CreateIndex
CREATE UNIQUE INDEX "PlayerMatch.playerId_matchId_unique" ON "PlayerMatch"("playerId", "matchId");

-- AddForeignKey
ALTER TABLE "FantasyPlayerMatch" ADD FOREIGN KEY ("playerMatchId") REFERENCES "PlayerMatch"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FantasyPlayerMatch" ADD FOREIGN KEY ("fantasyTeamPlayerId") REFERENCES "FantasyTeamPlayer"("id") ON DELETE CASCADE ON UPDATE CASCADE;
