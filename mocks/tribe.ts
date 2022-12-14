// constants
import { RoomType } from '../constants/rooms';
import { Role } from '../constants/tribe';

// types
import type {
  BadgeTransaction,
  BadgeTransactionGrantToUsers,
  DiscoverBadge,
  DiscoveryTribe,
  ProfileTribe,
  ProfileTribeChannel,
  ProfileTribePermissions,
  ProfileTribeRoom,
  ProfileTribeThreadRoom,
  RoomTopic,
  TribeBadge,
  TribeInvite,
  TribeMember,
  TribeVault,
  TribeVaultBadges,
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
  unreadMentions: 0,
  hasUnread: false,
  lastMessageId: '',
  threads: [],
  type: RoomType.Public,
  private: false,
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
  isUpgraded: false,
  permissions: mockTribePermissions(),
  role: Role.Member,
  safeAddress: null,
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
  isUpgraded: false,
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

export const mockTribeVault = ({
  ...rest
}: Partial<TribeVault> = {}): TribeVault => ({
  badges: [],
  ...rest,
});

export const mockTribeVaultBadges = ({
  id = '1000',
  ...rest
}: Partial<TribeVaultBadges> = {}): TribeVaultBadges => ({
  id,
  ...rest,
});

export const mockTribeMember = ({
  id = '1000',
  ...rest
}: Partial<TribeMember> = {}): TribeMember => ({
  id,
  avatar: '',
  displayName: 'Jhon Doe',
  username: 'jhondoe',
  walletAddress: '',
  ...rest,
});

export const mockTribeBadge = ({
  id = '1000',
  ...rest
}: Partial<TribeBadge> = {}): TribeBadge => ({
  id,
  color: '#6200EA',
  name: `Badge ${id}`,
  description: '',
  avatar: '',
  owners: [],
  parentId: '',
  tribes: [],
  ...rest,
});

export const mockBadgeTransactionGrantToUsers = ({
  id = '1000',
  ...rest
}: Partial<BadgeTransactionGrantToUsers> = {}): BadgeTransactionGrantToUsers => ({
  id,
  username: 'jhondoe',
  avatar: '',
  ...rest,
});

export const mockBadgeTransaction = ({
  id = '1000',
  ...rest
}: Partial<BadgeTransaction> = {}): BadgeTransaction => ({
  id,
  safeTxHash: '0x0000000',
  badgeId: `2000`,
  grantToUsers: [],
  approvals: 0,
  requiredApprovals: 0,
  proposedBy: '0x0000000',
  signedBy: [],
  rejectedBy: [],
  ...rest,
});

export const mockDiscoverBadge = ({
  id = '1000',
  ...rest
}: Partial<DiscoverBadge> = {}): DiscoverBadge => ({
  id,
  avatar: '',
  name: 'name',
  color: 'red',
  description: 'description',
  ...rest,
});

export const mockProfileTribeThreadRoom = ({
  id = '1000',
  ...rest
}: Partial<ProfileTribeThreadRoom> = {}): ProfileTribeThreadRoom => ({
  archived: false,
  createdAt: 'string',
  id,
  name: `thread room ${id}`,
  parentId: 'e3049d8f-09c1-493f-a6a5-03313cc8e009',
  ...rest,
});
