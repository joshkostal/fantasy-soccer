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

interface RosterProps {}

const Menu: React.FC<RosterProps> = () => {
  return (
    <>
      <IonMenu side="start" type="overlay" contentId="main">
        <IonHeader>
          <IonToolbar>
            <IonTitle color="light-title">User 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <IonItem>
              <IonLabel>League 2</IonLabel>
            </IonItem>
          </IonList>
        </IonContent>
      </IonMenu>
      <IonRouterOutlet id="main"></IonRouterOutlet>
    </>
  );
};

export default Menu;
