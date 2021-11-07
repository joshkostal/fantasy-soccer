import { IonContent, IonPage } from "@ionic/react";
import TabBar from "src/components/TabBar";
import Header from "../components/Header";

const Match: React.FC = () => {
  return (
    <IonPage>
      <Header leagueName="League 1" />{" "}
      <TabBar fantasyMatchId={1} leagueId={1} teamId={1} />
      <IonContent fullscreen>Match</IonContent>
    </IonPage>
  );
};

export default Match;
