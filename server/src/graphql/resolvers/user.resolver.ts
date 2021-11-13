import { Context } from "../../prisma";

const userQueries = {
  user: (_root, args, ctx: Context) =>
    ctx.prisma.user.findFirst({
      where: {
        id: args.userId,
      },
      select: {
        name: true,
        fantasyTeams: {
          select: {
            id: true,
            name: true,
            fantasyLeague: true
          }
        }
      },
    }),
};

export default userQueries;
