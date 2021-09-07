// helpers
import { v4 as uuidv4 } from 'uuid';

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
  id = uuidv4(),
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
  id = uuidv4(),
  ...rest
}: Partial<ContentTribe> = {}): ContentTribe => ({
  id,
  name: `Tribe ${id}`,
  ...rest,
});

export const mockContentGroup = ({
  id = uuidv4(),
  ...rest
}: Partial<ContentGroup> = {}): ContentGroup => ({
  id,
  name: `Group ${id}`,
  type: ContentGroupType.Square,
  ...rest,
});

export const mockContent = ({
  id = uuidv4(),
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
  ...rest,
});
