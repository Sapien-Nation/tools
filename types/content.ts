export enum ContentType {
  Post,
  Reply,
}

export enum ContentGroupType {
  Square,
  Channel,
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
}

export interface ContentGroup {
  id: string;
  name: string;
  type: ContentGroupType;
}

export interface Content {
  createdAt: ISOString;
  data: RAWHtml;
  group: ContentGroup;
  id: string;
  image?: string;
  owner: ContentOwner;
  postId?: string;
  topics?: Array<string>;
  tribe: ContentTribe;
  type: ContentType;
}
