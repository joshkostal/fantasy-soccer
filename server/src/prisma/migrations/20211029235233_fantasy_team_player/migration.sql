/*
  Warnings:

  - You are about to drop the column `fantasyTeamPlayerId` on the `FantasyPlayerMatch` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[playerMatchId,fantasyTeamId]` on the table `FantasyPlayerMatch` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `fantasyTeamId` to the `FantasyPlayerMatch` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "FantasyPlayerMatch" DROP CONSTRAINT "FantasyPlayerMatch_fantasyTeamPlayerId_fkey";

-- DropIndex
DROP INDEX "FantasyPlayerMatch_playerMatchId_fantasyTeamPlayerId_key";

-- AlterTable
ALTER TABLE "FantasyPlayerMatch" DROP COLUMN "fantasyTeamPlayerId",
ADD COLUMN     "fantasyTeamId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "FantasyPlayerMatch_playerMatchId_fantasyTeamId_key" ON "FantasyPlayerMatch"("playerMatchId", "fantasyTeamId");

-- AddForeignKey
ALTER TABLE "FantasyPlayerMatch" ADD CONSTRAINT "FantasyPlayerMatch_fantasyTeamId_fkey" FOREIGN KEY ("fantasyTeamId") REFERENCES "FantasyTeam"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
