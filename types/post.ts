// types
import type { Badge } from './badge';

export interface PostTribe {
  id: string;
  name: string;
}

export interface PostUser {
  avatar: string;
  id: string;
  username: string;
  displayName: string;
}

export interface PostChannel {
  name: string;
}

export interface Post {
  badges: Array<Badge>;
  body: RAWHtml;
  channel?: PostChannel;
  createdAt: ISOString;
  id: string;
  image?: string;
  owner: PostUser;
  topics: Array<string>;
  tribe: PostTribe;
};
