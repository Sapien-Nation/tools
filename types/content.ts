export interface Content {
  id: string;
  data: string;
  createdAt: string;
  type: string;
  contentGroupType?: string;
  contentGroupName?: string;
  owner: {
    id: string,
    displayName: string,
  }
}

export interface Post extends Content {
  type: 'POST'
}

export interface Reply extends Content {
  type: 'REPLY',
  postId: string,
}