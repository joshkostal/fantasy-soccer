/*
  Warnings:

  - You are about to drop the column `points` on the `PlayerMatch` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "FantasyPlayerMatch" ADD COLUMN     "positionId" INTEGER;

-- AlterTable
ALTER TABLE "PlayerMatch" DROP COLUMN "points",
ADD COLUMN     "assists" INTEGER,
ADD COLUMN     "dribblesCompleted" INTEGER,
ADD COLUMN     "goals" INTEGER,
ADD COLUMN     "goalsConceded" INTEGER,
ADD COLUMN     "hasHatTrick" BOOLEAN,
ADD COLUMN     "hasRedCard" BOOLEAN,
ADD COLUMN     "hasYellowCard" BOOLEAN,
ADD COLUMN     "interceptions" INTEGER,
ADD COLUMN     "isCleanSheet" BOOLEAN,
ADD COLUMN     "isMOTM" BOOLEAN,
ADD COLUMN     "isShutout" BOOLEAN,
ADD COLUMN     "keyPasses" INTEGER,
ADD COLUMN     "offsides" INTEGER,
ADD COLUMN     "pksConceded" INTEGER,
ADD COLUMN     "pksMissed" INTEGER,
ADD COLUMN     "pksSaved" INTEGER,
ADD COLUMN     "pksWon" INTEGER,
ADD COLUMN     "saves" INTEGER,
ADD COLUMN     "shotsBlocked" INTEGER,
ADD COLUMN     "shotsOnTarget" INTEGER,
ADD COLUMN     "tackles" INTEGER,
ADD COLUMN     "timesDribbledPast" INTEGER,
ADD COLUMN     "totalPoints" INTEGER;

-- CreateTable
CREATE TABLE "FantasyMatch" (
    "id" SERIAL NOT NULL,
    "team1Id" INTEGER NOT NULL,
    "team2Id" INTEGER NOT NULL,
    "team1Score" INTEGER,
    "team2Score" INTEGER,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "FantasyMatch" ADD FOREIGN KEY ("team1Id") REFERENCES "FantasyTeam"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FantasyMatch" ADD FOREIGN KEY ("team2Id") REFERENCES "FantasyTeam"("id") ON DELETE CASCADE ON UPDATE CASCADE;
