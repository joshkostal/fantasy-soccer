import { gql, useMutation } from "@apollo/client";
import { FantasyPlayerMatch, LineupInput } from "@graphql-types/fantasy";
import { IonCol, IonContent, IonLoading, IonModal, IonRow } from "@ionic/react";
import { useState } from "react";
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
}: EditLineupProps) => {
  const [showModal, setShowModal] = useState(true);

  const [mutateFunction, { data, loading, error }] =
    useMutation(gql`mutation UpdateLineup (fantasyPlayerMatches: $LineupInput!) {
      updateLineup(fantasyPlayerMatches: $fantasyPlayerMatches)
    }`);

  if (loading) return <IonLoading isOpen={loading}></IonLoading>;
  if (error || !data) return <p>Error: {error}</p>;
  if (data) setShowModal(false);

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
            positionId: playerToSwitchWith.positionId || null,
            playerMatchId: playerToSwitchWith.playerMatchId,
            fantasyTeamId: playerToSwitchWith.fantasyTeamId,
          },
        ]
      );
    }

    mutateFunction({ variables: { fantasyPlayerMatches: updatedData } });
  };

  // If starter, show valid positions to switch to AND valid players to switch with
  const renderStartList = () => {
    const positionsToDisplay =
      InterchangeablePositions[currentPlayer.positionId as EPosition];

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
        key={playerToSwitchWith.playerMatchId}
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
    <IonModal isOpen={showModal} initialBreakpoint={0.5} breakpoints={[0.5, 1]}>
      <IonContent>{currentPlayer.playerMatch.player.displayName}</IonContent>
      {currentPlayer.positionId ? renderStartList() : renderReserveList()}
    </IonModal>
  );
};

export default EditLineup;
