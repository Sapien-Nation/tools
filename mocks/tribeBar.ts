// helpers
import { v4 as uuidv4 } from 'uuid';

import type {
  Channel,
  Square,
  Tribe,
  TribePermissions,
} from '../types/tribeBar';

export const mockChannel = ({
  id = uuidv4(),
  ...rest
}: Partial<Channel> = {}) => ({
  avatar: '/fixtures/256x256/message.png',
  id,
  lastUpdateAt: '2021-02-06T03:14:49.943Z',
  membersCount: 0,
  name: `Channel ${id}`,
  ...rest,
});

export const mockSquare = ({
  id = uuidv4(),
  ...rest
}: Partial<Square> = {}) => ({
  id,
  name: `Square ${id}`,
  ...rest,
});

export const mockPermissions = (props: Partial<TribePermissions> = {}) => ({
  canAddChannel: false,
  canAddSquare: false,
  ...props,
});

export const mockTribe = ({ id = uuidv4(), ...rest }: Partial<Tribe> = {}) => ({
  avatar: '/fixtures/256x256/general.png',
  channels: [],
  id,
  name: `Tribe ${id}`,
  squares: [],
  permissions: mockPermissions(),
  ...rest,
});
