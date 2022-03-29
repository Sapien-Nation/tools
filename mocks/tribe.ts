// types
import type {
  ProfileTribe,
  ProfileTribeChannel,
  ProfileTribePermissions,
  ProfileTribeRoom,
  RoomTopic,
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
  rooms: [],
  permissions: mockTribePermissions(),
  ...rest,
});
