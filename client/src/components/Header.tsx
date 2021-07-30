import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle,
} from "@ionic/react";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonMenuButton className="light-title"></IonMenuButton>
        </IonButtons>
        <IonTitle className="light-title ion-text-center">League 1</IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;
