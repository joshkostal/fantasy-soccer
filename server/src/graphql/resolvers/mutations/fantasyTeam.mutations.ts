import { Context } from "../../../prisma";
import { FantasyPlayerMatch } from "../../../types/fantasy";

const fantasyTeamMutations = {
  updateLineup: async (
    _root,
    args,
    { prisma }: Context
  ) => {
    console.log(args);
    return await Promise.all(
      args.fantasyPlayerMatches.map((fantasyPlayerMatch: FantasyPlayerMatch) =>
        updatePlayerPosition(prisma, fantasyPlayerMatch)
      )
    );
  },
};

const updatePlayerPosition = async (
  prisma,
  fantasyPlayerMatch: FantasyPlayerMatch
) => {
  try {
    await prisma.fantasyPlayerMatch.update({
      where: {
        playerMatchId_fantasyTeamId: {
          playerMatchId: fantasyPlayerMatch.playerMatchId,
          fantasyTeamId: fantasyPlayerMatch.fantasyTeamId,
        },
      },
      data: {
        isStarter: fantasyPlayerMatch.isStarter,
        positionId: fantasyPlayerMatch.positionId,
      },
    });

    return true;
  } catch {
    // RecordNotFound exception is thrown if record does not exist.
    return false;
  }
};

export default fantasyTeamMutations;
