export type TRegion = 'africa' | 'americas' | 'asia' | 'europe' | 'oceania';

export interface ICountry {
  name: string;
  population: number;
  area: number;
  region: TRegion;
  numericCode: number;
  subregion: string;
  capital: string;
}
