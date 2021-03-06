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
      fantasyTeam(fantasyTeamId: ${match.params.fantasyTeamId}) {
        id,
        name,
        fantasyLeague {
          id,
          name
        },
        fantasyPlayerMatches {
          totalPoints,
          position {
            id,
            shortName
          },
          fantasyTeam {
            id
          },
          playerMatch {
            id
            player {
              id,
              displayName,
              team {
                id,
              },
              position {
                id,
                shortName
              }
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
    }
  `;

  const { loading, error, data, refetch } = useQuery(TEAM_PLAYERS);

  if (loading) return <IonLoading isOpen={loading}></IonLoading>;
  if (error || !data.fantasyTeam) return <p>Error</p>;

  return (
    <IonPage>
      <Header teamName={data.fantasyTeam.name} />
      <TabBar
        leagueId={data.fantasyTeam.fantasyLeague.id}
        teamId={data.fantasyTeam.id}
      />
      <Roster team={data.fantasyTeam} onRosterChange={() => refetch()} />
    </IonPage>
  );
};

export default Team;
