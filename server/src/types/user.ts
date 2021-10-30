import { FantasyLeague, FantasyTeam } from "./fantasy";

export interface User {
  id: number;
  name: string;
  email: string;
  fantasyTeams: FantasyTeam[];
  commissionerLeagues: FantasyLeague[];
}
