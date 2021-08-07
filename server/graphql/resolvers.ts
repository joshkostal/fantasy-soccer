import { samplePlayers } from "./mock-data";

export const resolvers = {
  Query: {
    players: () => samplePlayers,
  },
};
