import { FantasyPlayerMatch } from ".prisma/client"
import { FantasyTeamPlayer } from "./fantasy"
import { PlayerMatch } from "./match"
import { Team } from "./team"

export interface Player {
    id: number;
    name: string;
    teamId?: number;
    positionId: number;
    team: Team;
    position: Position;
    matches: PlayerMatch[];
    fantasyTeams: FantasyTeamPlayer[];
}

export interface Position {
    id: number;
    name: string;
    shortName: string;
    players: Player[];
    fantasyPlayerMatches: FantasyPlayerMatch[];
}