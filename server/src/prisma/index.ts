import { PrismaClient } from ".prisma/client";
import { FantasyTeam } from "../types/fantasy";
import { Player } from "../types/player";

// export interface Query {
//     fantasyTeamPlayers: <T = Player[]>(args: { fantasyTeamId: number }) => Promise<T>;
//     fantasyLeagues: <T = FantasyTeam[]>(args: { userId: number }) => Promise<T>;
// };

export interface Context {
    prisma: PrismaClient;
};