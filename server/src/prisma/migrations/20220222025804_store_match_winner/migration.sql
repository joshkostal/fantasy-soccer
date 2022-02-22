/*
  Warnings:

  - The primary key for the `FantasyTeamMatch` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "FantasyTeamMatch" DROP CONSTRAINT "FantasyTeamMatch_matchId_fkey";

-- AlterTable
ALTER TABLE "FantasyTeamMatch" DROP CONSTRAINT "FantasyTeamMatch_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "isWinner" BOOLEAN,
ALTER COLUMN "matchId" DROP NOT NULL,
ADD CONSTRAINT "FantasyTeamMatch_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "FantasyTeamMatch" ADD CONSTRAINT "FantasyTeamMatch_matchId_fkey" FOREIGN KEY ("matchId") REFERENCES "FantasyMatch"("id") ON DELETE SET NULL ON UPDATE CASCADE;
