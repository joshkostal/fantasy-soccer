import { IonContent, IonPage } from "@ionic/react";
import Header from "../components/Header";
import Roster from "../components/Roster";
import "../styles/Team.css";
import "../styles/variables.css";

const Team: React.FC = () => {
  return (
    <IonPage>
      <Header />
      <IonContent color="background">
        <Roster />
      </IonContent>
    </IonPage>
  );
};

export default Team;
