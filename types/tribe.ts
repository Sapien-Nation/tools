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

export interface ProfileTribe {
  id: string;
  name: string;
  avatar: Media;
  avatar_original: Media;
  channels: Array<ProfileTribeChannel>;
  isMain: boolean;
  mainSquareId: string;
  mainChannelId: string;
  permissions: ProfileTribePermissions;
}

export interface MainFeedTribe {
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
