import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonRow,
} from "@ionic/react";
import "../styles/Team.css";
import { EPosition, PositionClassMapping } from "../types/player";
import { Player } from "@graphql-types/player";

interface RosterProps {
  roster: Player[];
}

const Roster: React.FC<RosterProps> = ({ roster }: RosterProps) => {
  const rosterTable = (isStarter: boolean) =>
    roster
      .filter(
        (player) =>
          player.matches[0]?.fantasyPlayerMatches[0]?.isStarter == isStarter
      )
      .map((player) => (
        <IonRow key={player.id}>
          <IonCol
            size="1.5"
            className={`position-tile ${
              PositionClassMapping[player.position.id as EPosition]
            }`}
          >
            {player.position.shortName}
          </IonCol>
          <IonCol size="6" className="player-name-col">
            {player.displayName}
          </IonCol>
          <IonCol size="3.5">
            {player.matches[0].match.homeTeam.id !== player.team.id && "@"}
            {player.matches[0].match.homeTeam.id === player.team.id
              ? player.matches[0].match.homeTeam.shortName
              : player.matches[0].match.awayTeam.shortName}
          </IonCol>
          <IonCol size="1" className="ion-text-right">
            {player.matches[0].fantasyPlayerMatches[0].totalPoints}
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
    </IonContent>
  );
};

export default Roster;
