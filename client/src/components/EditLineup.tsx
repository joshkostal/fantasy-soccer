import { gql, useMutation } from "@apollo/client";
import { FantasyPlayerMatch, LineupInput } from "@graphql-types/fantasy";
import { IonCol, IonContent, IonRow } from "@ionic/react";
import { useEffect, useState } from "react";
import {
  EPosition,
  InterchangeablePositions,
  PositionClassMapping,
} from "src/types/player";

interface EditLineupProps {
  currentPlayer: FantasyPlayerMatch;
  playersToSwitchWith: FantasyPlayerMatch[];
  onSave: (data: LineupInput[]) => void;
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
  const [updateLineup] = useMutation(gql`
    mutation UpdateLineup($fantasyPlayerMatches: LineupInput!) {
      updateLineup(fantasyPlayerMatches: $fantasyPlayerMatches)
    }
  `);

  const [updatedData, setUpdatedData] = useState([] as LineupInput[]);
  useEffect(() => {
    if (updatedData.length) onSave(updatedData);
  }, [updatedData]);

  const saveLineup = ({
    playerToSwitchWith,
    position,
  }: EditLineupSelection) => {
    const updatedData: LineupInput[] = [];

    if (position) {
      updatedData.push({
        positionId: position,
        playerMatchId: currentPlayer.playerMatchId,
        fantasyTeamId: currentPlayer.fantasyTeamId,
      });
    } else if (playerToSwitchWith) {
      updatedData.push(
        ...[
          {
            positionId: null,
            playerMatchId: currentPlayer.playerMatchId,
            fantasyTeamId: currentPlayer.fantasyTeamId,
          },
          {
            positionId: playerToSwitchWith.position?.id || null,
            playerMatchId: playerToSwitchWith.playerMatchId,
            fantasyTeamId: playerToSwitchWith.fantasyTeamId,
          },
        ]
      );
    }

    setUpdatedData(updatedData);
    updateLineup({ variables: { fantasyPlayerMatches: updatedData } });
  };

  // If starter, show valid positions to switch to AND valid players to switch with
  const renderStartList = () => {
    const positionsToDisplay =
      InterchangeablePositions[currentPlayer.position?.id as EPosition];

    return (
      <>
        {positionsToDisplay.map((position) => {
          <IonRow key={position} onClick={() => saveLineup({ position })}>
            <IonCol
              size="1.5"
              className={`position-tile ${
                PositionClassMapping[position as EPosition]
              }`}
            >
              {EPosition[position]}
            </IonCol>
          </IonRow>;
        })}
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
              playerToSwitchWith.playerMatch.player.position.id as EPosition
            ]
          }`}
        >
          {playerToSwitchWith.playerMatch.player.position.shortName}
        </IonCol>
        <IonCol size="10.5" className="player-name-col">
          {playerToSwitchWith.playerMatch.player.displayName}
        </IonCol>
      </IonRow>
    ));
  };

  return (
    <>
      <IonContent>{currentPlayer.playerMatch.player.displayName}</IonContent>
      {currentPlayer.position ? renderStartList() : renderReserveList()}
    </>
  );
};

export default EditLineup;
