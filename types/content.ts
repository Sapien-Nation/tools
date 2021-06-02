type contentType = 'POST' | 'REPLY';
type contentGroupType = 'SQUARE' | 'CHANNEL';

export interface ContentOnwer {
  avatar: string,
  displayName: string,
  id: string,
  userName: string,
}

export interface ContentTribe {
  name: string;
  id: string;
}

export interface ContentGroup { // Groups can be Channels or Squares
  id: string;
  name: string;
  type: contentGroupType;
}

export interface Content {
  group: ContentGroup;
  createdAt: ISOString;
  data: RAWHtml;
  id: string;
  image?: string; // optional image, maybe not needed on replies preview
  owner: ContentOnwer;
  postId?: string, // only for replies, the postId linked to the reply
  topics?: Array<string>;
  tribe: ContentTribe;
  type: contentType; // post / reply
}
