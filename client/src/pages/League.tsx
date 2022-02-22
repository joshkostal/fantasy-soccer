import { IonContent, IonPage } from "@ionic/react";
import { RouteComponentProps } from "react-router";
import Standings from "src/components/FantasyLeagueStandings";
import TabBar from "src/components/TabBar";
import Header from "../components/Header";

interface LeagueProps
  extends RouteComponentProps<{ fantasyLeagueId: string }> {}

const League: React.FC<LeagueProps> = ({ match }: LeagueProps) => {
  return (
    <IonPage>
      <Header teamName="League 1" />
      <TabBar leagueId={+match.params.fantasyLeagueId} teamId={1} />
      <IonContent fullscreen>
        <Standings leagueId={+match.params.fantasyLeagueId} />
      </IonContent>
    </IonPage>
  );
};

export default League;
