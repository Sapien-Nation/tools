// constants
import { ContentMimeType, ContentType } from '../constants/content';

// types
import type { ISOString, Media } from './common';

export interface GroupContent {
  id: string;
  name: string;
  avatar: Media | null;
}

export interface ContentOwner {
  id: string;
  displayName: string;
  userName: string;
  avatar: Media | null;
}

export interface Content {
  mimeType: ContentMimeType;
  id: string;
  body: string;
  group: GroupContent;
  createdAt: ISOString;
  type: ContentType;
  owner: ContentOwner;
  imagePreview: Media | null;
}
