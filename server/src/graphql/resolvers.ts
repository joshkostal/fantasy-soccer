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
          matches: {
            as: "nextMatch",
            where: {
              dateTime: {
                gte: new Date(),
              },
            },
            orderBy: {
              dateTime: "desc",
            },
            take: 1,
            select: {
              match: {
                homeTeam: {
                  id: true,
                  shortName: true,
                },
                awayTeam: {
                  id: true,
                  shortName: true,
                },
              },
              totalPoints: true,
              fantasyPlayerMatches: {
                where: {
                  fantasyTeamPlayer: {
                    fantasyTeamId: {
                      eq: args.fantasyTeamId,
                    },
                  },
                },
                select: {
                  isStarter: true,
                },
              },
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
