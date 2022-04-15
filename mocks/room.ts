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
}: Partial<RoomDetail> = {}): RoomDetail => ({
  id,
  name: `${id} Room`,
  createdAt: new Date().toISOString(),
  members: [],
  isOwner: false,
});

export const mockRoomDetailMember = ({
  id = '1000',
}: Partial<RoomDetailMember> = {}): RoomDetailMember => ({
  id,
  displayName: `Member ${id}`,
  avatar: null,
});

export const mockRoomMessageSender = ({
  id = '1',
}: Partial<RoomMessageSender> = {}): RoomMessageSender => ({
  id,
  avatar: null,
  displayName: 'John Doe',
  username: `jhondoe`,
});

export const mockRoomMessageRoom = ({
  id = '1',
}: Partial<RoomMessageRoom> = {}): RoomMessageRoom => ({
  id,
  name: `Room ${id}`,
  createdAt: new Date().toISOString(),
});

export const mockRoomMessage = ({
  id = '1',
}: Partial<RoomMessage> = {}): RoomMessage => ({
  id,
  content: '',
  createdAt: new Date().toISOString(),
  isOptimistic: false,
  type: '',
  status: '',
  sender: mockRoomMessageSender(),
  room: mockRoomMessageRoom(),
});
