// helpers
import { v4 as uuidv4 } from 'uuid';

// types
import type {
  Content,
  ContentGroup,
  ContentOwner,
  ContentTribe,
} from '../types/content';

// constants
import { ContentType, ContentGroupType } from '../types/content';

export const mockContentOwner = ({
  id = uuidv4(),
  ...rest
}: Partial<ContentOwner> = {}): ContentOwner => ({
  avatar: '/fixtures/256x256/general.png',
  displayName: 'John Doe',
  id,
  userName: 'johndoe',
  ...rest,
});

export const mockContentTribe = ({
  id = uuidv4(),
  ...rest
}: Partial<ContentTribe> = {}): ContentTribe => ({
  id,
  avatar: '/fixtures/256x256/general.png',
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
  canEdit: false,
  canDelete: false,
  createdAt: new Date().toISOString(),
  data: '',
  deletedAt: null,
  group: mockContentGroup(),
  id,
  image: '/fixtures/256x256/general.png',
  owner: mockContentOwner(),
  postId: '',
  topics: [],
  tribe: mockContentTribe(),
  type: ContentType.Post,
  ...rest,
});
