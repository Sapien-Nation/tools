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

export interface Post {
  badges: Array<Badge>;
  body: RAWHtml
  createdAt: ISOString;
  owner: PostUser;
  topics: Array<string>;
  tribe: PostTribe;
};
