// types
import type { ChannelContributor } from '../types/channel';

export const mockChannelContributor = ({
  id = '1000',
  ...rest
}: Partial<ChannelContributor> = {}): ChannelContributor => ({
  id,
  badges: [],
  displayName: 'jhondoe',
  username: 'jhondoe',
  avatar: '',
  ...rest,
});
