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
          <IonMenuButton></IonMenuButton>
        </IonButtons>
        <IonTitle className="ion-text-center">League 1</IonTitle>
        <IonButtons slot="end">
          <IonIcon name="search-outline" className="search-icon"></IonIcon>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;
