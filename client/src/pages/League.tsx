import { IonContent, IonPage } from "@ionic/react";
import TabBar from "src/components/TabBar";
import Header from "../components/Header";

const League: React.FC = () => {
  return (
    <IonPage>
      <Header teamName="League 1" />
      <TabBar leagueId={1} teamId={1} />
      <IonContent fullscreen>league</IonContent>
    </IonPage>
  );
};

export default League;
