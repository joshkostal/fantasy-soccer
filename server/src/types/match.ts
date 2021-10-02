import { FantasyPlayerMatch } from "./fantasy";
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
    players: PlayerMatch[];
}

export interface PlayerMatch {
    id: number;
    totalPoints: number;
    goals?: number;
    assists?: number;
    pksWon?: number;
    isMOTM?: boolean;
    hasHatTrick?: boolean;
    hasYellowCard?: boolean;
    hasRedCard?: boolean;
    pksConceded?: number;
    pksMissed?: number;
    offsides?: number;
    saves?: number;
    tackles?: number;
    pksSaved?: number;
    shotsBlocked?: number;
    interceptions?: number;
    isCleanSheet?: boolean;
    goalsConceded?: number;
    dribblesCompleted?: number;
    shotsOnTarget?: number;
    keyPasses?: number;
    isShutout?: boolean;
    timesDribbledPast?: number;
    matchId: number;
    playerId: number;
    match: Match;
    player: Player;
    fantasyPlayerMatches: FantasyPlayerMatch[];
}