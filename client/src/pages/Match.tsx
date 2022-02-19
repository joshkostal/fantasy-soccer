import { IonContent, IonPage } from "@ionic/react";
import { RouteComponentProps } from "react-router";
import TabBar from "src/components/TabBar";
import Header from "../components/Header";

interface MatchProps
  extends RouteComponentProps<{
    fantasyTeamId: string;
    fantasyMatchId: string;
  }> {}

const Match: React.FC<MatchProps> = ({ match }: MatchProps) => {
  const { fantasyTeamId, fantasyMatchId } = match.params;

  if (fantasyTeamId) {
  } else if (fantasyMatchId) {
  } else {
    return <p>Error</p>;
  }

  return (
    <IonPage>
      <Header teamName="League 1" />
      <TabBar leagueId={1} teamId={+fantasyTeamId} />
      <IonContent fullscreen></IonContent>
    </IonPage>
  );
};

export default Match;
