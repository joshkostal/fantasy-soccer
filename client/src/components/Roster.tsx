import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonModal,
  IonRow,
} from "@ionic/react";
import "../styles/Team.css";
import {
  EPosition,
  InterchangeablePositions,
  PositionClassMapping,
} from "../types/player";
import { FantasyPlayerMatch, FantasyTeam } from "@graphql-types/fantasy";
import { useState } from "react";
import EditLineup from "./EditLineup";

interface RosterProps {
  team: FantasyTeam;
  onRosterChange: () => void;
}

const Roster: React.FC<RosterProps> = ({
  team,
  onRosterChange,
}: RosterProps) => {
  const [showModal, setShowModal] = useState(false);
  const [currentPlayer, setCurrentPlayer] = useState({} as FantasyPlayerMatch);
  const [playersToSwitchWith, setPlayersToSwitchWith] = useState(
    [] as FantasyPlayerMatch[]
  );

  const onModalClose = (edited: boolean) => {
    setShowModal(false);

    if (edited) onRosterChange();
  };

  const onEdit = (selectedPlayer: FantasyPlayerMatch) => {
    setShowModal(true);
    setCurrentPlayer(selectedPlayer);

    const playersToSwitchWith = team.fantasyPlayerMatches.filter(
      (fantasyPlayer) =>
        // Don't get the same player
        fantasyPlayer.playerMatch.player.id !=
          selectedPlayer.playerMatch.player.id &&
        // If the selected player is on the bench, get the starters that fit the position
        ((!selectedPlayer.position &&
          arePositionsSwappable(
            selectedPlayer.playerMatch.player.position.id as EPosition,
            fantasyPlayer.position?.id as EPosition
          )) ||
          // If the selected player is a starter, get the starters or bench players that fit the position
          (!fantasyPlayer.position &&
            selectedPlayer.position &&
            arePositionsSwappable(
              selectedPlayer.position?.id as EPosition,
              fantasyPlayer.playerMatch.player.position.id as EPosition
            )))
    );

    setPlayersToSwitchWith(playersToSwitchWith);
  };

  const arePositionsSwappable = (position1: EPosition, position2: EPosition) =>
    position1 == position2 ||
    InterchangeablePositions[position1].includes(+position2);

  const rosterTable = (isStarter: boolean) =>
    team.fantasyPlayerMatches
      .filter(
        (fantasyPlayerMatch) => !!fantasyPlayerMatch.position?.id === isStarter
      )
      .map((fantasyPlayerMatch) => (
        <IonRow
          key={fantasyPlayerMatch.playerMatch.player.id}
          onClick={() => onEdit(fantasyPlayerMatch)}
        >
          <IonCol
            size="1.5"
            className={`position-tile ${
              PositionClassMapping[
                (fantasyPlayerMatch.position?.id ||
                  fantasyPlayerMatch.playerMatch.player.position
                    .id) as EPosition
              ]
            }`}
          >
            {fantasyPlayerMatch.position?.shortName ||
              fantasyPlayerMatch.playerMatch.player.position.shortName}
          </IonCol>
          <IonCol size="6" className="player-name-col">
            {fantasyPlayerMatch.playerMatch.player.displayName}
          </IonCol>
          <IonCol size="3.5">
            {fantasyPlayerMatch.playerMatch.match.homeTeam.id !==
              fantasyPlayerMatch.playerMatch.player.team.id && "@"}
            {fantasyPlayerMatch.playerMatch.match.homeTeam.id ===
            fantasyPlayerMatch.playerMatch.player.team.id
              ? fantasyPlayerMatch.playerMatch.match.awayTeam.shortName
              : fantasyPlayerMatch.playerMatch.match.homeTeam.shortName}
          </IonCol>
          <IonCol size="1" className="ion-text-right">
            {fantasyPlayerMatch.totalPoints}
          </IonCol>
        </IonRow>
      ));

  return (
    <IonContent>
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>Starters</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <IonGrid>{rosterTable(true)}</IonGrid>
        </IonCardContent>
      </IonCard>
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>Bench</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <IonGrid>{rosterTable(false)}</IonGrid>
        </IonCardContent>
      </IonCard>
      <IonModal
        isOpen={showModal}
        onDidDismiss={() => onModalClose(false)}
        swipeToClose={true}
        initialBreakpoint={0.5}
        breakpoints={[0.5, 1]}
      >
        <EditLineup
          currentPlayer={currentPlayer}
          playersToSwitchWith={playersToSwitchWith}
          onSave={() => onModalClose(true)}
        />
      </IonModal>
    </IonContent>
  );
};

export default Roster;
