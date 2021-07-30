import {
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonLabel,
  IonList,
  IonContent,
  IonItem,
  IonRouterOutlet,
} from "@ionic/react";
import '../styles/variables.css';

interface RosterProps {}

const Menu: React.FC<RosterProps> = () => {
  return (
    <>
      <IonMenu side="start" contentId="main">
        <IonHeader>
          <IonToolbar>
            <IonTitle className="light-title">User 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <IonItem>
              <IonLabel className="light-title">League 2</IonLabel>
            </IonItem>
          </IonList>
        </IonContent>
      </IonMenu>
      <IonRouterOutlet id="main"></IonRouterOutlet>
    </>
  );
};

export default Menu;
