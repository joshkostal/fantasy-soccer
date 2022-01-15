import { Context } from "../../../prisma";

const fantasyTeamQueries = {
  fantasyTeam: async (_root, args, { prisma }: Context) => {
    const nextMatch = await prisma.match.findFirst({
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
        matchWeek: true,
      },
    });

    return prisma.fantasyTeam.findFirst({
      where: {
        id: args.fantasyTeamId,
      },
      select: {
        id: true,
        name: true,
        fantasyLeague: {
          select: {
            id: true,
            name: true,
          },
        },
        fantasyPlayerMatches: {
          where: {
            fantasyTeamId: args.fantasyTeamId,
            AND: {
              playerMatch: {
                match: {
                  matchWeek: nextMatch.matchWeek,
                },
              },
            },
          },
          orderBy: {
            playerMatch: {
              player: {
                positionId: "asc",
              },
            },
          },
          select: {
            totalPoints: true,
            position: true,
            playerMatch: {
              select: {
                id: true,
                player: {
                  select: {
                    id: true,
                    displayName: true,
                    position: true,
                    team: true,
                  },
                },
                match: {
                  select: {
                    homeTeam: true,
                    awayTeam: true,
                  },
                },
              },
            },
          },
        },
      },
    });
  },
};

export default fantasyTeamQueries;
