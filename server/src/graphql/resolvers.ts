import { GraphQLScalarType } from "graphql";

const resolvers = {
  Query: {
    fantasyTeamPlayers: (_root, args, ctx) =>
      ctx.prisma.query.players.findMany({
        where: {
          fantasyTeams: {
            some: {
              fantasyTeamId: args.fantasyTeamId,
            },
          },
        },
      }),
  },
  DateTime: new GraphQLScalarType({
    name: "DateTime",
    description: "A date and time, represented as an ISO-8601 string",
    serialize: (value: Date) => value.toISOString(),
    parseValue: (value: string) => new Date(value),
    parseLiteral: (ast) => new Date(ast.value),
  }),
};

export default resolvers;
