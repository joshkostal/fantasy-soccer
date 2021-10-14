import { GraphQLScalarType } from "graphql";

const resolvers = {
  Query: {
    fantasyTeamPlayers: (_root, args, ctx) =>
      ctx.prisma.player.findMany({
        where: {
          fantasyTeamPlayers: {
            some: {
              fantasyTeamId: args.fantasyTeamId,
            },
          },
        },
        select: {
          team: true,
          position: true,
          matches: true,
          // matches: {
          //   as: "nextMatch",
          //   where: {
          //     dateTime: {
          //       gt: new Date(),
          //     },
          //   },
          //   orderBy: {
          //     dateTime: "desc",
          //   },
          //   take: 1,
          // },
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
