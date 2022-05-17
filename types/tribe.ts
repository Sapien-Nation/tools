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
  unreads: number;
  lastMessageId: string;
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
