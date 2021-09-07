import type { ISOString, RAWHtml } from './common';

export enum ContentType {
  Post = 'POST',
  Reply = 'REPLY',
}

export enum ContentGroupType {
  Square = 'SQUARE',
  Channel = 'CHANNEL',
}

export interface ContentAuthor {
  avatar: string;
  displayName: string;
  id: string;
  userName: string;
  walletAddress: string | null;
}

export interface ContentBadge {
  id: string;
  name: string;
  avatar: string | null;
}

export interface ContentTribe {
  id: string;
  name: string;
}

export interface ContentGroup {
  id: string;
  name: string;
  type: ContentGroupType;
}

export interface Content {
  author: ContentAuthor;
  badges: Array<ContentBadge>;
  body: RAWHtml;
  canEdit: boolean;
  canDelete: boolean;
  createdAt: ISOString;
  deletedAt: ISOString | null;
  group: ContentGroup;
  id: string;
  imagePreview: string | null;
  postId?: string;
  topics?: Array<string>;
  tribe: ContentTribe;
  type: ContentType;
}
