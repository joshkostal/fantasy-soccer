import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import Lineup from "../components/Lineup";
import "../styles/Team.css";

const Team: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton color="light-title"></IonMenuButton>
          </IonButtons>
          <IonTitle color="light-title">League 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <Lineup />
      </IonContent>
    </IonPage>
  );
};

export default Team;
