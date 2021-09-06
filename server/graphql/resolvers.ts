import { samplePlayers } from "./mock-data";
import { GraphQLScalarType } from "graphql";

const resolvers = {
  Query: {
    players: () => samplePlayers,
    // players: (root, args, ctx, info) => ctx.prisma.query.players({}, info),
    fantasyTeamPlayers: (_, { fantasyTeamId }) =>
      samplePlayers.filter(p => p.fantasyTeam.id == fantasyTeamId),
  },
  DateTime: new GraphQLScalarType({
    name: "DateTime",
    description: "A date and time, represented as an ISO-8601 string",
    serialize: (value) => value.toISOString(),
    parseValue: (value) => new Date(value),
    parseLiteral: (ast) => new Date(ast.value),
  }),
};

export default resolvers;
