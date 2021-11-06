import { gql, useQuery } from "@apollo/client";
import { FantasyTeam } from "@graphql-types/fantasy";
import {
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonList,
  IonContent,
  IonRouterOutlet,
  IonSpinner,
} from "@ionic/react";
import MenuCard from "./MenuCard";

const Menu: React.FC = () => {
  const userId = 1;

  const LEAGUES = gql`
    query GetLeagues {
      fantasyLeagues(userId: ${userId}) {
        id,
        name,
        fantasyLeague {
          id,
          name
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(LEAGUES);

  let menu;

  if (loading) {
    menu = (
      <IonContent className="spinner">
        <IonSpinner></IonSpinner>
      </IonContent>
    );
  } else if (error) {
    menu = <p>Error</p>;
  } else {
    const leagueCards = () =>
      data.fantasyLeagues.map((team: FantasyTeam) => (
        <MenuCard key={team.id} team={team} />
      ));

    menu = (
      <>
        <IonHeader>
          <IonToolbar>
            <IonTitle>User 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>{leagueCards()}</IonList>
        </IonContent>
      </>
    );
  }

  return (
    <>
      <IonMenu side="start" contentId="main">
        {menu}
      </IonMenu>
      <IonRouterOutlet id="main"></IonRouterOutlet>
    </>
  );
};

export default Menu;
