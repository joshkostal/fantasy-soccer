import {
  FantasyLeagueStanding,
  FantasyTeam,
  FantasyLeague,
} from "../../../types/fantasy";

const fantasyLeagueQueries = {
  fantasyLeagueStandings: async (
    _root,
    { fantasyLeagueId },
    { prisma }: Context
  ) => {
    const leagueData = (await prisma.fantasyLeague.findFirst({
      where: {
        id: fantasyLeagueId,
      },
      select: {
        fantasyTeams: {
          select: {
            id: true,
            name: true,
            teamMatches: {
              select: {
                isWinner: true,
                match: {
                  select: {
                    teamMatches: {
                      select: {
                        teamId: true,
                        teamScore: true,
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    })) as unknown as FantasyLeague;

    return leagueData.fantasyTeams.map((team: FantasyTeam) => {
      return {
        leaguePoints: team.teamMatches.filter((tm) => tm.isWinner).length * 3,
        matchPointsAgainst: team.teamMatches.reduce((sum, tm) => {
          return (
            sum +
            tm.match.teamMatches.find((_tm) => _tm.teamId !== team.id).teamScore
          );
        }, 0),
        matchPointsFor: team.teamMatches.reduce((sum, tm) => {
          return (
            sum +
            tm.match.teamMatches.find((_tm) => _tm.teamId === team.id).teamScore
          );
        }, 0),
        teamId: team.id,
        teamName: team.name,
      } as FantasyLeagueStanding;
    });
  },
};

export default fantasyLeagueQueries;
