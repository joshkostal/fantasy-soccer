import { gql, useQuery } from "@apollo/client";
import { IonPage } from "@ionic/react";
import TabBar from "src/components/TabBar";
import Header from "../components/Header";
import Roster from "../components/Roster";

const fantasyTeamId = 1;

const Team: React.FC = () => {
  const TEAM_PLAYERS = gql`
    query GetTeamPlayers {
      fantasyTeamPlayers(fantasyTeamId: ${fantasyTeamId}) {
        id,
        displayName,
        team {
          id,
        },
        position {
          id,
          shortName
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

  if (loading) return <p>Loading</p>;
  if (error) return <p>Error</p>;

  return (
    <IonPage>
      <Header />
      <TabBar />
      <Roster roster={data.fantasyTeamPlayers} />
    </IonPage>
  );
};

export default Team;
