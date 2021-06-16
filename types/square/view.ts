import { Content } from '../content';
export interface Square {
  description: string;
  id: string;
  membersCount: number;
  name: string;
}

export interface SquareFeed {
  data: Array<Content>;
  nextCursor: string | null;
}
