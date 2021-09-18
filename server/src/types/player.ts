import { PlayerMatch } from "./match"
import { Team } from "./team"

export interface Player {
    id: number;
    name: string;
    teamId?: number;
    positionId: number;
    team: Team;
    position: Position;
    playerMatches: PlayerMatch[];
}

export interface Position {
    id: number;
    name: string;
    shortName: string;
    players: Player[];
}