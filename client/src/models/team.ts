export interface Player {
    position: string;
    positionId: number;
    name: string;
    opponent: string;
    isHome: boolean;
    points: number;
    id: number;
}

export enum EPosition {
    ST = 1,
    W = 2,
    AM = 3,
    CM = 4,
    DM = 5,
    FB = 6,
    CB = 7,
    GK = 8
}