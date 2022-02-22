import { PlayerMatch } from "./match";
import { Player, Position } from "./player";
import { User } from "./user";

export interface FantasyPlayerMatch {
  playerMatchId: number;
  fantasyTeamId: number;
  positionId: number | null;
  position?: Position;
  playerMatch: PlayerMatch;
  fantasyTeam: FantasyTeam;
  totalPoints?: number;
}

export interface FantasyMatch {
  id: number;
  team2: FantasyTeam;
  gameWeek: number;
  teamMatches: FantasyTeamMatch[];
}

export interface FantasyTeamMatch {
  id: number;
  teamId: number;
  matchId: number;
  teamScore?: number;
  isWinner?: boolean;
  team: FantasyTeam;
  match: FantasyMatch;
}

export interface FantasyTeam {
  id: number;
  name: string;
  fantasyLeagueId: number;
  ownerId: number;
  fantasyLeague: FantasyLeague;
  owner: User;
  players: FantasyTeamPlayer[];
  fantasyPlayerMatches: FantasyPlayerMatch[];
  teamMatches: FantasyTeamMatch[];
}

export interface FantasyLeague {
  id: number;
  name: string;
  commissionerId: number;
  fantasyTeams: FantasyTeam[];
  commissioner: User;
}

export interface FantasyTeamPlayer {
  id: number;
  playerId: number;
  fantasyTeamId: number;
  player: Player;
  fantasyTeam: FantasyTeam;
  fantasyPlayerMatches: FantasyPlayerMatch[];
}

export interface LineupInput {
  positionId: number | null;
  playerMatchId: number;
  fantasyTeamId: number;
}

export interface FantasyLeagueStanding {
  teamId: number;
  teamName: string;
  leaguePoints: number;
  matchPointsFor: number;
  matchPointsAgainst: number;
}
