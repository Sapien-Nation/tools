// types
import type { Media } from './common';
import type { MemberBadge } from './wallet/badge';

export interface Channel {
  description: string;
  id: string;
  membersCount: number;
  name: string;
}

export interface MainChannelPermissions {
  canEdit: boolean;
  canDelete: boolean;
}

export interface HomeFeed {
  avatar: Media;
  avatar_original: Media;
  cover: Media;
  cover_original: Media;
  description: string;
  followersCount: number;
  id: string;
  identifier: string;
  isMain: boolean;
  isMember: boolean;
  memberBadge: MemberBadge;
  name: string;
  membersCount: number;
  permissions: MainChannelPermissions;
  private: boolean;
}
