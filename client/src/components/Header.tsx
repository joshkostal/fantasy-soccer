import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle,
  IonIcon,
} from "@ionic/react";
import "../styles/Header.css";

interface HeaderProps {
  leagueName: string;
}

const Header: React.FC<HeaderProps> = ({ leagueName }: HeaderProps) => {
  return (
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonMenuButton></IonMenuButton>
        </IonButtons>
        <IonTitle className="ion-text-center">{leagueName}</IonTitle>
        <IonButtons slot="end">
          <IonIcon icon="search-outline" className="search-icon"></IonIcon>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;
