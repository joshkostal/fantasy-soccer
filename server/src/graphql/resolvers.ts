import { GraphQLScalarType } from "graphql";
import { Context } from "../prisma";

const resolvers = {
  Query: {
    fantasyTeamPlayers: (_root, args, ctx: Context) =>
      ctx.prisma.player.findMany({
        where: {
          fantasyTeams: {
            some: {
              fantasyTeamId: args.fantasyTeamId,
            },
          },
        },
        select: {
          id: true,
          name: true,
          team: true,
          position: true,
          // ALIAS
          matches: {
            where: {
              match: {
                dateTime: {
                  gte: new Date(),
                },
              },
            },
            orderBy: {
              match: {
                dateTime: "desc",
              },
            },
            take: 1,
            select: {
              match: {
                select: {
                  homeTeam: true,
                  awayTeam: true,
                },
              },
              totalPoints: true,
              fantasyPlayerMatches: {
                where: {
                  fantasyTeamPlayer: {
                    fantasyTeamId: args.fantasyTeamId,
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
