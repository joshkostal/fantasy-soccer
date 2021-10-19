import { Context } from "../../prisma";

const fantasyTeamQueries = {
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
};

export default fantasyTeamQueries;
