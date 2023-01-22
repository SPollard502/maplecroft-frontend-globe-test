export interface IScoreDataPoint {
  score?: number;
  selected: boolean;
  entitled: boolean;
  dataAvailable: boolean;
}

export interface IScoreData {
  [A2CountryCode: string]: IScoreDataPoint
}
