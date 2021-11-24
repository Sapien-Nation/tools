// helpers
import uuid from '../utils/uuidGenerator';

import type {
  Channel,
  Square,
  Tribe,
  TribePermissions,
} from '../types/tribeBar';

export const mockChannel = ({
  id = uuid(),
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
  id = uuid(),
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
  id = uuid(),
  mainSquareId = uuid(),
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
