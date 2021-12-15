// types
import { Media } from '../common';

export interface MemberBadge {
  id: string;
  blockchainId: string;
  parentBadgeId: string;
  name: string;
  price: string;
  avatar: null | Media;
}
