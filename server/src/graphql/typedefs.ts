const typeDefs: string = `
    type Player {
        id: ID!
        name: String!
        team: Team
        nextMatch: PlayerMatch
        position: Position!
    }

    type Team {
        id: ID!
        name: String!
        shortName: String!
    }

    type Match {
        id: ID!
        homeTeam: Team!
        awayTeam: Team!
        matchWeek: Int!
        homeScore: Int
        awayScore: Int
        dateTime: DateTime
    }

    type Position {
        id: ID!
        name: String!
        shortName: String!
    }

    type PlayerMatch {
        isStarter: Boolean!
        match: Match!
        points: Int
    }

    type FantasyTeam {
        id: ID!
        name: String!
        league: FantasyLeague!
        owner: User!
    }

    type FantasyLeague {
        id: ID!
        name: String!
        commissioner: User!
    }

    type FantasyLeaguePlayer {
        id: ID!
        league: FantasyLeague!
        team: FantasyTeam
        player: Player!
    }

    type User {
        id: ID!
        name: String!
        email: String!
    }

    type Query {
        players: [Player!]!
        fantasyTeamPlayers(fantasyTeamId: Int): [Player!]!
    }

    scalar DateTime
`;

export default typeDefs;

// add stats breakdown instead of just 'points'