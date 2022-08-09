import _uniqueId from 'lodash/uniqueId';

// constants
import { MessageType, RoomMemberType } from '../constants/rooms';

// types
import type {
  RoomBadge,
  RoomBadgePermission,
  RoomDetail,
  RoomDetailMember,
  RoomMessage,
  RoomMessageMention,
  RoomMessageRoom,
  RoomMessageSender,
} from '../types/room';

export const mockRoomDetail = ({
  id = '1',
  ...rest
}: Partial<RoomDetail> = {}): RoomDetail => ({
  id,
  name: `${id} Room`,
  createdAt: new Date().toISOString(),
  members: [],
  isOwner: false,
  ...rest,
});

export const mockRoomDetailMember = ({
  id = '1000',
  ...rest
}: Partial<RoomDetailMember> = {}): RoomDetailMember => ({
  id,
  userType: RoomMemberType.Admin,
  username: '',
  avatar: '',
  displayName: '',
  ...rest,
});

export const mockRoomMessageSender = ({
  id = '1',
  ...rest
}: Partial<RoomMessageSender> = {}): RoomMessageSender => ({
  id,
  avatar: '',
  username: `jhondoe`,
  badges: [],
  ...rest,
});

export const mockRoomMessageRoom = ({
  id = '1',
  ...rest
}: Partial<RoomMessageRoom> = {}): RoomMessageRoom => ({
  id,
  name: `Room ${id}`,
  createdAt: new Date().toISOString(),
  ...rest,
});

export const mockRoomMessageMention = ({
  id = _uniqueId('room_message_mention_'),
  ...rest
}: Partial<RoomMessageMention> = {}): RoomMessageMention => ({
  id,
  avatar: '',
  username: 'jhondoe',
  ...rest,
});

export const mockRoomMessage = ({
  id = _uniqueId('room_message_'),
  ...rest
}: Partial<RoomMessage> = {}): RoomMessage => ({
  id,
  content: '',
  attachments: [],
  createdAt: new Date().toISOString(),
  type: MessageType.Text,
  status: '',
  sender: mockRoomMessageSender(),
  room: mockRoomMessageRoom(),
  mentions: [],
  ...rest,
});

export const mockRoomBadgePermission = (
  props: Partial<RoomBadgePermission> = {},
): RoomBadgePermission => ({
  read: false,
  write: false,
  delete: false,
  grant: false,
  ...props,
});

export const mockRoomBadge = ({
  id = 'room_badge_1',
  ...rest
}: Partial<RoomBadge> = {}): RoomBadge => ({
  id,
  name: 'Badge',
  description: 'Badge description',
  avatar: '',
  color: 'red',
  role: 'MEMBER',
  permission: mockRoomBadgePermission(),
  ...rest,
});
