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
  team1Id: number;
  team2Id: number;
  team1Score?: number;
  team2Score?: number;
  team1: FantasyTeam;
  team2: FantasyTeam;
  gameWeek: number;
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
  team1Matches: FantasyMatch[];
  team2Matches: FantasyMatch[];
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
