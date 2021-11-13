import { IonButton, IonButtons, IonTitle, IonToolbar } from "@ionic/react";

interface TabBarProps {
  teamId: number;
  leagueId: number;
}

const TabBar: React.FC<TabBarProps> = ({ teamId, leagueId }: TabBarProps) => {
  return (
    <IonToolbar>
      <IonTitle>
        <IonButtons>
          <IonButton routerLink={`/team/${teamId}`}>Team</IonButton>
          <IonButton routerLink="/match/current">Match</IonButton>
          <IonButton routerLink={`/players/${leagueId}`}>Players</IonButton>
          <IonButton routerLink={`/league/${leagueId}`}>League</IonButton>
        </IonButtons>
      </IonTitle>
    </IonToolbar>
  );
};

export default TabBar;
