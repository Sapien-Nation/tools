// types
import { Media } from './common';

export interface Square {
  description: string;
  id: string;
  membersCount: number;
  name: string;
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
  name: string;
  membersCount: number;
}
