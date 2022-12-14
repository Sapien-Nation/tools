// constants
import { MessageType } from '../constants/rooms';

// constants
import { RoomMemberType } from '../constants/rooms';

// types
import type { ISOString } from './common';

export interface RoomDetailMember {
  id: string;
  avatar: string;
  displayName: string;
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

export interface RoomMessageSenderBadge {
  id: string;
  avatar: string;
  color: string;
  name: string;
}

export interface RoomMessageSender {
  id: string;
  avatar: string;
  username: string;
  badges: Array<RoomMessageSenderBadge>;
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

export interface RoomMessageMention {
  avatar: string;
  id: string;
  username: string;
}

export interface RoomMessageAttachment {
  id: string;
  url: string;
  mimeType: string;
  fileName: string;
}

export interface RoomMessage {
  id: string;
  content: string;
  createdAt: ISOString;
  type: MessageType;
  status?: string;
  sender: RoomMessageSender;
  room?: RoomMessageRoom;
  mentions: Array<RoomMessageMention>;
  reactions?: Array<{
    count: number;
    emoji: { id: number | null; name: any };
    me: boolean;
  }>;
  attachments: Array<RoomMessageAttachment>;
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
    messageId: string;
    mentions: Array<string>;
    tribe: { id: string; name: string; avatar: string };
  };
}

export interface RoomDeleteMessage {
  extra: {
    roomId: string;
    roomName: string;
    tribe: { id: string; name: string; avatar: string };
    messageId: string;
  };
}

export interface RoomMessageEvent {
  data: RoomNewMessage;
  type: string;
}

export interface RoomBadgePermission {
  read: boolean;
  write: boolean;
  delete: boolean;
  grant: boolean;
}

export interface RoomBadge {
  id: string;
  name: string;
  description: string;
  avatar: string;
  color: string;
  role: string;
  permission: RoomBadgePermission;
}
