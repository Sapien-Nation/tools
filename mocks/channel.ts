// fixtures
import channel from '../fixtures/channel_1.json';

// types
import type { Channel } from '../types/channel';

export const mockChannel = (props: Partial<Channel> = {}) => ({
  ...channel,
  ...props,
});
