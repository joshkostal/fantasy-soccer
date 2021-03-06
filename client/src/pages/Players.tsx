import { IonContent, IonPage } from "@ionic/react";
import TabBar from "src/components/TabBar";
import Header from "../components/Header";

const Players: React.FC = () => {
  return (
    <IonPage>
      <Header teamName="League 1" />
      <TabBar leagueId={1} teamId={1} />
      <IonContent fullscreen>Players</IonContent>
    </IonPage>
  );
};

export default Players;
