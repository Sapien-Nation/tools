// types
import type {
  ProfileTribe,
  ProfileTribeChannel,
  ProfileTribePermissions,
} from '../types/tribe';

export const mockTribePermissions = (
  props: Partial<ProfileTribePermissions> = {},
): ProfileTribePermissions => ({
  canAddChannel: false,
  canAddSquare: false,
  ...props,
});

export const mockProfileTribeChannel = ({
  id = '1000',
  ...rest
}: Partial<ProfileTribeChannel> = {}): ProfileTribeChannel => ({
  id,
  name: 'Tribe Channel',
  avatar: null,
  membersCount: 0,
  lastUpdatedAt: new Date().toISOString(),
  ...rest,
});

export const mockProfileTribe = ({
  id = '1000',
  ...rest
}: Partial<ProfileTribe> = {}): ProfileTribe => ({
  id,
  name: `Test Tribe ${id}`,
  avatar: null,
  avatar_original: null,
  channels: [],
  isMain: false,
  mainSquareId: '1000',
  mainChannelId: '1000',
  permissions: mockTribePermissions(),
  ...rest,
});