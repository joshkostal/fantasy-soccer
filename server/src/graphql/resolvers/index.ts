import fantasyLeagueQueries from "./fantasyLeague.resolver";
import fantasyTeamQueries from "./fantasyTeam.resolver";
import types from "./types.resolver";

const resolvers = {
  Query: {
    ...fantasyTeamQueries,
    ...fantasyLeagueQueries,
  },
  ...types,
};

export default resolvers;
