import { Match } from "./match";
import { Player } from "./player"

export interface Team {
    id: number;
    name: string;
    shortName: string;
    players: Player[];
    homeMatches: Match[];
    awayMatches: Match[];
}

/*
PL Team Abbreviations:
Arsenal - AFC
Aston Villa - AVFC
Brighton - BHAFC
Burnley - BFC
Chelsea - CFC
Crystal Palace - CPFC
Everton - EFC
Fulham - FFC
Leeds - LUFC
Leicester City - LCFC
Liverpool - LFC
Man City - MCFC
Man U - MUFC
Newcastle - NUFC
Southampton - SFC
Sheffield United - SUFC
Tottenham - THFC
West Brom - WBAFC
West Ham - WHUFC
Wolverhampton - WWFC
*/