const samplePositions = {
    striker: {
        id: 1,
        name: 'Striker'
    },
    winger: {
        id: 2,
        name: 'Winger'
    },
    attackingmid: {
        id: 3,
        name: 'Attacking Midfielder'
    },
    centermid: {
        id: 4,
        name: 'Center Midfielder'
    },
    defensivemid: {
        id: 5,
        name: 'Defensive Midfielder'
    },
    fullback: {
        id: 6,
        name: 'Fullback'
    },
    centerback: {
        id: 7,
        name: 'Centerback'
    },
    goalkeeper: {
        id: 8,
        name: 'Goal Keeper'
    },
};

const sampleTeams = {
    manCity: {
        id: 1,
        name: 'Manchester City FC',
        shortName: 'MCFC'
    },
    fulham: {
        id: 2,
        name: 'Fulham FC',
        shortName: 'FFC'
    }
};

const sampleMatch = {
    m1: {
        id: 1,
        homeTeam: sampleTeams.fulham,
        awayTeam: sampleTeams.manCity,
        matchWeek: 1,
    }
};

const playerMatch = {
    pm1: {
        
    }
};

export const samplePlayers = [
    {
        id: 1,
        name: 'Gabriel Jesus',
        position: samplePositions.striker,
        team: sampleTeams.manCity,

    },
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
];