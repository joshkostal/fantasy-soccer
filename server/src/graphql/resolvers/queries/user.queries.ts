const userQueries = {
  user: (_root, { userId }, { prisma }: Context) =>
    prisma.user.findFirst({
      where: {
        id: userId,
      },
      select: {
        name: true,
        fantasyTeams: {
          select: {
            id: true,
            name: true,
            fantasyLeague: true,
          },
        },
      },
    }),
};

export default userQueries;
