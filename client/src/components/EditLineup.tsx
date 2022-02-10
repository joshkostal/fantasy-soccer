import { gql, useMutation } from "@apollo/client";
import { FantasyPlayerMatch, LineupInput } from "@graphql-types/fantasy";
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonLoading,
  IonRow,
} from "@ionic/react";
import { useEffect, useState } from "react";
import {
  EPosition,
  InterchangeablePositions,
  PositionClassMapping,
} from "src/types/player";

interface EditLineupProps {
  currentPlayer: FantasyPlayerMatch;
  playersToSwitchWith: FantasyPlayerMatch[];
  onSave: () => void;
}

interface EditLineupSelection {
  playerToSwitchWith?: FantasyPlayerMatch;
  position?: number;
}

const EditLineup: React.FC<EditLineupProps> = ({
  currentPlayer,
  playersToSwitchWith,
  onSave,
}: EditLineupProps) => {
  const [updateLineup, { data, loading, error }] = useMutation(gql`
    mutation UpdateLineup($fantasyPlayerMatches: [LineupInput!]!) {
      updateLineup(fantasyPlayerMatches: $fantasyPlayerMatches)
    }
  `);

  const [, setUpdatedData] = useState([] as LineupInput[]);

  useEffect(() => {
    if (data && data.updateLineup) onSave();
  });

  const saveLineup = ({
    playerToSwitchWith,
    position,
  }: EditLineupSelection) => {
    const lineupUpdate: LineupInput[] = [];

    if (position) {
      lineupUpdate.push({
        positionId: position,
        playerMatchId: currentPlayer.playerMatch.id,
        fantasyTeamId: currentPlayer.fantasyTeam.id,
      });
    } else if (playerToSwitchWith) {
      lineupUpdate.push(
        ...[
          {
            positionId: playerToSwitchWith.position?.id || null,
            playerMatchId: currentPlayer.playerMatch.id,
            fantasyTeamId: currentPlayer.fantasyTeam.id,
          },
          {
            positionId: currentPlayer.position?.id || null,
            playerMatchId: playerToSwitchWith.playerMatch.id,
            fantasyTeamId: playerToSwitchWith.fantasyTeam.id,
          },
        ]
      );
    }

    setUpdatedData(lineupUpdate);
    updateLineup({ variables: { fantasyPlayerMatches: lineupUpdate } });
  };

  // If starter, show valid positions to switch to AND valid players to switch with
  const renderStartList = () => {
    const positionsToDisplay =
      InterchangeablePositions[currentPlayer.position?.id as EPosition];

    return (
      <>
        {positionsToDisplay.map((position) => {
          return (
            <IonRow
              key={`position-${position}`}
              onClick={() => saveLineup({ position })}
            >
              <IonCol
                size="1.5"
                className={`position-tile ${
                  PositionClassMapping[position as EPosition]
                }`}
              >
                {EPosition[position]}
              </IonCol>
            </IonRow>
          );
        })}
        <hr />
        {renderReserveList()}
      </>
    );
  };

  // If reserve, show valid players to switch with
  const renderReserveList = () => {
    return playersToSwitchWith.map((playerToSwitchWith: FantasyPlayerMatch) => (
      <IonRow
        key={playerToSwitchWith.playerMatch.id}
        onClick={() => saveLineup({ playerToSwitchWith })}
      >
        <IonCol
          size="1.5"
          className={`position-tile ${
            PositionClassMapping[
              (playerToSwitchWith.position?.id ||
                playerToSwitchWith.playerMatch.player.position.id) as EPosition
            ]
          }`}
        >
          {playerToSwitchWith.position?.shortName ||
            playerToSwitchWith.playerMatch.player.position.shortName}
        </IonCol>
        <IonCol size="6" className="player-name-col">
          {playerToSwitchWith.playerMatch.player.displayName}
        </IonCol>
        <IonCol size="4.5">
          {playerToSwitchWith.playerMatch.match.homeTeam.id !==
            playerToSwitchWith.playerMatch.player.team.id && "@"}
          {playerToSwitchWith.playerMatch.match.homeTeam.id ===
          playerToSwitchWith.playerMatch.player.team.id
            ? playerToSwitchWith.playerMatch.match.awayTeam.shortName
            : playerToSwitchWith.playerMatch.match.homeTeam.shortName}
        </IonCol>
      </IonRow>
    ));
  };

  if (loading) return <IonLoading isOpen={loading}></IonLoading>;
  if (error || (data && !data.updateLineup)) return <p>Error</p>;

  return (
    <IonContent>
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>
            {currentPlayer.playerMatch.player.displayName}
          </IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <IonGrid>
            {currentPlayer.position ? renderStartList() : renderReserveList()}
          </IonGrid>
        </IonCardContent>
      </IonCard>
    </IonContent>
  );
};

export default EditLineup;
