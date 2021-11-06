import { FantasyTeam } from "@graphql-types/fantasy";
import {
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonItem,
} from "@ionic/react";

interface MenuCardProps {
  team: FantasyTeam;
}

const MenuCard: React.FC<MenuCardProps> = ({ team }: MenuCardProps) => {
  return (
    <IonItem routerLink={`team/${team.id}`}>
      <IonCardHeader>
        <IonCardSubtitle>{team.fantasyLeague.name}</IonCardSubtitle>
        <IonCardTitle>{team.name}</IonCardTitle>
      </IonCardHeader>
    </IonItem>
  );
};

export default MenuCard;
