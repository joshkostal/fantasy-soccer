-- CreateTable
CREATE TABLE "FantasyLeagueScoreSettings" (
    "id" SERIAL NOT NULL,
    "fantasyLeagueId" INTEGER,
    "goal" INTEGER NOT NULL,
    "assist" INTEGER NOT NULL,
    "pkWon" INTEGER NOT NULL,
    "isMOTM" INTEGER NOT NULL,
    "hasHatTrick" INTEGER NOT NULL,
    "hasYellowCard" INTEGER NOT NULL,
    "hasRedCard" INTEGER NOT NULL,
    "pkConceded" INTEGER NOT NULL,
    "pkMissed" INTEGER NOT NULL,
    "offside" INTEGER NOT NULL,
    "save" INTEGER NOT NULL,
    "tackle" INTEGER NOT NULL,
    "pkSaved" INTEGER NOT NULL,
    "shotBlocked" INTEGER NOT NULL,
    "interception" INTEGER NOT NULL,
    "isCleanSheet" INTEGER NOT NULL,
    "goalConceded" INTEGER NOT NULL,
    "dribbleCompleted" INTEGER NOT NULL,
    "shotOnTarget" INTEGER NOT NULL,
    "keyPass" INTEGER NOT NULL,
    "isShutout" INTEGER NOT NULL,
    "dribbledPast" INTEGER NOT NULL,

    CONSTRAINT "FantasyLeagueScoreSettings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PositionScoreMultiplier" (
    "positionId" INTEGER NOT NULL,
    "goal" INTEGER NOT NULL,
    "assist" INTEGER NOT NULL,
    "pkWon" INTEGER NOT NULL,
    "isMOTM" INTEGER NOT NULL,
    "hasHatTrick" INTEGER NOT NULL,
    "hasYellowCard" INTEGER NOT NULL,
    "hasRedCard" INTEGER NOT NULL,
    "pkConceded" INTEGER NOT NULL,
    "pkMissed" INTEGER NOT NULL,
    "offside" INTEGER NOT NULL,
    "save" INTEGER NOT NULL,
    "tackle" INTEGER NOT NULL,
    "pkSaved" INTEGER NOT NULL,
    "shotBlocked" INTEGER NOT NULL,
    "interception" INTEGER NOT NULL,
    "isCleanSheet" INTEGER NOT NULL,
    "goalConceded" INTEGER NOT NULL,
    "dribbleCompleted" INTEGER NOT NULL,
    "shotOnTarget" INTEGER NOT NULL,
    "keyPass" INTEGER NOT NULL,
    "isShutout" INTEGER NOT NULL,
    "dribbledPast" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "FantasyLeagueScoreSettings_fantasyLeagueId_key" ON "FantasyLeagueScoreSettings"("fantasyLeagueId");

-- CreateIndex
CREATE UNIQUE INDEX "PositionScoreMultiplier_positionId_key" ON "PositionScoreMultiplier"("positionId");

-- AddForeignKey
ALTER TABLE "FantasyLeagueScoreSettings" ADD CONSTRAINT "FantasyLeagueScoreSettings_fantasyLeagueId_fkey" FOREIGN KEY ("fantasyLeagueId") REFERENCES "FantasyLeague"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PositionScoreMultiplier" ADD CONSTRAINT "PositionScoreMultiplier_positionId_fkey" FOREIGN KEY ("positionId") REFERENCES "Position"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
