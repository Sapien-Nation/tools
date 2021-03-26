// types
import { Channel } from './channel';
import { Square } from './square';

export type Permissions = {
  canAddChannel: boolean;
};

export type Tribe = {
  id: string;
  name: string;
  image: string;
  notificationNumber: number;
  squares?: Array<Square>;
  channels?: Array<Channel>;
  permissions: Permissions;
};
