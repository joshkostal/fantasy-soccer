import { IonCol, IonContent, IonGrid, IonRow } from "@ionic/react";
import { EPosition, Player, PositionClassMapping } from "../models/team";
import "../styles/Team.css";
import "../styles/index.css";
import "../styles/variables.css";

interface RosterProps {
  roster: Player[];
}

const Roster: React.FC<RosterProps> = ({ roster }: RosterProps) => {
  const rosterTable = roster
    .filter((player) => player.isStarter)
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
