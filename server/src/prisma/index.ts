import { PrismaClient } from ".prisma/client";
import { Player } from "../types/player";

export interface Query {
    fantasyTeamPlayers: <T = Player[]>(args: { fantasyTeamId: number }) => Promise<T>;
}

export interface Context {
    prisma: PrismaClient;
}