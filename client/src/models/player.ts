import { Match } from "./match";
import { Team } from "./team";

export interface Player {
    name: string;
    id: number;
    position: Position;
    team: Team;
    nextMatch: PlayerMatch;
  }
  
  export interface Position {
    id: number;
    name: string;
    shortName: string;
  }

  export interface PlayerMatch {
      match: Match;
      points?: number;
      isStarter: boolean;
  }
  
  export enum EPosition {
    ST = 1,
    W = 2,
    AM = 3,
    CM = 4,
    DM = 5,
    FB = 6,
    CB = 7,
    GK = 8,
  }
  
  export const PositionClassMapping: Record<EPosition, string> = {
    [EPosition.ST]: "striker",
    [EPosition.W]: "winger",
    [EPosition.AM]: "attacking-mid",
    [EPosition.CM]: "center-mid",
    [EPosition.DM]: "defensive-mid",
    [EPosition.FB]: "fullback",
    [EPosition.CB]: "centerback",
    [EPosition.GK]: "goal-keeper",
  };