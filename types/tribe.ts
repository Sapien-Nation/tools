// types
import { Channel } from './channel';
import { Square } from './square';

export type Permissions = {
  canAddChannel: boolean;
  canAddSquare: boolean;
};

export type Tribe = {
  id: string;
  name: string;
  image: string;
  cover?: string;
  squares?: Array<Square>;
  channels?: Array<Channel>;
  description: string;
  membersCount: number;
  permissions: Permissions;
};

export type TribePreview = Tribe;
