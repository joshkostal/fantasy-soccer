import { samplePlayers } from "./mock-data";

const resolvers = {
  Query: {
    players: () => samplePlayers,
  },
};

export default resolvers;
