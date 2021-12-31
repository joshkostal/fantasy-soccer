export enum EPosition {
  ST = 1,
  W = 2,
  AM = 3,
  CM = 4,
  DM = 5,
  FB = 6,
  CB = 7,
  GK = 8,
}

export const PositionClassMapping: Record<EPosition, string> = {
  [EPosition.ST]: "striker",
  [EPosition.W]: "winger",
  [EPosition.AM]: "attacking-mid",
  [EPosition.CM]: "center-mid",
  [EPosition.DM]: "defensive-mid",
  [EPosition.FB]: "fullback",
  [EPosition.CB]: "centerback",
  [EPosition.GK]: "goal-keeper",
};

// Positions that a position can switch with
export const InterchangeablePositions: Record<EPosition, EPosition[]> = {
  [EPosition.ST]: [],
  [EPosition.W]: [],
  [EPosition.AM]: [EPosition.CM, EPosition.DM],
  [EPosition.CM]: [EPosition.AM, EPosition.DM],
  [EPosition.DM]: [EPosition.AM, EPosition.CM],
  [EPosition.FB]: [],
  [EPosition.CB]: [],
  [EPosition.GK]: [],
};
