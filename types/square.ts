// types
import type { Media } from './common';
import type { MemberBadge } from './wallet/badge';

export interface Square {
  description: string;
  id: string;
  membersCount: number;
  name: string;
}

export interface MainSquarePermissions {
  canEdit: boolean;
  canDelete: boolean;
}

export interface MainSquare {
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
  permissions: MainSquarePermissions;
  private: boolean;
}
