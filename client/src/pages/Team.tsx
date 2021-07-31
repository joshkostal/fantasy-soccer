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
    isStarter: true,
  },
  {
    position: "W",
    positionId: EPosition.W,
    name: "Sadio Mane",
    opponent: "Chelsea",
    isHome: true,
    points: 17,
    id: 2,
    isStarter: true,
  },
  {
    position: "W",
    positionId: EPosition.W,
    name: "Christian Pulisic",
    opponent: "Liverpool",
    isHome: false,
    points: 14,
    id: 3,
    isStarter: true,
  },
  {
    position: "AM",
    positionId: EPosition.AM,
    name: "Dani Ceballos",
    opponent: "Leicester City",
    isHome: false,
    points: 9,
    id: 4,
    isStarter: true,
  },
  {
    position: "CM",
    positionId: EPosition.CM,
    name: "Fred",
    opponent: "Everton",
    isHome: true,
    points: 5,
    id: 5,
    isStarter: true,
  },
  {
    position: "DM",
    positionId: EPosition.DM,
    name: "Jorginho",
    opponent: "Liverpool",
    isHome: false,
    points: 13,
    id: 6,
    isStarter: true,
  },
  {
    position: "FB",
    positionId: EPosition.FB,
    name: "Emerson",
    opponent: "Liverpool",
    isHome: false,
    points: 4,
    id: 7,
    isStarter: true,
  },
  {
    position: "CB",
    positionId: EPosition.CB,
    name: "Virgil van Dijk",
    opponent: "Chelsea",
    isHome: true,
    points: 19,
    id: 8,
    isStarter: true,
  },
  {
    position: "CB",
    positionId: EPosition.CB,
    name: "Soyuncu",
    opponent: "Arsenal",
    isHome: true,
    points: 8,
    id: 9,
    isStarter: true,
  },
  {
    position: "FB",
    positionId: EPosition.FB,
    name: "Reece James",
    opponent: "Liverpool",
    isHome: false,
    points: 6,
    id: 10,
    isStarter: true,
  },
  {
    position: "GK",
    positionId: EPosition.GK,
    name: "Hugo Lloris",
    opponent: "Wolverhampton",
    isHome: true,
    points: 5,
    id: 11,
    isStarter: true,
  },
  {
    position: "ST",
    positionId: EPosition.ST,
    name: "Sergio Aguero",
    opponent: "Fulham",
    isHome: false,
    points: 0,
    id: 12,
    isStarter: false,
  },
  {
    position: "W",
    positionId: EPosition.W,
    name: "Willian",
    opponent: "Leicester City",
    isHome: false,
    points: 6,
    id: 13,
    isStarter: false,
  },
  {
    position: "CM",
    positionId: EPosition.CM,
    name: "Youri Tielemans",
    opponent: "Arsenal",
    isHome: true,
    points: 14,
    id: 14,
    isStarter: false,
  },
  {
    position: "CB",
    positionId: EPosition.CB,
    name: "Kurt Zouma",
    opponent: "Liverpool",
    isHome: false,
    points: 9,
    id: 16,
    isStarter: false,
  },
  {
    position: "GK",
    positionId: EPosition.GK,
    name: "Jordan Pickford",
    opponent: "Arsenal",
    isHome: true,
    points: 17,
    id: 15,
    isStarter: false,
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
