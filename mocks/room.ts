import _uniqueId from 'lodash/uniqueId';

// constants
import { MessageType, RoomMemberType } from '../constants/rooms';

// types
import type {
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
  avatar: null,
  displayName: '',
  ...rest,
});

export const mockRoomMessageSender = ({
  id = '1',
  ...rest
}: Partial<RoomMessageSender> = {}): RoomMessageSender => ({
  id,
  avatar: null,
  username: `jhondoe`,
  badge: null,
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
  createdAt: new Date().toISOString(),
  type: MessageType.Text,
  status: '',
  sender: mockRoomMessageSender(),
  room: mockRoomMessageRoom(),
  mentions: [],
  ...rest,
});
