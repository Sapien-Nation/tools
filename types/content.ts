// types
import type { ISOString, Media } from './common';

export enum ContentType {
  POST = 'POST',
}

export enum GroupType {
  SQUARE = 'SQUARE',
}

export interface Topic {
  id: string;
}

export interface ContentGroup {
  id: string;
  name: string;
  type: GroupType;
}

export interface ContentAuthor {
  id: string;
  displayName: string;
  userName: string;
  avatar: Media | null;
  walletAddress: null;
}

export interface ContentTribe {
  id: string;
  name: string;
}

export interface ContentBadge {
  id: string;
}

export interface Content {
  id: string;
  body: any;
  createdAt: ISOString;
  deletedAt: ISOString | null;
  canEdit: boolean;
  canDelete: boolean;
  type: ContentType;
  postId: string;
  topics: Array<Topic>;
  group: ContentGroup;
  author: ContentAuthor;
  tribe: ContentTribe;
  imagePreview: Media | null;
  badges: Array<ContentBadge>;
  spn: number;
}
