export interface Channel {
  avatar: string;
  avatar_original: string;
  cover: string;
  cover_original: string;
  description: string;
  membersCount: number;
  name: string;
}

export interface ChannelFeed {
  cursor: null | string;
  data: Array<any>;
}
