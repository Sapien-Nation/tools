import type { ISOString, RAWHtml } from './common';

export enum ContentType {
  Post = 'POST',
  Reply = 'REPLY',
}

export enum ContentGroupType {
  Square = 'SQUARE',
  Channel = 'CHANNEL',
}

export interface ContentOwner {
  avatar: string;
  displayName: string;
  id: string;
  userName: string;
}

export interface ContentTribe {
  id: string;
  name: string;
  avatar: string;
}

export interface ContentGroup {
  id: string;
  name: string;
  type: ContentGroupType;
}

export interface Content {
  canEdit: boolean;
  canDelete: boolean;
  createdAt: ISOString;
  data: RAWHtml;
  deletedAt: ISOString | null;
  group: ContentGroup;
  id: string;
  image?: string;
  owner: ContentOwner;
  postId?: string;
  preview: string;
  topics?: Array<string>;
  tribe: ContentTribe;
  type: ContentType;
}
