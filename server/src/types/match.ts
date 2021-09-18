import { Player } from "./player";
import { Team } from "./team";

export interface Match {
    id: number;
    matchWeek: number;
    homeScore?: number;
    awayScore?: number;
    homeTeamId: number;
    awayTeamId: number;
    dateTime: Date;
    homeTeam: Team;
    awayTeam: Team;
    playerMatches: PlayerMatch[];
}

export interface PlayerMatch {
    id: number;
    isStarter: boolean;
    points: number;    // Break this down to individual stats
    matchId: number;
    playerId: number;
    match: Match;
    player: Player;
}