import { Context } from "../../prisma";

const fantasyTeamQueries = {
  // redesign this
  fantasyTeamPlayers: (_root, args, ctx: Context) =>
    ctx.prisma.player.findMany({
      where: {
        fantasyTeams: {
          some: {
            fantasyTeamId: args.fantasyTeamId,
          },
        },
      },
      orderBy: {
        positionId: "asc",
      },
      select: {
        id: true,
        displayName: true,
        team: true,
        position: true,
        // ALIASES NOT YET SUPPORTED BY PRISMA
        fantasyTeams: {
          where: {
            id: args.fantasyTeamId,
          },
          select: {
            fantasyTeam: {
              select: {
                id: true,
                name: true,
                fantasyLeague: {
                  select: {
                    id: true,
                    name: true,
                  },
                },
              },
            },
          },
        },
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
            fantasyPlayerMatches: {
              where: {
                fantasyTeamId: args.fantasyTeamId,
              },
              select: {
                totalPoints: true,
                isStarter: true,
              },
            },
          },
        },
      },
    }),
};

export default fantasyTeamQueries;
