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
import { EPosition, Player, PositionClassMapping } from "../models/team";
import "../styles/Team.css";
import "../styles/index.css";
import "../styles/variables.css";

interface RosterProps {
  roster: Player[];
}

const Roster: React.FC<RosterProps> = ({ roster }: RosterProps) => {
  const rosterTable = (isStarter: boolean) =>
    roster
      .filter((player) => player.isStarter == isStarter)
      .map((player) => (
        <IonRow key={player.id}>
          <IonCol
            size="1.5"
            className={`light-title position-tile ${
              PositionClassMapping[player.positionId as EPosition]
            }`}
          >
            {player.position}
          </IonCol>
          <IonCol size="6" className="light-title player-name-col">
            {player.name}
          </IonCol>
          <IonCol size="3.5" className="light-title">
            {!player.isHome && "@"}
            {player.opponent}
          </IonCol>
          <IonCol size="1" className="ion-text-right light-title">
            {player.points}
          </IonCol>
        </IonRow>
      ));

  return (
    <IonContent>
      <IonCard>
        <IonCardHeader>
          <IonCardTitle className="light-title">Starters</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <IonGrid>{rosterTable(true)}</IonGrid>
        </IonCardContent>
      </IonCard>
      <IonCard>
        <IonCardHeader>
          <IonCardTitle className="light-title">Bench</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <IonGrid>{rosterTable(false)}</IonGrid>
        </IonCardContent>
      </IonCard>
    </IonContent>
  );
};

export default Roster;
