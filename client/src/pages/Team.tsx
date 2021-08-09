import { gql, useQuery } from "@apollo/client";
import { IonPage } from "@ionic/react";
import Header from "../components/Header";
import Roster from "../components/Roster";
import "../styles/Team.css";
import "../styles/variables.css";

const Team: React.FC = () => {
  const TEAM_PLAYERS = gql`
    query GetTeamPlayers {
      players {
        id,
        name,
        team {
          id,
          shortName
        },
        position {
          id,
          shortName
        },
        nextMatch {
          isStarter,
          points,
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
      <Roster roster={data.players} />
    </IonPage>
  );
};

export default Team;
