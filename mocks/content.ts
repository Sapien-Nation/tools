// helpers
import uuid from '../utils/uuidGenerator';

// types
import type {
  Content,
  ContentGroup,
  ContentAuthor,
  ContentTribe,
} from '../types/content';

// constants
import { ContentType, ContentGroupType } from '../types/content';

export const mockContentOwner = ({
  id = uuid(),
  ...rest
}: Partial<ContentAuthor> = {}): ContentAuthor => ({
  avatar: '/fixtures/256x256/general.png',
  displayName: 'John Doe',
  id,
  userName: 'johndoe',
  walletAddress: '',
  ...rest,
});

export const mockContentTribe = ({
  id = uuid(),
  ...rest
}: Partial<ContentTribe> = {}): ContentTribe => ({
  id,
  name: `Tribe ${id}`,
  ...rest,
});

export const mockContentGroup = ({
  id = uuid(),
  ...rest
}: Partial<ContentGroup> = {}): ContentGroup => ({
  id,
  name: `Group ${id}`,
  type: ContentGroupType.Square,
  ...rest,
});

export const mockContent = ({
  id = uuid(),
  ...rest
}: Partial<Content> = {}): Content => ({
  author: mockContentOwner(),
  badges: [],
  body: '',
  canEdit: false,
  canDelete: false,
  createdAt: new Date().toISOString(),
  deletedAt: null,
  group: mockContentGroup(),
  id,
  imagePreview: '/fixtures/256x256/general.png',
  postId: '',
  topics: [],
  tribe: mockContentTribe(),
  type: ContentType.Post,
  spn: 0,
  ...rest,
});
