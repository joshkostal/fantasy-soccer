/*
  Warnings:

  - Added the required column `dateTime` to the `Match` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Match" ADD COLUMN     "dateTime" TIMESTAMP(3) NOT NULL;

-- CreateTable
CREATE TABLE "FantasyTeamPlayer" (
    "playerId" INTEGER NOT NULL,
    "fantasyTeamId" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "FantasyTeam" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(63) NOT NULL,
    "fantasyLeagueId" INTEGER NOT NULL,
    "ownerId" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FantasyLeague" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(63) NOT NULL,
    "commissionerId" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(63) NOT NULL,
    "email" VARCHAR(63) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "FantasyTeamPlayer.playerId_fantasyTeamId_unique" ON "FantasyTeamPlayer"("playerId", "fantasyTeamId");

-- CreateIndex
CREATE UNIQUE INDEX "User.email_unique" ON "User"("email");

-- AddForeignKey
ALTER TABLE "FantasyTeamPlayer" ADD FOREIGN KEY ("playerId") REFERENCES "Player"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FantasyTeamPlayer" ADD FOREIGN KEY ("fantasyTeamId") REFERENCES "FantasyTeam"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FantasyTeam" ADD FOREIGN KEY ("fantasyLeagueId") REFERENCES "FantasyLeague"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FantasyTeam" ADD FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FantasyLeague" ADD FOREIGN KEY ("commissionerId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
