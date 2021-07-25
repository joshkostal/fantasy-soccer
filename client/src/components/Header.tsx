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
          <IonMenuButton color="light-title"></IonMenuButton>
        </IonButtons>
        <IonTitle color="light-title">League 1</IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;
