export interface PortfolioItem {
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export type ItemsByGroup = [string, PortfolioItem[]][];

