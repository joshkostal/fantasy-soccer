import { Player } from "../types/player";

export interface Query {
  players: <T = Player[]>(args: { where?: number }) => Promise<T>;
}
