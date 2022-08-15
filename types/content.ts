// constants
import { ContentMimeType, ContentType } from '../constants/content';

// types
import type { ISOString, Media } from './common';
import type { ProfileTribeThreadRoom } from './tribe';

export interface GroupContent {
  id: string;
  name: string;
  avatar: Media | null;
}

export interface ContentOwner {
  id: string;
  displayName: string;
  username: string;
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
  threads: Array<ProfileTribeThreadRoom>;
}
