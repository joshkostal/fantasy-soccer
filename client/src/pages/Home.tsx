import { IonContent, IonPage } from "@ionic/react";
import Header from "../components/Header";

const Home: React.FC = () => {
  return (
    <IonPage>
      <Header leagueName="Home" />
      <IonContent fullscreen></IonContent>
    </IonPage>
  );
};

export default Home;
