export type System = 'PC' | 'PlayStation' | 'Xbox';
export type ViewMode = 'grid' | 'list';
export type Theme = 'light' | 'dark';

export interface Game {
  id: string;
  title: string;
  releaseDate: string;
  rating: number;
  systems: System[];
  coverUrl: string;
}