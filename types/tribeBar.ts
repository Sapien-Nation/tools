// types
import type { ISOString } from './common';

export type TribePermissions = {
  canAddChannel: boolean;
  canAddSquare: boolean;
};

export interface Channel {
  avatar: string;
  id: string;
  lastUpdateAt: ISOString;
  membersCount: number;
  name: string;
}

export interface Square {
  id: string;
  name: string;
}

export interface Tribe {
  avatar: string;
  avatar_original: string;
  channels: Array<Channel>;
  id: string;
  mainSquareId: string;
  name: string;
  squares: Array<Square>;
  permissions: TribePermissions;
  isMain: boolean;
}

export interface CreateTribe {
  avatar: string | null;
  cover: string | null;
  description: string;
  identifier: string;
  name: string;
  private: boolean;
}
