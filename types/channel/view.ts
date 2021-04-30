// types
import type { Post } from '../post';

export interface Channel {
  avatar: string;
  cover: string;
  description: string;
  name: string;
  membersCount: number
}

export interface ChannelFeed {
  cursor: null | string;
  hasMore: boolean;
  posts: Array<Post>;
}