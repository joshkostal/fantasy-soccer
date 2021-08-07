const typeDefs = `
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
`;

// add dateTime to Match : need to add custom scalar

// add stats breakdown instead of just 'points'