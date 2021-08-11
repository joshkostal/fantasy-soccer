const samplePositions = {
  striker: {
    id: 1,
    name: "Striker",
    shortName: "ST",
  },
  winger: {
    id: 2,
    name: "Winger",
    shortName: "W",
  },
  attackingmid: {
    id: 3,
    name: "Attacking Midfielder",
    shortName: "AM",
  },
  centermid: {
    id: 4,
    name: "Center Midfielder",
    shortName: "CM",
  },
  defensivemid: {
    id: 5,
    name: "Defensive Midfielder",
    shortName: "DM",
  },
  fullback: {
    id: 6,
    name: "Fullback",
    shortName: "FB",
  },
  centerback: {
    id: 7,
    name: "Centerback",
    shortName: "CB",
  },
  goalkeeper: {
    id: 8,
    name: "Goal Keeper",
    shortName: "GK",
  },
};

const sampleTeams = {
  manCity: {
    id: 1,
    name: "Manchester City FC",
    shortName: "MCFC",
  },
  fulham: {
    id: 2,
    name: "Fulham FC",
    shortName: "FFC",
  },
  arsenal: {
    id: 3,
    name: "Arsenal FC",
    shortName: "AFC",
  },
  chelsea: {
    id: 4,
    name: "Chelsea FC",
    shortName: "CFC",
  },
  leicester: {
    id: 5,
    name: "Leicester City FC",
    shortName: "LCFC",
  },
  liverpool: {
    id: 6,
    name: "Liverpool FC",
    shortName: "LFC",
  },
  manu: {
    id: 7,
    name: "Manchester United FC",
    shortName: "MUFC",
  },
  tottenham: {
    id: 8,
    name: "Tottenham Hotspur FC",
    shortName: "THFC",
  },
  everton: {
    id: 9,
    name: "Everton FC",
    shortName: "EFC",
  },
  wolves: {
    id: 10,
    name: "Wolverhampton FC",
    shortName: "WWFC",
  },
};

const sampleMatch = {
  m1: {
    id: 1,
    homeTeam: sampleTeams.fulham,
    awayTeam: sampleTeams.manCity,
    matchWeek: 1,
  },
  m2: {
    id: 1,
    homeTeam: sampleTeams.liverpool,
    awayTeam: sampleTeams.chelsea,
    matchWeek: 1,
  },
  m3: {
    id: 1,
    homeTeam: sampleTeams.manu,
    awayTeam: sampleTeams.everton,
    matchWeek: 1,
  },
  m4: {
    id: 1,
    homeTeam: sampleTeams.arsenal,
    awayTeam: sampleTeams.leicester,
    matchWeek: 1,
  },
  m5: {
    id: 1,
    homeTeam: sampleTeams.tottenham,
    awayTeam: sampleTeams.wolves,
    matchWeek: 1,
  },
};

const samplePlayerMatch = {
  jesus: {
    isStarter: true,
    match: sampleMatch.m1,
    points: 5,
  },
  mane: {
    isStarter: true,
    match: sampleMatch.m2,
    points: 17,
  },
  pulisic: {
    isStarter: true,
    match: sampleMatch.m2,
    points: 13,
  },
  ceballos: {
    isStarter: true,
    match: sampleMatch.m4,
    points: 9,
  },
  fred: {
    isStarter: true,
    match: sampleMatch.m3,
    points: 6,
  },
  jorginho: {
    isStarter: true,
    match: sampleMatch.m2,
    points: 11,
  },
  emerson: {
    isStarter: true,
    match: sampleMatch.m2,
    points: 9,
  },
  vvd: {
    isStarter: true,
    match: sampleMatch.m2,
    points: 19,
  },
  soyuncu: {
    isStarter: true,
    match: sampleMatch.m4,
    points: 10,
  },
  james: {
    isStarter: true,
    match: sampleMatch.m2,
    points: 14,
  },
  lloris: {
    isStarter: true,
    match: sampleMatch.m5,
    points: 13,
  },
  aguero: {
    isStarter: false,
    match: sampleMatch.m1,
    points: 0,
  },
  willian: {
    isStarter: false,
    match: sampleMatch.m1,
    points: 6,
  },
  tielemans: {
    isStarter: false,
    match: sampleMatch.m1,
    points: 9,
  },
  zouma: {
    isStarter: false,
    match: sampleMatch.m2,
    points: 0,
  },
  pickford: {
    isStarter: false,
    match: sampleMatch.m3,
    points: 18,
  },
};

const fantasyTeam = [{
  id: 1,
  name: "Test",
}];

export const samplePlayers = [
  {
    id: 1,
    name: "Gabriel Jesus",
    position: samplePositions.striker,
    team: sampleTeams.manCity,
    nextMatch: samplePlayerMatch.jesus,
    fantasyTeam: fantasyTeam[0]
  },
  {
    id: 2,
    name: "Sadio Mane",
    position: samplePositions.winger,
    team: sampleTeams.liverpool,
    nextMatch: samplePlayerMatch.mane,
    fantasyTeam: fantasyTeam[0]
  },
  {
    id: 3,
    name: "Christian Pulisic",
    position: samplePositions.winger,
    team: sampleTeams.chelsea,
    nextMatch: samplePlayerMatch.pulisic,
    fantasyTeam: fantasyTeam[0]
  },
  {
    id: 4,
    name: "Dani Ceballos",
    position: samplePositions.attackingmid,
    team: sampleTeams.arsenal,
    nextMatch: samplePlayerMatch.ceballos,
    fantasyTeam: fantasyTeam[0]
  },
  {
    id: 5,
    name: "Fred",
    position: samplePositions.centermid,
    team: sampleTeams.manu,
    nextMatch: samplePlayerMatch.fred,
    fantasyTeam: fantasyTeam[0]
  },
  {
    id: 6,
    name: "Jorginho",
    position: samplePositions.defensivemid,
    team: sampleTeams.chelsea,
    nextMatch: samplePlayerMatch.jorginho,
    fantasyTeam: fantasyTeam[0]
  },
  {
    id: 7,
    name: "Emerson",
    position: samplePositions.fullback,
    team: sampleTeams.chelsea,
    nextMatch: samplePlayerMatch.emerson,
    fantasyTeam: fantasyTeam[0]
  },
  {
    id: 8,
    name: "Virgil van Dijk",
    position: samplePositions.centerback,
    team: sampleTeams.liverpool,
    nextMatch: samplePlayerMatch.vvd,
    fantasyTeam: fantasyTeam[0]
  },
  {
    id: 9,
    name: "Caglar Soyuncu",
    position: samplePositions.centerback,
    team: sampleTeams.leicester,
    nextMatch: samplePlayerMatch.soyuncu,
    fantasyTeam: fantasyTeam[0]
  },
  {
    id: 10,
    name: "Reece James",
    position: samplePositions.fullback,
    team: sampleTeams.chelsea,
    nextMatch: samplePlayerMatch.james,
    fantasyTeam: fantasyTeam[0]
  },
  {
    id: 11,
    name: "Hugo Lloris",
    position: samplePositions.goalkeeper,
    team: sampleTeams.tottenham,
    nextMatch: samplePlayerMatch.lloris,
    fantasyTeam: fantasyTeam[0]
  },
  {
    id: 12,
    name: "Sergio Aguero",
    position: samplePositions.striker,
    team: sampleTeams.manCity,
    nextMatch: samplePlayerMatch.aguero,
    fantasyTeam: fantasyTeam[0]
  },
  {
    id: 13,
    name: "Willian",
    position: samplePositions.winger,
    team: sampleTeams.arsenal,
    nextMatch: samplePlayerMatch.willian,
    fantasyTeam: fantasyTeam[0]
  },
  {
    id: 14,
    name: "Youri Tielemans",
    position: samplePositions.centermid,
    team: sampleTeams.leicester,
    nextMatch: samplePlayerMatch.tielemans,
    fantasyTeam: fantasyTeam[0]
  },
  {
    id: 15,
    name: "Kurt Zouma",
    position: samplePositions.centerback,
    team: sampleTeams.chelsea,
    nextMatch: samplePlayerMatch.zouma,
    fantasyTeam: fantasyTeam[0]
  },
  {
    id: 16,
    name: "Jordan Pickford",
    position: samplePositions.goalkeeper,
    team: sampleTeams.everton,
    nextMatch: samplePlayerMatch.pickford,
    fantasyTeam: fantasyTeam[0]
  },
];
