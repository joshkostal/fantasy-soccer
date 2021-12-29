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
import { FantasyTeam } from "@graphql-types/fantasy";

interface RosterProps {
  team: FantasyTeam;
}

const Roster: React.FC<RosterProps> = ({ team }: RosterProps) => {
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
          <IonRow key={fantasyPlayer?.id}>
            <IonCol
              size="1.5"
              className={`position-tile ${
                PositionClassMapping[
                  (fantasyPlayerMatch.position?.id || fantasyPlayer?.player.position.id) as EPosition
                ]
              }`}
            >
              {fantasyPlayerMatch.position?.shortName || fantasyPlayer?.player.position.shortName}
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
    </IonContent>
  );
};

export default Roster;
