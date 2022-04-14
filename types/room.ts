// types
import type { ISOString } from './common';

export interface RoomDetailMember {
  id: string;
  displayName: string;
  avatar: string;
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
  displayName: string;
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
  type: string;
  status: string;
  sender: RoomMessageSender;
  room: RoomMessageRoom;
}
