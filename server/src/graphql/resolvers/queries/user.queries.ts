import { Context } from "../../../prisma";

const userQueries = {
  user: (_root, args, { prisma }: Context) =>
    prisma.user.findFirst({
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
