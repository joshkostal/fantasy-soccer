import { LineupInput } from "../../../types/fantasy";
import { Context } from '@josh-kostal/prisma';
import { PrismaClient } from "@josh-kostal/prisma/lib/client";

const fantasyTeamMutations = {
  updateLineup: async (
    _root,
    { fantasyPlayerMatches },
    { prisma }: Context
  ) => {
    return await Promise.all(
      fantasyPlayerMatches.map((fantasyPlayerMatch: LineupInput) =>
        updatePlayerPosition(
          prisma as unknown as PrismaClient,
          fantasyPlayerMatch
        )
      )
    );
  },
};

const updatePlayerPosition = async (
  prisma: PrismaClient,
  fantasyPlayerMatch: LineupInput
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
