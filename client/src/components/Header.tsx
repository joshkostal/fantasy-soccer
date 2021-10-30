import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle,
  IonIcon,
} from "@ionic/react";
import '../styles/Header.css';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonMenuButton className="light-title"></IonMenuButton>
        </IonButtons>
        <IonTitle className="light-title ion-text-center">League 1</IonTitle>
        <IonButtons slot="end">
          <IonIcon name="search-outline" className="light-title search-icon"></IonIcon>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;
