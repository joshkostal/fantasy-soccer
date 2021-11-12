/*
  Warnings:

  - You are about to alter the column `goal` on the `FantasyLeagueScoreSettings` table. The data in that column could be lost. The data in that column will be cast from `Integer` to `Decimal(4,2)`.
  - You are about to alter the column `assist` on the `FantasyLeagueScoreSettings` table. The data in that column could be lost. The data in that column will be cast from `Integer` to `Decimal(4,2)`.
  - You are about to alter the column `pkWon` on the `FantasyLeagueScoreSettings` table. The data in that column could be lost. The data in that column will be cast from `Integer` to `Decimal(4,2)`.
  - You are about to alter the column `isMOTM` on the `FantasyLeagueScoreSettings` table. The data in that column could be lost. The data in that column will be cast from `Integer` to `Decimal(4,2)`.
  - You are about to alter the column `hasHatTrick` on the `FantasyLeagueScoreSettings` table. The data in that column could be lost. The data in that column will be cast from `Integer` to `Decimal(4,2)`.
  - You are about to alter the column `hasYellowCard` on the `FantasyLeagueScoreSettings` table. The data in that column could be lost. The data in that column will be cast from `Integer` to `Decimal(4,2)`.
  - You are about to alter the column `hasRedCard` on the `FantasyLeagueScoreSettings` table. The data in that column could be lost. The data in that column will be cast from `Integer` to `Decimal(4,2)`.
  - You are about to alter the column `pkConceded` on the `FantasyLeagueScoreSettings` table. The data in that column could be lost. The data in that column will be cast from `Integer` to `Decimal(4,2)`.
  - You are about to alter the column `pkMissed` on the `FantasyLeagueScoreSettings` table. The data in that column could be lost. The data in that column will be cast from `Integer` to `Decimal(4,2)`.
  - You are about to alter the column `offside` on the `FantasyLeagueScoreSettings` table. The data in that column could be lost. The data in that column will be cast from `Integer` to `Decimal(4,2)`.
  - You are about to alter the column `save` on the `FantasyLeagueScoreSettings` table. The data in that column could be lost. The data in that column will be cast from `Integer` to `Decimal(4,2)`.
  - You are about to alter the column `tackle` on the `FantasyLeagueScoreSettings` table. The data in that column could be lost. The data in that column will be cast from `Integer` to `Decimal(4,2)`.
  - You are about to alter the column `pkSaved` on the `FantasyLeagueScoreSettings` table. The data in that column could be lost. The data in that column will be cast from `Integer` to `Decimal(4,2)`.
  - You are about to alter the column `shotBlocked` on the `FantasyLeagueScoreSettings` table. The data in that column could be lost. The data in that column will be cast from `Integer` to `Decimal(4,2)`.
  - You are about to alter the column `interception` on the `FantasyLeagueScoreSettings` table. The data in that column could be lost. The data in that column will be cast from `Integer` to `Decimal(4,2)`.
  - You are about to alter the column `isCleanSheet` on the `FantasyLeagueScoreSettings` table. The data in that column could be lost. The data in that column will be cast from `Integer` to `Decimal(4,2)`.
  - You are about to alter the column `goalConceded` on the `FantasyLeagueScoreSettings` table. The data in that column could be lost. The data in that column will be cast from `Integer` to `Decimal(4,2)`.
  - You are about to alter the column `dribbleCompleted` on the `FantasyLeagueScoreSettings` table. The data in that column could be lost. The data in that column will be cast from `Integer` to `Decimal(4,2)`.
  - You are about to alter the column `shotOnTarget` on the `FantasyLeagueScoreSettings` table. The data in that column could be lost. The data in that column will be cast from `Integer` to `Decimal(4,2)`.
  - You are about to alter the column `keyPass` on the `FantasyLeagueScoreSettings` table. The data in that column could be lost. The data in that column will be cast from `Integer` to `Decimal(4,2)`.
  - You are about to alter the column `isShutout` on the `FantasyLeagueScoreSettings` table. The data in that column could be lost. The data in that column will be cast from `Integer` to `Decimal(4,2)`.
  - You are about to alter the column `dribbledPast` on the `FantasyLeagueScoreSettings` table. The data in that column could be lost. The data in that column will be cast from `Integer` to `Decimal(4,2)`.
  - You are about to alter the column `goal` on the `PositionScoreMultiplier` table. The data in that column could be lost. The data in that column will be cast from `Integer` to `Decimal(4,2)`.
  - You are about to alter the column `assist` on the `PositionScoreMultiplier` table. The data in that column could be lost. The data in that column will be cast from `Integer` to `Decimal(4,2)`.
  - You are about to alter the column `pkWon` on the `PositionScoreMultiplier` table. The data in that column could be lost. The data in that column will be cast from `Integer` to `Decimal(4,2)`.
  - You are about to alter the column `isMOTM` on the `PositionScoreMultiplier` table. The data in that column could be lost. The data in that column will be cast from `Integer` to `Decimal(4,2)`.
  - You are about to alter the column `hasHatTrick` on the `PositionScoreMultiplier` table. The data in that column could be lost. The data in that column will be cast from `Integer` to `Decimal(4,2)`.
  - You are about to alter the column `hasYellowCard` on the `PositionScoreMultiplier` table. The data in that column could be lost. The data in that column will be cast from `Integer` to `Decimal(4,2)`.
  - You are about to alter the column `hasRedCard` on the `PositionScoreMultiplier` table. The data in that column could be lost. The data in that column will be cast from `Integer` to `Decimal(4,2)`.
  - You are about to alter the column `pkConceded` on the `PositionScoreMultiplier` table. The data in that column could be lost. The data in that column will be cast from `Integer` to `Decimal(4,2)`.
  - You are about to alter the column `pkMissed` on the `PositionScoreMultiplier` table. The data in that column could be lost. The data in that column will be cast from `Integer` to `Decimal(4,2)`.
  - You are about to alter the column `offside` on the `PositionScoreMultiplier` table. The data in that column could be lost. The data in that column will be cast from `Integer` to `Decimal(4,2)`.
  - You are about to alter the column `save` on the `PositionScoreMultiplier` table. The data in that column could be lost. The data in that column will be cast from `Integer` to `Decimal(4,2)`.
  - You are about to alter the column `tackle` on the `PositionScoreMultiplier` table. The data in that column could be lost. The data in that column will be cast from `Integer` to `Decimal(4,2)`.
  - You are about to alter the column `pkSaved` on the `PositionScoreMultiplier` table. The data in that column could be lost. The data in that column will be cast from `Integer` to `Decimal(4,2)`.
  - You are about to alter the column `shotBlocked` on the `PositionScoreMultiplier` table. The data in that column could be lost. The data in that column will be cast from `Integer` to `Decimal(4,2)`.
  - You are about to alter the column `interception` on the `PositionScoreMultiplier` table. The data in that column could be lost. The data in that column will be cast from `Integer` to `Decimal(4,2)`.
  - You are about to alter the column `isCleanSheet` on the `PositionScoreMultiplier` table. The data in that column could be lost. The data in that column will be cast from `Integer` to `Decimal(4,2)`.
  - You are about to alter the column `goalConceded` on the `PositionScoreMultiplier` table. The data in that column could be lost. The data in that column will be cast from `Integer` to `Decimal(4,2)`.
  - You are about to alter the column `dribbleCompleted` on the `PositionScoreMultiplier` table. The data in that column could be lost. The data in that column will be cast from `Integer` to `Decimal(4,2)`.
  - You are about to alter the column `shotOnTarget` on the `PositionScoreMultiplier` table. The data in that column could be lost. The data in that column will be cast from `Integer` to `Decimal(4,2)`.
  - You are about to alter the column `keyPass` on the `PositionScoreMultiplier` table. The data in that column could be lost. The data in that column will be cast from `Integer` to `Decimal(4,2)`.
  - You are about to alter the column `isShutout` on the `PositionScoreMultiplier` table. The data in that column could be lost. The data in that column will be cast from `Integer` to `Decimal(4,2)`.
  - You are about to alter the column `dribbledPast` on the `PositionScoreMultiplier` table. The data in that column could be lost. The data in that column will be cast from `Integer` to `Decimal(4,2)`.

*/
-- AlterTable
ALTER TABLE "FantasyLeagueScoreSettings" ALTER COLUMN "goal" SET DATA TYPE DECIMAL(4,2),
ALTER COLUMN "assist" SET DATA TYPE DECIMAL(4,2),
ALTER COLUMN "pkWon" SET DATA TYPE DECIMAL(4,2),
ALTER COLUMN "isMOTM" SET DATA TYPE DECIMAL(4,2),
ALTER COLUMN "hasHatTrick" SET DATA TYPE DECIMAL(4,2),
ALTER COLUMN "hasYellowCard" SET DATA TYPE DECIMAL(4,2),
ALTER COLUMN "hasRedCard" SET DATA TYPE DECIMAL(4,2),
ALTER COLUMN "pkConceded" SET DATA TYPE DECIMAL(4,2),
ALTER COLUMN "pkMissed" SET DATA TYPE DECIMAL(4,2),
ALTER COLUMN "offside" SET DATA TYPE DECIMAL(4,2),
ALTER COLUMN "save" SET DATA TYPE DECIMAL(4,2),
ALTER COLUMN "tackle" SET DATA TYPE DECIMAL(4,2),
ALTER COLUMN "pkSaved" SET DATA TYPE DECIMAL(4,2),
ALTER COLUMN "shotBlocked" SET DATA TYPE DECIMAL(4,2),
ALTER COLUMN "interception" SET DATA TYPE DECIMAL(4,2),
ALTER COLUMN "isCleanSheet" SET DATA TYPE DECIMAL(4,2),
ALTER COLUMN "goalConceded" SET DATA TYPE DECIMAL(4,2),
ALTER COLUMN "dribbleCompleted" SET DATA TYPE DECIMAL(4,2),
ALTER COLUMN "shotOnTarget" SET DATA TYPE DECIMAL(4,2),
ALTER COLUMN "keyPass" SET DATA TYPE DECIMAL(4,2),
ALTER COLUMN "isShutout" SET DATA TYPE DECIMAL(4,2),
ALTER COLUMN "dribbledPast" SET DATA TYPE DECIMAL(4,2);

-- AlterTable
ALTER TABLE "FantasyPlayerMatch" ALTER COLUMN "totalPoints" SET DATA TYPE DECIMAL(65,30);

-- AlterTable
ALTER TABLE "PositionScoreMultiplier" ALTER COLUMN "goal" SET DATA TYPE DECIMAL(4,2),
ALTER COLUMN "assist" SET DATA TYPE DECIMAL(4,2),
ALTER COLUMN "pkWon" SET DATA TYPE DECIMAL(4,2),
ALTER COLUMN "isMOTM" SET DATA TYPE DECIMAL(4,2),
ALTER COLUMN "hasHatTrick" SET DATA TYPE DECIMAL(4,2),
ALTER COLUMN "hasYellowCard" SET DATA TYPE DECIMAL(4,2),
ALTER COLUMN "hasRedCard" SET DATA TYPE DECIMAL(4,2),
ALTER COLUMN "pkConceded" SET DATA TYPE DECIMAL(4,2),
ALTER COLUMN "pkMissed" SET DATA TYPE DECIMAL(4,2),
ALTER COLUMN "offside" SET DATA TYPE DECIMAL(4,2),
ALTER COLUMN "save" SET DATA TYPE DECIMAL(4,2),
ALTER COLUMN "tackle" SET DATA TYPE DECIMAL(4,2),
ALTER COLUMN "pkSaved" SET DATA TYPE DECIMAL(4,2),
ALTER COLUMN "shotBlocked" SET DATA TYPE DECIMAL(4,2),
ALTER COLUMN "interception" SET DATA TYPE DECIMAL(4,2),
ALTER COLUMN "isCleanSheet" SET DATA TYPE DECIMAL(4,2),
ALTER COLUMN "goalConceded" SET DATA TYPE DECIMAL(4,2),
ALTER COLUMN "dribbleCompleted" SET DATA TYPE DECIMAL(4,2),
ALTER COLUMN "shotOnTarget" SET DATA TYPE DECIMAL(4,2),
ALTER COLUMN "keyPass" SET DATA TYPE DECIMAL(4,2),
ALTER COLUMN "isShutout" SET DATA TYPE DECIMAL(4,2),
ALTER COLUMN "dribbledPast" SET DATA TYPE DECIMAL(4,2);
