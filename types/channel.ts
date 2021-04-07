// types
import { Badge } from './badge';
import { Rss } from './rss';

export type Channel = {
  contributorsBadges: Array<Badge>;
  cover: string;
  description: string;
  id: string;
  image: string;
  lastUpdateAt: ISOString;
  membersCount: number;
  name: string;
  subscriptionBadges: Array<Badge>;
  rss: Array<Rss>;
  viewersBadges: Array<Badge>;
};
