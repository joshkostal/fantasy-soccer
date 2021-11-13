import userQueries from "./user.resolver";
import fantasyTeamQueries from "./fantasyTeam.resolver";
import types from "./types.resolver";

const resolvers = {
  Query: {
    ...fantasyTeamQueries,
    ...userQueries,
  },
  ...types,
};

export default resolvers;
