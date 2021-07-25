import { IonCol, IonContent, IonGrid, IonRow } from "@ionic/react";
import "../styles/Team.css";
import "../styles/variables.css";

interface RosterProps {}

const data = [
  {
    position: "ST",
    name: "Gabriel Jesus",
    match: "Fulham",
    isHome: false,
    points: 5,
    id: 1,
  },
  {
    position: "W",
    name: "Sadio Mane",
    match: "Chelsea",
    isHome: true,
    points: 17,
    id: 2,
  },
  {
    position: "W",
    name: "Christian Pulisic",
    match: "Liverpool",
    isHome: false,
    points: 14,
    id: 3,
  },
  {
    position: "AM",
    name: "Dani Ceballos",
    match: "Leicester City",
    isHome: false,
    points: 9,
    id: 4,
  },
  {
    position: "CM",
    name: "Fred",
    match: "Everton",
    isHome: true,
    points: 5,
    id: 5,
  },
  {
    position: "DM",
    name: "Jorginho",
    match: "Liverpool",
    isHome: false,
    points: 13,
    id: 6,
  },
  {
    position: "FB",
    name: "Emerson",
    match: "Liverpool",
    isHome: false,
    points: 4,
    id: 7,
  },
  {
    position: "CB",
    name: "Virgil van Dijk",
    match: "Chelsea",
    isHome: true,
    points: 19,
    id: 8,
  },
  {
    position: "CB",
    name: "Soyuncu",
    match: "Arsenal",
    isHome: true,
    points: 8,
    id: 9,
  },
  {
    position: "FB",
    name: "Reece James",
    match: "Liverpool",
    isHome: false,
    points: 6,
    id: 10,
  },
  {
    position: "GK",
    name: "Hugo Lloris",
    match: "Wolverhampton",
    isHome: true,
    points: 5,
    id: 11,
  },
];

const rosterTable = data.map((d) => (
  <IonRow key={d.id}>
    <IonCol size="1" className="light-title">
      {d.position}
    </IonCol>
    <IonCol size="5" className="ion-text-center light-title">
      {d.name}
    </IonCol>
    <IonCol size="5" className="ion-text-center light-title">
      {d.isHome ? "" : "at "}
      {d.match}
    </IonCol>
    <IonCol size="1" className="ion-text-right light-title">
      {d.points}
    </IonCol>
  </IonRow>
));

const Roster: React.FC<RosterProps> = () => {
  return (
    <IonContent color="background">
      <IonGrid className="roster-card" color="dark">
        {rosterTable}
      </IonGrid>
    </IonContent>
  );
};

export default Roster;
