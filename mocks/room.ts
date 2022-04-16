import _uniqueId from 'lodash/uniqueId';

// constants
import { MessageType } from '../constants/rooms';

// types
import type {
  RoomDetail,
  RoomDetailMember,
  RoomMessage,
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
  displayName: `Member ${id}`,
  avatar: null,
  ...rest,
});

export const mockRoomMessageSender = ({
  id = '1',
  ...rest
}: Partial<RoomMessageSender> = {}): RoomMessageSender => ({
  id,
  avatar: null,
  displayName: 'John Doe',
  username: `jhondoe`,
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
  ...rest,
});
