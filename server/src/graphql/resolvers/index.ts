import userQueries from "./queries/user.queries";
import fantasyTeamQueries from "./queries/fantasyTeam.queries";
import types from "./types.resolver";
import fantasyTeamMutations from "./mutations/fantasyTeam.mutations";

const resolvers = {
  Query: {
    ...fantasyTeamQueries,
    ...userQueries,
  },
  Mutation: {
    ...fantasyTeamMutations,
  },
  ...types,
};

export default resolvers;
