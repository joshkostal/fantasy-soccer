import { IonContent, IonPage } from "@ionic/react";
import Header from "../components/Header";

const Home: React.FC = () => {
  return (
    <IonPage>
      <Header teamName="Home" />
      <IonContent fullscreen></IonContent>
    </IonPage>
  );
};

export default Home;
