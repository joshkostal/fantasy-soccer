import { Context } from "../../prisma";

const fantasyLeagueQueries = {
  fantasyLeagues: (_root, args, ctx: Context) =>
    ctx.prisma.fantasyTeam.findMany({
      where: {
        ownerId: args.userId,
      },
      select: {
        fantasyLeague: true,
        id: true,
        name: true,
      },
    }),
};

export default fantasyLeagueQueries;
