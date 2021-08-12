export interface Channel {
  avatar: string;
  avatar_original: string;
  cover: string;
  cover_original: string;
  description: string;
  membersCount: number;
  name: string;
}

export interface CreateChannel {
  avatar: string | null;
  cover: string | null;
  description: string;
  identifier: string;
  name: string;
  private: boolean;
}
