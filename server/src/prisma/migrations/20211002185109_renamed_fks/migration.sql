-- DropForeignKey
ALTER TABLE "FantasyLeague" DROP CONSTRAINT "FantasyLeague_commissionerId_fkey";

-- DropForeignKey
ALTER TABLE "FantasyMatch" DROP CONSTRAINT "FantasyMatch_team1Id_fkey";

-- DropForeignKey
ALTER TABLE "FantasyMatch" DROP CONSTRAINT "FantasyMatch_team2Id_fkey";

-- DropForeignKey
ALTER TABLE "FantasyPlayerMatch" DROP CONSTRAINT "FantasyPlayerMatch_fantasyTeamPlayerId_fkey";

-- DropForeignKey
ALTER TABLE "FantasyPlayerMatch" DROP CONSTRAINT "FantasyPlayerMatch_playerMatchId_fkey";

-- DropForeignKey
ALTER TABLE "FantasyTeam" DROP CONSTRAINT "FantasyTeam_fantasyLeagueId_fkey";

-- DropForeignKey
ALTER TABLE "FantasyTeam" DROP CONSTRAINT "FantasyTeam_ownerId_fkey";

-- DropForeignKey
ALTER TABLE "FantasyTeamPlayer" DROP CONSTRAINT "FantasyTeamPlayer_fantasyTeamId_fkey";

-- DropForeignKey
ALTER TABLE "FantasyTeamPlayer" DROP CONSTRAINT "FantasyTeamPlayer_playerId_fkey";

-- DropForeignKey
ALTER TABLE "Match" DROP CONSTRAINT "Match_awayTeamId_fkey";

-- DropForeignKey
ALTER TABLE "Match" DROP CONSTRAINT "Match_homeTeamId_fkey";

-- DropForeignKey
ALTER TABLE "Player" DROP CONSTRAINT "Player_positionId_fkey";

-- DropForeignKey
ALTER TABLE "PlayerMatch" DROP CONSTRAINT "PlayerMatch_matchId_fkey";

-- DropForeignKey
ALTER TABLE "PlayerMatch" DROP CONSTRAINT "PlayerMatch_playerId_fkey";

-- AddForeignKey
ALTER TABLE "Player" ADD CONSTRAINT "Player_positionId_fkey" FOREIGN KEY ("positionId") REFERENCES "Position"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlayerMatch" ADD CONSTRAINT "PlayerMatch_matchId_fkey" FOREIGN KEY ("matchId") REFERENCES "Match"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlayerMatch" ADD CONSTRAINT "PlayerMatch_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "Player"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Match" ADD CONSTRAINT "Match_homeTeamId_fkey" FOREIGN KEY ("homeTeamId") REFERENCES "Team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Match" ADD CONSTRAINT "Match_awayTeamId_fkey" FOREIGN KEY ("awayTeamId") REFERENCES "Team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FantasyTeamPlayer" ADD CONSTRAINT "FantasyTeamPlayer_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "Player"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FantasyTeamPlayer" ADD CONSTRAINT "FantasyTeamPlayer_fantasyTeamId_fkey" FOREIGN KEY ("fantasyTeamId") REFERENCES "FantasyTeam"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FantasyPlayerMatch" ADD CONSTRAINT "FantasyPlayerMatch_positionId_fkey" FOREIGN KEY ("positionId") REFERENCES "Position"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FantasyPlayerMatch" ADD CONSTRAINT "FantasyPlayerMatch_playerMatchId_fkey" FOREIGN KEY ("playerMatchId") REFERENCES "PlayerMatch"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FantasyPlayerMatch" ADD CONSTRAINT "FantasyPlayerMatch_fantasyTeamPlayerId_fkey" FOREIGN KEY ("fantasyTeamPlayerId") REFERENCES "FantasyTeamPlayer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FantasyMatch" ADD CONSTRAINT "FantasyMatch_team1Id_fkey" FOREIGN KEY ("team1Id") REFERENCES "FantasyTeam"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FantasyMatch" ADD CONSTRAINT "FantasyMatch_team2Id_fkey" FOREIGN KEY ("team2Id") REFERENCES "FantasyTeam"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FantasyTeam" ADD CONSTRAINT "FantasyTeam_fantasyLeagueId_fkey" FOREIGN KEY ("fantasyLeagueId") REFERENCES "FantasyLeague"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FantasyTeam" ADD CONSTRAINT "FantasyTeam_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FantasyLeague" ADD CONSTRAINT "FantasyLeague_commissionerId_fkey" FOREIGN KEY ("commissionerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- RenameIndex
ALTER INDEX "FantasyPlayerMatch.playerMatchId_fantasyTeamPlayerId_unique" RENAME TO "FantasyPlayerMatch_playerMatchId_fantasyTeamPlayerId_key";

-- RenameIndex
ALTER INDEX "FantasyTeam.fantasyLeagueId_ownerId_unique" RENAME TO "FantasyTeam_fantasyLeagueId_ownerId_key";

-- RenameIndex
ALTER INDEX "FantasyTeamPlayer.playerId_fantasyTeamId_unique" RENAME TO "FantasyTeamPlayer_playerId_fantasyTeamId_key";

-- RenameIndex
ALTER INDEX "Match.matchWeek_homeTeamId_awayTeamId_unique" RENAME TO "Match_matchWeek_homeTeamId_awayTeamId_key";

-- RenameIndex
ALTER INDEX "PlayerMatch.playerId_matchId_unique" RENAME TO "PlayerMatch_playerId_matchId_key";

-- RenameIndex
ALTER INDEX "Position.name_unique" RENAME TO "Position_name_key";

-- RenameIndex
ALTER INDEX "Position.shortName_unique" RENAME TO "Position_shortName_key";

-- RenameIndex
ALTER INDEX "Team.name_unique" RENAME TO "Team_name_key";

-- RenameIndex
ALTER INDEX "Team.shortName_unique" RENAME TO "Team_shortName_key";

-- RenameIndex
ALTER INDEX "User.email_unique" RENAME TO "User_email_key";
