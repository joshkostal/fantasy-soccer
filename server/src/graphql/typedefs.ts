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
        fantasyLeague: FantasyLeague!
        owner: User!
        players: [FantasyTeamPlayer!]
        team1Matches: [FantasyMatch!]!
        team2Matches: [FantasyMatch!]!
        fantasyPlayerMatches: [FantasyPlayerMatch!]
    }

    type FantasyLeague {
        id: ID!
        name: String!
        commissioner: User!
        teams: [FantasyTeam!]!
    }

    type FantasyTeamPlayer {
        id: ID!
        fantasyTeam: FantasyTeam!
        player: Player!
        fantasyPlayerMatches: [FantasyPlayerMatch!]
    }

    type FantasyPlayerMatch {
        position: Position
        totalPoints: Float
        playerMatch: PlayerMatch!
        fantasyTeam: FantasyTeam!
    }
    
    type FantasyMatch {
        id: ID!
        team1Score: Float
        team2Score: Float
        team1: FantasyTeam!
        team2: FantasyTeam!
        gameWeek: Int
    }

    input LineupInput {
        positionId: Int
        playerMatchId: Int!
        fantasyTeamId: Int!
    }

    type FantasyLeagueStanding {
        teamId: Int!
        teamName: String!
        leaguePoints: Int!
        matchPointsFor: Int!
        matchPointsAgainst: Int!
    }

    type Query {
        fantasyTeam(fantasyTeamId: Int!): FantasyTeam!
        user(userId: Int!): User!
        fantasyLeagueStandings(fantasyLeagueId: Int!): [FantasyLeagueStanding!]!
    }

    type Mutation {
        updateLineup(fantasyPlayerMatches: [LineupInput!]!): Boolean!
    }

    scalar DateTime
`;

export default typeDefs;
