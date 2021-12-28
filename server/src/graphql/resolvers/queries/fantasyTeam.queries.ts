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
            isStarter: true,
            totalPoints: true,
            playerMatch: {
              select: {
                player: {
                  select: {
                    id: true,
                  },
                },
                match: {
                  select: {
                    homeTeam: {
                      select: {
                        id: true,
                        shortName: true,
                      },
                    },
                    awayTeam: {
                      select: {
                        id: true,
                        shortName: true,
                      },
                    },
                  },
                },
              },
            },
          },
        },
        players: {
          select: {
            player: {
              select: {
                id: true,
                displayName: true,
                team: true,
                position: true,
              },
            },
          },
        },
      },
    });
  },
};

export default fantasyTeamQueries;
