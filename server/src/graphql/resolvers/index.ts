import userQueries from "./queries/user.queries";
import fantasyTeamQueries from "./queries/fantasyTeam.queries";
import types from "./types.resolver";
import fantasyTeamMutations from "./mutations/fantasyTeam.mutations";
import fantasyLeagueQueries from "./queries/fantasyLeague.queries";

const resolvers = {
  Query: {
    ...fantasyTeamQueries,
    ...userQueries,
    ...fantasyLeagueQueries,
  },
  Mutation: {
    ...fantasyTeamMutations,
  },
  ...types,
};

export default resolvers;
