import { LeagueStandings } from "@graphql-types/fantasy";
import {
  IonCard,
  IonCardContent,
  IonCol,
  IonGrid,
  IonRow,
} from "@ionic/react";

interface StandingsProps {
  leagueId: number;
}

const Standings: React.FC<StandingsProps> = ({ leagueId }: StandingsProps) => {
  const data: LeagueStandings[] = [
    {
      leaguePoints: 15,
      matchPointsAgainst: 229,
      matchPointsFor: 312,
      teamId: 1,
      teamName: "Drogba's Lads",
    },
    {
      leaguePoints: 12,
      matchPointsAgainst: 187,
      matchPointsFor: 252,
      teamId: 2,
      teamName: "Lampard FC",
    },
  ];

  const renderStandingsList = () => {
    return data
      .sort((a, b) => a.leaguePoints > b.leaguePoints ? -1 : 1)
      .map((team) => {
        return (
          <IonRow key={team.teamId}>
            <IonCol size="9">{team.teamName}</IonCol>
            <IonCol size="3" className="ion-text-center">{team.leaguePoints}</IonCol>
          </IonRow>
        );
      });
  };

  return (
    <IonCard>
      <IonCardContent>
        <IonGrid>
          <IonRow>
            <IonCol size="9">
              <h1>Standings</h1>
            </IonCol>
            <IonCol size="3" className="ion-text-center">
              Points
            </IonCol>
          </IonRow>
          {renderStandingsList()}
        </IonGrid>
      </IonCardContent>
    </IonCard>
  );
};

export default Standings;
