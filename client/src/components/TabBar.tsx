import { IonButton, IonButtons, IonTitle, IonToolbar } from "@ionic/react";

interface TabBarProps {}

const TabBar: React.FC<TabBarProps> = () => {
  return (
    <IonToolbar>
      <IonTitle>
        <IonButtons>
          <IonButton>Team</IonButton>
          <IonButton>Match</IonButton>
          <IonButton>Players</IonButton>
          <IonButton>League</IonButton>
        </IonButtons>
      </IonTitle>
    </IonToolbar>
  );
};

export default TabBar;
