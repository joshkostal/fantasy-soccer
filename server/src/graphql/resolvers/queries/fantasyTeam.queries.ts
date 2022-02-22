import { Context } from "../../../prisma";

const fantasyTeamQueries = {
  fantasyTeam: async (_root, { fantasyTeamId }, { prisma }: Context) => {
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
        id: fantasyTeamId,
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
            fantasyTeamId: fantasyTeamId,
            AND: {
              playerMatch: {
                match: {
                  matchWeek: nextMatch.matchWeek,
                },
              },
            },
          },
          orderBy: [
            {
              positionId: "asc",
            },
            {
              playerMatch: {
                player: {
                  positionId: "asc",
                },
              },
            },
          ],
          select: {
            totalPoints: true,
            position: true,
            fantasyTeam: true,
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
