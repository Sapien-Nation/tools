// constants
import { ContentMimeType, ContentType } from '../constants/content';

// types
import type { Content, ContentOwner, GroupContent } from '../types/content';

export const mockContentOwner = ({
  id = '1000',
}: Partial<ContentOwner> = {}): ContentOwner => ({
  id,
  displayName: 'Jhon Doe',
  userName: 'jhondoe',
  avatar: null,
});

export const mockContentGroup = ({
  id = '1000',
}: Partial<GroupContent> = {}): GroupContent => ({
  id,
  name: `Group ${id}`,
  avatar: null,
});

export const mockContent = ({
  id = '6000',
}: Partial<Content> = {}): Content => ({
  id,
  group: mockContentGroup(),
  body: '[{"type":"paragraph","children":[{"text":"Welcome to your channel"}]}]',
  createdAt: new Date().toISOString(),
  type: ContentType.POST,
  owner: mockContentOwner(),
  imagePreview: null,
  mimeType: ContentMimeType.Html,
});
