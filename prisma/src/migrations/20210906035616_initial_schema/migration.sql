-- CreateTable
CREATE TABLE "Player" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(63) NOT NULL,
    "teamId" INTEGER,
    "positionId" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Position" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(15) NOT NULL,
    "shortName" VARCHAR(2) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PlayerMatch" (
    "id" SERIAL NOT NULL,
    "isStarter" BOOLEAN NOT NULL DEFAULT false,
    "points" INTEGER,
    "matchId" INTEGER NOT NULL,
    "playerId" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Match" (
    "id" SERIAL NOT NULL,
    "matchWeek" INTEGER NOT NULL,
    "homeScore" INTEGER,
    "awayScore" INTEGER,
    "homeTeamId" INTEGER NOT NULL,
    "awayTeamId" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Team" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(63) NOT NULL,
    "shortName" VARCHAR(7) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Position.name_unique" ON "Position"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Position.shortName_unique" ON "Position"("shortName");

-- CreateIndex
CREATE UNIQUE INDEX "Team.name_unique" ON "Team"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Team.shortName_unique" ON "Team"("shortName");

-- AddForeignKey
ALTER TABLE "Player" ADD FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Player" ADD FOREIGN KEY ("positionId") REFERENCES "Position"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlayerMatch" ADD FOREIGN KEY ("matchId") REFERENCES "Match"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlayerMatch" ADD FOREIGN KEY ("playerId") REFERENCES "Player"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Match" ADD FOREIGN KEY ("homeTeamId") REFERENCES "Team"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Match" ADD FOREIGN KEY ("awayTeamId") REFERENCES "Team"("id") ON DELETE CASCADE ON UPDATE CASCADE;
