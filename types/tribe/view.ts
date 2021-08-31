interface MemberBadge {
  avatar: string;
  blockchainId: string;
  id: string;
  name: string;
  parentBadgeId: string;
  price: number;
}

export interface Tribe {
  avatar: string;
  avatar_original: string;
  cover: string;
  cover_original: string;
  description: string;
  followersCount: number;
  identifier: string;
  isMember?: boolean;
  memberBadge?: MemberBadge | null;
  membersCount: number;
  name: string;
  role?: string | null; //TODO: use enum
}
