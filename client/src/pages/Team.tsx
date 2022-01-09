import { gql, useQuery } from "@apollo/client";
import { FantasyTeam, LineupInput } from "@graphql-types/fantasy";
import { Position } from "@graphql-types/player";
import { IonLoading, IonPage } from "@ionic/react";
import { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router";
import TabBar from "src/components/TabBar";
import { EPosition } from "src/types/player";
import Header from "../components/Header";
import Roster from "../components/Roster";

interface TeamProps extends RouteComponentProps<{ fantasyTeamId: string }> {}

const Team: React.FC<TeamProps> = ({ match }: TeamProps) => {
  const [team, setTeam] = useState({} as FantasyTeam);
  useEffect(() => setTeam(data));

  const TEAM_PLAYERS = gql`
    query GetTeamPlayers {
      fantasyTeam(fantasyTeamId: ${match.params.fantasyTeamId}) {
        id,
        name,
        fantasyLeague {
          id,
          name
        },
        players {
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
          }
        },
        fantasyPlayerMatches {
          totalPoints,
          position {
            id,
            shortName
          },
          playerMatch {
            id
            player {
              id,
              displayName,
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

  const { loading, error, data } = useQuery(TEAM_PLAYERS);

  if (loading) return <IonLoading isOpen={loading}></IonLoading>;
  if (error || !data.fantasyTeam) return <p>Error</p>;

  const onRosterChange = (updatedData: LineupInput[]) => {
    const dataToUpdate = team;

    updatedData.forEach((player) => {
      const playerToUpdate = dataToUpdate.fantasyPlayerMatches.find(
        (x) =>
          x.fantasyTeamId === player.fantasyTeamId &&
          x.playerMatchId === player.playerMatchId
      );

      if (!playerToUpdate) return;

      if (player.positionId) {
        playerToUpdate.position = {
          id: player.positionId,
          shortName: EPosition[player.positionId],
        } as Position;
      } else {
        playerToUpdate.position = undefined;
      }
    });

    setTeam(dataToUpdate);
  };

  return (
    <IonPage>
      <Header leagueName={data.fantasyTeam.fantasyLeague.name} />
      <TabBar
        leagueId={data.fantasyTeam.fantasyLeague.id}
        teamId={data.fantasyTeam.id}
      />
      <Roster
        team={data.fantasyTeam}
        onRosterChange={(data: LineupInput[]) => onRosterChange(data)}
      />
    </IonPage>
  );
};

export default Team;
