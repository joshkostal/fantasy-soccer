import { gql, useQuery } from "@apollo/client";
import { IonLoading, IonPage } from "@ionic/react";
import { RouteComponentProps } from "react-router";
import TabBar from "src/components/TabBar";
import Header from "../components/Header";
import Roster from "../components/Roster";

interface TeamProps extends RouteComponentProps<{ fantasyTeamId: string }> {}

const Team: React.FC<TeamProps> = ({ match }: TeamProps) => {
  const TEAM_PLAYERS = gql`
    query GetTeamPlayers {
      fantasyTeamPlayers(fantasyTeamId: ${match.params.fantasyTeamId}) {
        id,
        displayName,
        team {
          id,
        },
        position {
          id,
          shortName
        },
        fantasyTeams {
          fantasyTeam {
            id,
            fantasyLeague {
              name,
              id
            }
          }
        },
        matches {
          fantasyPlayerMatches {
            totalPoints,
            isStarter
          },
          match {
            homeTeam {
              id,
              shortName
            },
            awayTeam {
              id,
              shortName
            }
          }
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(TEAM_PLAYERS);

  if (loading) return <IonLoading isOpen={loading}></IonLoading>;
  if (error) return <p>Error</p>;

  return (
    <IonPage>
      <Header
        leagueName={
          data.fantasyTeamPlayers[0]?.fantasyTeams[0]?.fantasyTeam.fantasyLeague
            .name
        }
      />
      <TabBar
        fantasyMatchId={1}
        leagueId={
          data.fantasyTeamPlayers[0]?.fantasyTeams[0]?.fantasyTeam
            .fantasyLeague.id
        }
        teamId={data.fantasyTeamPlayers[0]?.fantasyTeams[0]?.fantasyTeam.id}
      />
      <Roster roster={data.fantasyTeamPlayers} />
    </IonPage>
  );
};

export default Team;
