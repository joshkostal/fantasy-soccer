/*
  Warnings:

  - You are about to alter the column `team1Score` on the `FantasyMatch` table. The data in that column could be lost. The data in that column will be cast from `Integer` to `Decimal(5,2)`.
  - You are about to alter the column `team2Score` on the `FantasyMatch` table. The data in that column could be lost. The data in that column will be cast from `Integer` to `Decimal(5,2)`.
  - You are about to alter the column `totalPoints` on the `FantasyPlayerMatch` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(4,2)`.

*/
-- DropIndex
DROP INDEX "FantasyPlayerMatch_playerMatchId_fantasyTeamId_key";

-- AlterTable
ALTER TABLE "FantasyMatch" ALTER COLUMN "team1Score" SET DATA TYPE DECIMAL(5,2),
ALTER COLUMN "team2Score" SET DATA TYPE DECIMAL(5,2);

-- AlterTable
ALTER TABLE "FantasyPlayerMatch" ALTER COLUMN "totalPoints" SET DATA TYPE DECIMAL(4,2),
ADD CONSTRAINT "FantasyPlayerMatch_pkey" PRIMARY KEY ("playerMatchId", "fantasyTeamId");
