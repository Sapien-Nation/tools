
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
  channels: Array<Channel>
  id: string;
  name: string;
  squares: Array<Square>
  permissions: Array<Permissions>;
}
