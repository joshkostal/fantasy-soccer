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
import "../styles/index.css";
import "../styles/variables.css";
import { EPosition, PositionClassMapping } from "../types/player";
import { Player } from "@graphql-types/player"

interface RosterProps {
  roster: Player[];
}

const Roster: React.FC<RosterProps> = ({ roster }: RosterProps) => {
  const rosterTable = (isStarter: boolean) =>
    roster
      // .filter((player) => player.nextMatch.isStarter == isStarter)
      .map((player) => (
        <IonRow key={player.id}>
          <IonCol
            size="1.5"
            className={`light-title position-tile ${
              PositionClassMapping[player.position.id as EPosition]
            }`}
          >
            {player.position.shortName}
          </IonCol>
          <IonCol size="6" className="light-title player-name-col">
            {player.name}
          </IonCol>
          <IonCol size="3.5" className="light-title">
            {
            /* {player.nextMatch.match.homeTeam.id !== player.team.id && "@"}
            {player.nextMatch.match.homeTeam.id === player.team.id
              ? player.nextMatch.match.homeTeam.shortName
              : player.nextMatch.match.awayTeam.shortName} */
                player.team.shortName
              }
          </IonCol>
          <IonCol size="1" className="ion-text-right light-title">
            {/* {player.nextMatch.points} */}10
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
