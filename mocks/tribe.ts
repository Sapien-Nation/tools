// constants
import { Role } from '../constants/tribe';

// types
import type {
  DiscoveryTribe,
  ProfileTribe,
  ProfileTribeChannel,
  ProfileTribePermissions,
  ProfileTribeRoom,
  RoomTopic,
  TribeInvite,
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
  name: `Tribe Channel ${id}`,
  avatar: null,
  membersCount: 0,
  lastUpdatedAt: new Date().toISOString(),
  ...rest,
});

export const mockRoomTopic = ({
  id = '1',
  ...rest
}: Partial<RoomTopic> = {}): RoomTopic => ({
  id,
  name: `Topic ${id}`,
  ...rest,
});

export const mockProfileTribeRoom = ({
  id = '1000',
  ...rest
}: Partial<ProfileTribeRoom> = {}): ProfileTribeRoom => ({
  id,
  name: `Room ${id}`,
  topics: [],
  createdAt: new Date().toISOString(),
  unreads: 0,
  lastMessageId: '',
  ...rest,
});

export const mockProfileTribe = ({
  id = '1000',
  ...rest
}: Partial<ProfileTribe> = {}): ProfileTribe => ({
  id,
  name: `Test Tribe ${id}`,
  avatar: null,
  channels: [],
  isMain: false,
  rooms: [],
  identifier: '',
  permissions: mockTribePermissions(),
  role: Role.Member,
  ...rest,
});

export const mockDiscoveryTribe = ({
  id = '1000',
  ...rest
}: Partial<DiscoveryTribe> = {}): DiscoveryTribe => ({
  id,
  name: `Tribe ${id}`,
  avatar: null,
  avatar_original: null,
  cover: null,
  cover_original: null,
  description: '',
  membersCount: 0,
  ...rest,
});

export const mockTribeInvite = ({
  id = '1000',
  ...rest
}: Partial<TribeInvite> = {}): TribeInvite => ({
  id,
  avatar: null,
  name: `Tribe ${id}`,
  ownerName: 'Jhon Doe',
  membersCount: 0,
  ...rest,
});
