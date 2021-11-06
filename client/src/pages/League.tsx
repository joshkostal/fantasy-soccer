import { IonContent, IonPage } from "@ionic/react";
import Header from "../components/Header";

const League: React.FC = () => {
  return (
    <IonPage>
      <Header leagueName="League 1" />
      <IonContent fullscreen></IonContent>
    </IonPage>
  );
};

export default League;
