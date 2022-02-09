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
  teamName: string;
}

const Header: React.FC<HeaderProps> = ({ teamName }: HeaderProps) => {
  return (
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonMenuButton></IonMenuButton>
        </IonButtons>
        <IonTitle className="ion-text-center">{teamName}</IonTitle>
        <IonButtons slot="end">
          <IonIcon icon="search-outline" className="search-icon"></IonIcon>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;
