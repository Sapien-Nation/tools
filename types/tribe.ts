// types
import { ISOString, Media } from './common';

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
  squares: Array<ProfileTribeSquare>;
  permissions: ProfileTribePermissions;
}
