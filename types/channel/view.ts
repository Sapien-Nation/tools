export interface Channel {
  avatar: string;
  cover: string;
  description: string;
  name: string;
  membersCount: number
}

export interface ChannelFeed {
  cursor: null | string;
  data: Array<any>;
}
