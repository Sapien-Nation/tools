// types
import type { Media } from './common';
import type { MemberBadge } from './wallet/badge';

export interface ChannelPermissions {
  canEdit: boolean;
  canDelete: boolean;
}

export interface Channel {
  avatar: string;
  cover: string;
  description: string;
  id: string;
  membersCount: number;
  name: string;
  permissions: ChannelPermissions;
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

export interface ChannelContributorBadge {
  id: string;
  avatar: string;
  color: string;
  name: string;
}

export interface ChannelContributor {
  id: string;
  displayName: string;
  username: string;
  avatar: string;
  badges: Array<ChannelContributorBadge>;
}
