import { IonCol, IonContent, IonGrid, IonRow } from "@ionic/react";
import { EPosition, Player } from "../models/team";
import "../styles/Team.css";
import "../styles/index.css";
import "../styles/variables.css";

interface RosterProps {
  roster: Player[];
}

const Roster: React.FC<RosterProps> = ({ roster }: RosterProps) => {
  const positionClass = (player: Player): string => {
    switch (player.positionId) {
      case EPosition.AM:
        return "attacking-mid";
      case EPosition.CB:
        return "centerback";
      case EPosition.CM:
        return "center-mid";
      case EPosition.DM:
        return "defensive-mid";
      case EPosition.FB:
        return "fullback";
      case EPosition.GK:
        return "goal-keeper";
      case EPosition.ST:
        return "striker";
      case EPosition.W:
        return "winger";
      default:
        return "";
    }
  };

  const rosterTable = roster.map((player) => (
    <IonRow key={player.id}>
      <IonCol
        size="1.5"
        className={`light-title position-tile ${positionClass(player)}`}
      >
        {player.position}
      </IonCol>
      <IonCol size="5" className="light-title player-name-col">
        {player.name}
      </IonCol>
      <IonCol size="4.5" className="light-title">
        {player.isHome ? "" : "at "}
        {player.opponent}
      </IonCol>
      <IonCol size="1" className="ion-text-right light-title">
        {player.points}
      </IonCol>
    </IonRow>
  ));

  return (
    <IonContent color="background">
      <IonGrid className="roster-card" color="light">
        {rosterTable}
      </IonGrid>
    </IonContent>
  );
};

export default Roster;
