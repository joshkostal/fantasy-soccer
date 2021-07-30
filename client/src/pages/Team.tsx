import { IonPage } from "@ionic/react";
import Header from "../components/Header";
import Roster from "../components/Roster";
import { EPosition, Player } from "../models/team";
import "../styles/Team.css";
import "../styles/variables.css";

const data: Player[] = [
  {
    position: "ST",
    positionId: EPosition.ST,
    name: "Gabriel Jesus",
    opponent: "Fulham",
    isHome: false,
    points: 5,
    id: 1,
  },
  {
    position: "W",
    positionId: EPosition.W,
    name: "Sadio Mane",
    opponent: "Chelsea",
    isHome: true,
    points: 17,
    id: 2,
  },
  {
    position: "W",
    positionId: EPosition.W,
    name: "Christian Pulisic",
    opponent: "Liverpool",
    isHome: false,
    points: 14,
    id: 3,
  },
  {
    position: "AM",
    positionId: EPosition.AM,
    name: "Dani Ceballos",
    opponent: "Leicester City",
    isHome: false,
    points: 9,
    id: 4,
  },
  {
    position: "CM",
    positionId: EPosition.CM,
    name: "Fred",
    opponent: "Everton",
    isHome: true,
    points: 5,
    id: 5,
  },
  {
    position: "DM",
    positionId: EPosition.DM,
    name: "Jorginho",
    opponent: "Liverpool",
    isHome: false,
    points: 13,
    id: 6,
  },
  {
    position: "FB",
    positionId: EPosition.FB,
    name: "Emerson",
    opponent: "Liverpool",
    isHome: false,
    points: 4,
    id: 7,
  },
  {
    position: "CB",
    positionId: EPosition.CB,
    name: "Virgil van Dijk",
    opponent: "Chelsea",
    isHome: true,
    points: 19,
    id: 8,
  },
  {
    position: "CB",
    positionId: EPosition.CB,
    name: "Soyuncu",
    opponent: "Arsenal",
    isHome: true,
    points: 8,
    id: 9,
  },
  {
    position: "FB",
    positionId: EPosition.FB,
    name: "Reece James",
    opponent: "Liverpool",
    isHome: false,
    points: 6,
    id: 10,
  },
  {
    position: "GK",
    positionId: EPosition.GK,
    name: "Hugo Lloris",
    opponent: "Wolverhampton",
    isHome: true,
    points: 5,
    id: 11,
  },
];

const Team: React.FC = () => {
  return (
    <IonPage>
      <Header />
      <Roster roster={data} />
    </IonPage>
  );
};

export default Team;
