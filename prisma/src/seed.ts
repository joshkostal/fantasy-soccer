import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const main = async () => {
  const positions = await prisma.position.createMany({
    data: [
      {
        name: 'Striker',
        shortName: 'ST',
        id: 1,
      },
      {
        name: 'Winger',
        shortName: 'W',
        id: 2,
      },
      {
        name: 'Attacking Mid',
        shortName: 'AM',
        id: 3,
      },
      {
        name: 'Center Mid',
        shortName: 'CM',
        id: 4,
      },
      {
        name: 'Defensive Mid',
        shortName: 'DM',
        id: 5,
      },
      {
        name: 'Fullback',
        shortName: 'FB',
        id: 6,
      },
      {
        name: 'Centerback',
        shortName: 'CB',
        id: 7,
      },
      {
        name: 'Goalkeeper',
        shortName: 'GK',
        id: 8,
      },
    ],
  });

  const teams = await prisma.team.createMany({
    data: [
      {
        name: 'Arsenal',
        shortName: 'AFC',
        id: 1,
      },
      {
        name: 'Aston Villa',
        shortName: 'AVFC',
        id: 2,
      },
      {
        name: 'Brighton & Hove Albion',
        shortName: 'BHAFC',
        id: 3,
      },
      {
        name: 'Burnley',
        shortName: 'BFC',
        id: 4,
      },
      {
        name: 'Chelsea',
        shortName: 'CFC',
        id: 5,
      },
      {
        name: 'Crystal Palace',
        shortName: 'CPFC',
        id: 6,
      },
      {
        name: 'Everton',
        shortName: 'EFC',
        id: 7,
      },
      {
        name: 'Fulham',
        shortName: 'FFC',
        id: 8,
      },
      {
        name: 'Leeds United',
        shortName: 'LUFC',
        id: 9,
      },
      {
        name: 'Leicester City',
        shortName: 'LCFC',
        id: 10,
      },
      {
        name: 'Liverpool',
        shortName: 'LFC',
        id: 11,
      },
      {
        name: 'Manchester City',
        shortName: 'MCFC',
        id: 12,
      },
      {
        name: 'Manchester United',
        shortName: 'MUFC',
        id: 13,
      },
      {
        name: 'Newcastle United',
        shortName: 'NUFC',
        id: 14,
      },
      {
        name: 'Southampton',
        shortName: 'SFC',
        id: 15,
      },
      {
        name: 'Sheffield United',
        shortName: 'SUFC',
        id: 16,
      },
      {
        name: 'Tottenham',
        shortName: 'THFC',
        id: 17,
      },
      {
        name: 'West Bromwich Albion',
        shortName: 'WBAFC',
        id: 18,
      },
      {
        name: 'West Ham United',
        shortName: 'WHUFC',
        id: 19,
      },
      {
        name: 'Wolverhampton',
        shortName: 'WFC',
        id: 20,
      },
    ],
  });

  const players = await prisma.player.createMany({
    data: [
      {
        id: 1,
        name: 'Gabriel Fernando de Jesus',
        positionId: 1,
        displayName: 'Gabriel Jesus',
        teamId: 12,
      },
      {
        id: 2,
        name: 'Sadio Mané',
        positionId: 2,
        displayName: 'Sadio Mané',
        teamId: 11,
      },
      {
        id: 3,
        name: 'Christian Pulisic',
        positionId: 2,
        displayName: 'Christian Pulisic',
        teamId: 5,
      },
      {
        id: 4,
        name: 'Daniel Ceballos Fernández',
        positionId: 3,
        displayName: 'Dani Ceballos',
        teamId: 1,
      },
      {
        id: 5,
        name: 'Frederico Rodrigues de Paula Santos',
        positionId: 4,
        displayName: 'Fred',
        teamId: 13,
      },
      {
        id: 6,
        name: 'Jorge Luiz Frello Filho Cavaliere',
        positionId: 5,
        displayName: 'Jorginho',
        teamId: 5,
      },
      {
        id: 7,
        name: 'Marcos Alonso Mendoza',
        positionId: 6,
        displayName: 'Marcos Alonso',
        teamId: 5,
      },
      {
        id: 8,
        name: 'Virgil van Dijk',
        positionId: 7,
        displayName: 'Virgil van Dijk',
        teamId: 11,
      },
      {
        id: 9,
        name: 'Çağlar Söyüncü',
        positionId: 7,
        displayName: 'Çağlar Söyüncü',
        teamId: 10,
      },
      {
        id: 10,
        name: 'Reece James',
        positionId: 6,
        displayName: 'Reece James',
        teamId: 5,
      },
      {
        id: 11,
        name: 'Hugo Lloris',
        positionId: 8,
        displayName: 'Hugo Lloris',
        teamId: 17,
      },
      {
        id: 12,
        name: 'Pierre-Emerick Emiliano François Aubameyang',
        positionId: 1,
        displayName: 'Aubameyang',
        teamId: 1,
      },
      {
        id: 13,
        name: 'Allan Irénée Saint-Maximin',
        positionId: 2,
        displayName: 'Allan Saint-Maximin',
        teamId: 15,
      },
      {
        id: 14,
        name: 'Youri Marion A. Tielemans',
        positionId: 4,
        displayName: 'Youri Tielemans',
        teamId: 10,
      },
      {
        id: 15,
        name: 'Kurt Happy Zouma',
        positionId: 7,
        displayName: 'Kurt Zouma',
        teamId: 19,
      },
      {
        id: 16,
        name: 'Jordan Pickford',
        positionId: 8,
        displayName: 'Jordan Pickford',
        teamId: 7,
      },
    ],
  });

  const futureDate = new Date(new Date().getFullYear() + 1, 12, 31);

  const matches = await prisma.match.createMany({
    data: [
      {
        awayTeamId: 12,
        dateTime: futureDate,
        homeTeamId: 8,
        matchWeek: 1,
        id: 1,
      },
      {
        awayTeamId: 5,
        dateTime: futureDate,
        homeTeamId: 11,
        matchWeek: 1,
        id: 2,
      },
      {
        awayTeamId: 7,
        dateTime: futureDate,
        homeTeamId: 13,
        matchWeek: 1,
        id: 3,
      },
      {
        awayTeamId: 10,
        dateTime: futureDate,
        homeTeamId: 1,
        matchWeek: 1,
        id: 4,
      },
      {
        awayTeamId: 20,
        dateTime: futureDate,
        homeTeamId: 17,
        matchWeek: 1,
        id: 5,
      },
      {
        awayTeamId: 19,
        dateTime: futureDate,
        homeTeamId: 15,
        matchWeek: 1,
        id: 6,
      },
    ],
  });

  const playerMatches = await prisma.playerMatch.createMany({
    data: [
      {
        id: 1,
        matchId: 4,
        playerId: 4,
      },
      {
        id: 2,
        matchId: 1,
        playerId: 1,
      },
      {
        id: 3,
        matchId: 4,
        playerId: 14,
      },
      {
        id: 4,
        matchId: 2,
        playerId: 10,
      },
      {
        id: 5,
        matchId: 2,
        playerId: 3,
      },
      {
        id: 6,
        matchId: 3,
        playerId: 5,
      },
      {
        id: 7,
        matchId: 2,
        playerId: 7,
      },
      {
        id: 8,
        matchId: 4,
        playerId: 9,
      },
      {
        id: 9,
        matchId: 6,
        playerId: 13,
      },
      {
        id: 10,
        matchId: 2,
        playerId: 2,
      },
      {
        id: 11,
        matchId: 4,
        playerId: 12,
      },
      {
        id: 12,
        matchId: 2,
        playerId: 6,
      },
      {
        id: 13,
        matchId: 6,
        playerId: 15,
      },
      {
        id: 14,
        matchId: 3,
        playerId: 16,
      },
      {
        id: 15,
        matchId: 2,
        playerId: 8,
      },
      {
        id: 16,
        matchId: 5,
        playerId: 11,
      },
    ],
  });

  const users = await prisma.user.createMany({
    data: [
      {
        id: 1,
        email: 'joshkostal4@gmail.com',
        name: 'Josh Kostal',
      },
    ],
  });

  const fantasyLeagues = await prisma.fantasyLeague.createMany({
    data: [
      {
        commissionerId: 1,
        name: 'League 1',
        id: 1,
      },
      {
        commissionerId: 1,
        name: 'League 2',
        id: 2,
      },
    ],
  });

  const fantasyTeams = await prisma.fantasyTeam.createMany({
    data: [
      {
        id: 1,
        name: "Lukaku's Lads",
        fantasyLeagueId: 1,
        ownerId: 1,
      },
      {
        id: 2,
        name: 'The Blue Curtain',
        fantasyLeagueId: 2,
        ownerId: 1,
      },
    ],
  });

  const fantasyTeamPlayers = await prisma.fantasyTeamPlayer.createMany({
    data: [
      {
        fantasyTeamId: 1,
        playerId: 1,
        id: 1,
      },
      {
        fantasyTeamId: 1,
        playerId: 2,
        id: 2,
      },
      {
        fantasyTeamId: 1,
        playerId: 3,
        id: 3,
      },
      {
        fantasyTeamId: 1,
        playerId: 4,
        id: 4,
      },
      {
        fantasyTeamId: 1,
        playerId: 5,
        id: 5,
      },
      {
        fantasyTeamId: 1,
        playerId: 6,
        id: 6,
      },
      {
        fantasyTeamId: 1,
        playerId: 7,
        id: 7,
      },
      {
        fantasyTeamId: 1,
        playerId: 8,
        id: 8,
      },
      {
        fantasyTeamId: 1,
        playerId: 9,
        id: 9,
      },
      {
        fantasyTeamId: 1,
        playerId: 10,
        id: 10,
      },
      {
        fantasyTeamId: 1,
        playerId: 11,
        id: 11,
      },
      {
        fantasyTeamId: 1,
        playerId: 12,
        id: 12,
      },
      {
        fantasyTeamId: 1,
        playerId: 13,
        id: 13,
      },
      {
        fantasyTeamId: 1,
        playerId: 14,
        id: 14,
      },
      {
        fantasyTeamId: 1,
        playerId: 15,
        id: 15,
      },
      {
        fantasyTeamId: 1,
        playerId: 16,
        id: 16,
      },
    ],
  });

  const fantasyPlayerMatches = await prisma.fantasyPlayerMatch.createMany({
    data: [
      {
        fantasyTeamId: 1,
        playerMatchId: 1,
        positionId: 3,
        totalPoints: 5,
      },
      {
        fantasyTeamId: 1,
        playerMatchId: 2,
        positionId: 1,
        totalPoints: 8,
      },
      {
        fantasyTeamId: 1,
        playerMatchId: 3,
        totalPoints: 14,
      },
      {
        fantasyTeamId: 1,
        playerMatchId: 4,
        positionId: 6,
        totalPoints: 13,
      },
      {
        fantasyTeamId: 1,
        playerMatchId: 5,
        positionId: 2,
        totalPoints: 15,
      },
      {
        fantasyTeamId: 1,
        playerMatchId: 6,
        positionId: 4,
        totalPoints: 9,
      },
      {
        fantasyTeamId: 1,
        playerMatchId: 7,
        positionId: 6,
        totalPoints: 7,
      },
      {
        fantasyTeamId: 1,
        playerMatchId: 8,
        positionId: 7,
        totalPoints: 17,
      },
      {
        fantasyTeamId: 1,
        playerMatchId: 9,
        totalPoints: 11,
      },
      {
        fantasyTeamId: 1,
        playerMatchId: 10,
        positionId: 2,
        totalPoints: 21,
      },
      {
        fantasyTeamId: 1,
        playerMatchId: 11,
        totalPoints: 9,
      },
      {
        fantasyTeamId: 1,
        playerMatchId: 12,
        positionId: 5,
        totalPoints: 19,
      },
      {
        fantasyTeamId: 1,
        playerMatchId: 13,
        totalPoints: 3,
      },
      {
        fantasyTeamId: 1,
        playerMatchId: 14,
        totalPoints: 12,
      },
      {
        fantasyTeamId: 1,
        playerMatchId: 15,
        positionId: 7,
        totalPoints: 9,
      },
      {
        fantasyTeamId: 1,
        playerMatchId: 16,
        positionId: 8,
        totalPoints: 15,
      },
    ],
  });

  const fantasyMatches = await prisma.fantasyMatch.createMany({
    data: [
      {
        gameWeek: 1,
        id: 1,
      },
    ],
  });

  const fantasyTeamMatches = await prisma.fantasyTeamMatch.createMany({
    data: [
      {
        teamId: 1,
        matchId: 1,
      },
      {
        teamId: 2,
        matchId: 1,
      },
    ],
  });

  const fantasyLeagueScoreSettings = await prisma.fantasyLeagueScoreSettings.create({
    data: {
      fantasyLeagueId: null, // default
      goal: 4,
      assist: 3,
      pkWon: 2,
      isMOTM: 5,
      hasHatTrick: 4,
      hasYellowCard: -1,
      hasRedCard: -4,
      pkConceded: -2,
      pkMissed: -2,
      offside: -0.5,
      save: 1.5,
      tackle: 1,
      pkSaved: 4,
      shotBlocked: 1,
      interception: 1,
      isCleanSheet: 3,
      goalConceded: -2,
      dribbleCompleted: 0.5,
      shotOnTarget: 0.5,
      keyPass: 2,
      isShutout: -3,
      dribbledPast: -0.5,
    },
  });

  const positionScoreMultiplier = await prisma.positionScoreMultiplier.createMany({
    data: [
      {
        positionId: 1,
        goal: 1,
        assist: 1,
        pkWon: 1,
        isMOTM: 1,
        hasHatTrick: 1,
        hasYellowCard: 1,
        hasRedCard: 1,
        pkConceded: 1,
        pkMissed: 1,
        offside: 1,
        save: 1,
        tackle: 0.75,
        pkSaved: 1,
        shotBlocked: 0.75,
        interception: 0.75,
        isCleanSheet: 0,
        goalConceded: 0,
        dribbleCompleted: 1,
        shotOnTarget: 1.25,
        keyPass: 1,
        isShutout: 1,
        dribbledPast: 0,
      },
      {
        positionId: 2,
        goal: 1,
        assist: 1,
        pkWon: 1,
        isMOTM: 1,
        hasHatTrick: 1,
        hasYellowCard: 1,
        hasRedCard: 1,
        pkConceded: 1,
        pkMissed: 1,
        offside: 1,
        save: 1,
        tackle: 0.75,
        pkSaved: 1,
        shotBlocked: 0.75,
        interception: 0.75,
        isCleanSheet: 0,
        goalConceded: 0,
        dribbleCompleted: 1,
        shotOnTarget: 1.25,
        keyPass: 1,
        isShutout: 1,
        dribbledPast: 0,
      },
      {
        positionId: 3,
        goal: 1,
        assist: 1,
        pkWon: 1,
        isMOTM: 1,
        hasHatTrick: 1,
        hasYellowCard: 1,
        hasRedCard: 1,
        pkConceded: 1,
        pkMissed: 1,
        offside: 1,
        save: 1,
        tackle: 0.75,
        pkSaved: 1,
        shotBlocked: 0.75,
        interception: 0.75,
        isCleanSheet: 0,
        goalConceded: 0,
        dribbleCompleted: 1.25,
        shotOnTarget: 1.25,
        keyPass: 1.25,
        isShutout: 1,
        dribbledPast: 0,
      },
      {
        positionId: 4,
        goal: 1,
        assist: 1,
        pkWon: 1,
        isMOTM: 1,
        hasHatTrick: 1,
        hasYellowCard: 1,
        hasRedCard: 1,
        pkConceded: 1,
        pkMissed: 1,
        offside: 1,
        save: 1,
        tackle: 1,
        pkSaved: 1,
        shotBlocked: 1,
        interception: 1,
        isCleanSheet: 1,
        goalConceded: 1,
        dribbleCompleted: 1,
        shotOnTarget: 1,
        keyPass: 1,
        isShutout: 0,
        dribbledPast: 1,
      },
      {
        positionId: 5,
        goal: 1,
        assist: 1,
        pkWon: 1,
        isMOTM: 1,
        hasHatTrick: 1,
        hasYellowCard: 1,
        hasRedCard: 1,
        pkConceded: 1,
        pkMissed: 1,
        offside: 1,
        save: 1,
        tackle: 1.25,
        pkSaved: 1,
        shotBlocked: 1,
        interception: 1.25,
        isCleanSheet: 1,
        goalConceded: 1,
        dribbleCompleted: 0.75,
        shotOnTarget: 0.75,
        keyPass: 1,
        isShutout: 0,
        dribbledPast: 1,
      },
      {
        positionId: 6,
        goal: 1,
        assist: 1,
        pkWon: 1,
        isMOTM: 1,
        hasHatTrick: 1,
        hasYellowCard: 1,
        hasRedCard: 1,
        pkConceded: 1,
        pkMissed: 1,
        offside: 1,
        save: 1,
        tackle: 1.25,
        pkSaved: 1,
        shotBlocked: 1.25,
        interception: 1,
        isCleanSheet: 1,
        goalConceded: 1,
        dribbleCompleted: 1,
        shotOnTarget: 0.75,
        keyPass: 1,
        isShutout: 0,
        dribbledPast: 1,
      },
      {
        positionId: 7,
        goal: 1,
        assist: 1,
        pkWon: 1,
        isMOTM: 1,
        hasHatTrick: 1,
        hasYellowCard: 1,
        hasRedCard: 1,
        pkConceded: 1,
        pkMissed: 1,
        offside: 1,
        save: 1,
        tackle: 1.25,
        pkSaved: 1,
        shotBlocked: 1.25,
        interception: 1.25,
        isCleanSheet: 1,
        goalConceded: 1,
        dribbleCompleted: 0.75,
        shotOnTarget: 0.75,
        keyPass: 0.75,
        isShutout: 0,
        dribbledPast: 1,
      },
      {
        positionId: 8,
        goal: 1,
        assist: 1,
        pkWon: 1,
        isMOTM: 1,
        hasHatTrick: 1,
        hasYellowCard: 1,
        hasRedCard: 1,
        pkConceded: 1,
        pkMissed: 1,
        offside: 1,
        save: 1,
        tackle: 1,
        pkSaved: 1,
        shotBlocked: 1,
        interception: 1.25,
        isCleanSheet: 1,
        goalConceded: 1,
        dribbleCompleted: 0.75,
        shotOnTarget: 0.75,
        keyPass: 0.75,
        isShutout: 0,
        dribbledPast: 0,
      },
    ],
  });

  console.log(
    positions,
    teams,
    players,
    matches,
    playerMatches,
    users,
    fantasyLeagues,
    fantasyTeams,
    fantasyTeamPlayers,
    fantasyPlayerMatches,
    fantasyMatches,
    fantasyTeamMatches,
    fantasyLeagueScoreSettings,
    positionScoreMultiplier,
  );
};

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
