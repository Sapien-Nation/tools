// constants
import { Role } from '../constants/tribe';

// types
import type { ISOString, Media } from './common';
import type { MemberBadge } from './wallet/badge';

export interface ProfileTribeChannel {
  id: string;
  name: string;
  avatar: Media;
  membersCount: number;
  lastUpdatedAt: ISOString;
}

export interface ProfileTribeSquare {
  id: string;
  name: string;
}

export interface ProfileTribePermissions {
  canAddChannel: boolean;
  canAddSquare: boolean;
}

export interface RoomTopic {
  id: string;
  name: string;
}

export interface ProfileTribeRoom {
  id: string;
  name: string;
  createdAt: ISOString;
  topics: Array<RoomTopic>;
  lastMessageId: string;
  hasUnread: boolean;
  unreadMentions: number;
}

export interface ProfileTribe {
  id: string;
  name: string;
  avatar: Media;
  identifier: string;
  isUpgraded: boolean;
  channels: Array<ProfileTribeChannel>;
  isMain: boolean;
  rooms: Array<ProfileTribeRoom>;
  permissions: ProfileTribePermissions;
  role: Role;
  safeAddress: string | null;
}

export interface MainFeedTribe {
  id: string;
  avatar: Media;
  avatar_original: Media;
  cover: Media;
  cover_original: Media;
  description: string;
  followersCount: number;
  identifier: string;
  isMember: boolean;
  memberBadge: MemberBadge;
  membersCount: number;
  name: string;
  role: Role;
}

export interface DiscoveryTribe {
  id: string;
  avatar: Media;
  avatar_original: Media;
  cover: Media;
  cover_original: Media;
  description: string;
  name: string;
  membersCount: number;
}

export interface TribeInvite {
  id: string;
  avatar: Media | null;
  name: string;
  ownerName: string;
  membersCount: number;
}

export interface TribeVaultBadges {
  id: string;
}

export interface TribeVault {
  badges: Array<TribeVaultBadges>;
}

export interface TribeMember {
  avatar: string;
  id: string;
  username: string;
  displayName: string;
  walletAddress: string;
}

export interface TribeBadgeTribe {
  avatar: string;
  id: string;
  name: string;
}

export interface TribeBadge {
  avatar: string;
  color: string;
  id: string;
  description: string;
  name: string;
  owners: Array<string>;
}

export interface TribeDiscoveryBadge {
  color: string;
  id: string;
  avatar: string;
  description: string;
  name: string;
  numberIssued: number;
  tribeName: string;
  owners: Array<string>;
}
