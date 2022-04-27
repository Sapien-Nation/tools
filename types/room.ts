// constants
import { MessageType } from '../constants/rooms';

// constants
import { Types as UserTypes } from '../constants/user';
import { RoomMemberType } from '../constants/rooms';

// types
import type { ISOString } from './common';

export interface RoomDetailMember {
  id: string;
  avatar: string;
  userType: RoomMemberType;
  username: string;
}

export interface RoomDetail {
  id: string;
  name: string;
  createdAt: ISOString;
  members: Array<RoomDetailMember>;
  isOwner: boolean;
}

export interface RoomMessageSender {
  id: string;
  avatar: string;
  username: string;
}

export interface RoomMessageReceiver {
  id: string;
  avatar: string;
  username: string;
}

export interface RoomMessageRoom {
  id: string;
  name: string;
  createdAt: ISOString;
}

export interface RoomMessage {
  id: string;
  content: string;
  createdAt: ISOString;
  type: MessageType;
  status?: string;
  sender: RoomMessageSender;
  room?: RoomMessageRoom;
}

export interface RoomMessage {
  id: string;
  content: string;
  createdAt: ISOString;
  type: MessageType;
  status?: string;
  sender: RoomMessageSender;
  room?: RoomMessageRoom;
}

export interface RoomNewMessage {
  id: string;
  createdAt: ISOString;
  by: RoomMessageSender;
  to: RoomMessageReceiver;
  link: string;
  tribeId: string;
  payload: string;
  extra: {
    roomId: string;
    roomName: string;
    tribeId: string;
  };
}

export interface RoomMessageEvent {
  data: RoomNewMessage;
  type: string;
}
