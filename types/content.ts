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
