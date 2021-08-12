// types
import type { Channel, ChannelFeed } from '../../types/channel/view';

export const mockChannel = (props: Partial<Channel> = {}): Channel => ({
  avatar: '/fixtures/256x256/message.png',
  avatar_original: '/fixtures/256x256/message.png',
  cover: '/fixtures/normal/1920x200.png',
  cover_original: '/fixtures/normal/1920x200.png',
  description: 'Channel Description',
  name: 'Channel Name',
  membersCount: 0,
  ...props,
});

export const mockChannelFeed = (
  props: Partial<ChannelFeed> = {},
): ChannelFeed => ({
  cursor: null,
  data: [],
  ...props,
});
