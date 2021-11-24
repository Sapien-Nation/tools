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
}: Partial<Channel> = {}): Channel => ({
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
}: Partial<Square> = {}): Square => ({
  id,
  name: `Square ${id}`,
  ...rest,
});

export const mockPermissions = (
  props: Partial<TribePermissions> = {},
): TribePermissions => ({
  canAddChannel: false,
  canAddSquare: false,
  canDeleteTribe: false,
  ...props,
});

export const mockTribe = ({
  id = uuidv4(),
  mainSquareId = uuidv4(),
  ...rest
}: Partial<Tribe> = {}): Tribe => ({
  avatar: '/fixtures/256x256/general.png',
  avatar_original: '/fixtures/256x256/general.png',
  channels: [],
  id,
  isMain: false,
  mainSquareId,
  name: `Tribe ${id}`,
  permissions: mockPermissions(),
  squares: [],
  ...rest,
});
