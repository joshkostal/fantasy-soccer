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
import {
  FantasyPlayerMatch,
  FantasyTeam,
  LineupInput,
} from "@graphql-types/fantasy";
import { useState } from "react";
import EditLineup from "./EditLineup";

interface RosterProps {
  team: FantasyTeam;
  onRosterChange: (data: LineupInput[]) => void;
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

  const onSave = (updatedData: LineupInput[]) => {
    setShowModal(false);
    setCurrentPlayer({} as FantasyPlayerMatch);
    setPlayersToSwitchWith([]);
    onRosterChange(updatedData);
  };

  const onEdit = (selectedPlayer: FantasyPlayerMatch) => {
    setShowModal(true);
    setCurrentPlayer(selectedPlayer);

    const playersToSwitchWith = team.fantasyPlayerMatches.filter(
      (fantasyPlayer) =>
        (!selectedPlayer.position &&
          InterchangeablePositions[
            selectedPlayer.playerMatch.player.position.id as EPosition
          ].includes(fantasyPlayer.position?.id as EPosition)) ||
        (selectedPlayer.position?.id &&
          InterchangeablePositions[
            selectedPlayer.position?.id as EPosition
          ].includes(fantasyPlayer.position?.id as EPosition))
    );

    setPlayersToSwitchWith(playersToSwitchWith);
  };

  const rosterTable = (isStarter: boolean) =>
    team.fantasyPlayerMatches
      .filter(
        (fantasyPlayerMatch) => !!fantasyPlayerMatch.position?.id === isStarter
      )
      .map((fantasyPlayerMatch) => {
        const fantasyPlayer = team.players.find(
          (p) => p.player.id === fantasyPlayerMatch.playerMatch.player.id
        );
        return (
          <IonRow
            key={fantasyPlayer?.id}
            onClick={() => onEdit(fantasyPlayerMatch)}
          >
            <IonCol
              size="1.5"
              className={`position-tile ${
                PositionClassMapping[
                  (fantasyPlayerMatch.position?.id ||
                    fantasyPlayer?.player.position.id) as EPosition
                ]
              }`}
            >
              {fantasyPlayerMatch.position?.shortName ||
                fantasyPlayer?.player.position.shortName}
            </IonCol>
            <IonCol size="6" className="player-name-col">
              {fantasyPlayer?.player.displayName}
            </IonCol>
            <IonCol size="3.5">
              {fantasyPlayerMatch.playerMatch.match.homeTeam.id !==
                fantasyPlayer?.player.team.id && "@"}
              {fantasyPlayerMatch.playerMatch.match.homeTeam.id ===
              fantasyPlayer?.player.team.id
                ? fantasyPlayerMatch.playerMatch.match.homeTeam.shortName
                : fantasyPlayerMatch.playerMatch.match.awayTeam.shortName}
            </IonCol>
            <IonCol size="1" className="ion-text-right">
              {fantasyPlayerMatch.totalPoints}
            </IonCol>
          </IonRow>
        );
      });

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
        initialBreakpoint={0.5}
        breakpoints={[0.5, 1]}
      >
        <EditLineup
          currentPlayer={currentPlayer}
          playersToSwitchWith={playersToSwitchWith}
          onSave={(data) => onSave(data)}
        />
      </IonModal>
    </IonContent>
  );
};

export default Roster;
