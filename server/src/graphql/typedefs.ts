const typeDefs: string = `
    type User {
        id: ID!
        name: String!
        email: String!
        fantasyTeams: [FantasyTeam!]
        commissionerLeagues: [FantasyLeague!]
    }

    type Player {
        id: ID!
        name: String!
        displayName: String!
        team: Team
        position: Position!
        matches: [PlayerMatch!]
        fantasyTeams: [FantasyTeamPlayer!]
    }

    type Team {
        id: ID!
        name: String!
        shortName: String!
        players: [Player!]!
        homeMatches: [Match!]!
        awayMatches: [Match!]!
    }

    type Match {
        id: ID!
        homeTeam: Team!
        awayTeam: Team!
        matchWeek: Int!
        homeScore: Int
        awayScore: Int
        dateTime: DateTime
        players: [PlayerMatch!]!
    }

    type Position {
        id: ID!
        name: String!
        shortName: String!
        players: [Player!]
    }

    type PlayerMatch {
        id: ID!
        goals: Int
        assists: Int
        pksWon: Int
        isMOTM: Boolean
        hasHatTrick: Boolean
        hasYellowCard: Boolean
        hasRedCard: Boolean
        pksConceded: Int
        pksMissed: Int
        offsides: Int
        saves: Int
        tackles: Int
        pksSaved: Int
        shotsBlocked: Int
        interceptions: Int
        isCleanSheet: Boolean
        goalsConceded: Int
        dribblesCompleted: Int
        shotsOnTarget: Int
        keyPasses: Int
        isShutout: Boolean
        timesDribbledPast: Int
        match: Match!
        player: Player!
        fantasyPlayerMatches: [FantasyPlayerMatch!]
    }

    type FantasyTeam {
        id: ID!
        name: String!
        league: FantasyLeague!
        owner: User!
        players: [FantasyTeamPlayer!]
        team1Matches: [FantasyMatch!]!
        team2Matches: [FantasyMatch!]!
    }

    type FantasyLeague {
        id: ID!
        name: String!
        commissioner: User!
        teams: [FantasyTeam!]!
    }

    type FantasyTeamPlayer {
        id: ID!
        team: FantasyTeam!
        player: Player!
        fantasyPlayerMatches: [FantasyPlayerMatch!]
    }

    type FantasyPlayerMatch {
        isStarter: Boolean!
        positionId: Int
        totalPoints: Int
        playerMatch: PlayerMatch!
        fantasyTeam: FantasyTeam!
    }
    
    type FantasyMatch {
        id: ID!
        team1Score: Int
        team2Score: Int
        team1: FantasyTeam!
        team2: FantasyTeam!
        totalPoints: Int
    }

    type Query {
        fantasyTeamPlayers(fantasyTeamId: Int): [Player!]!
        fantasyLeagues(userId: Int): [FantasyTeam!]
    }

    scalar DateTime
`;

export default typeDefs;