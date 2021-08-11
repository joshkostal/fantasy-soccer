import { samplePlayers } from "./mock-data";

const resolvers = {
  Query: {
    players: () => samplePlayers,
    fantasyTeamPlayers: (_, {fantasyTeamId}) => samplePlayers.filter(p => p.fantasyTeam.id == fantasyTeamId),
  }
};

export default resolvers;
