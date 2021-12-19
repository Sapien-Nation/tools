// types
import type { ISOString } from './common';

// TODO more replies type
export enum NotificationType {
  NewReply = 'tribe.new_reply',
}

export interface NotificationReceiver {
  string: 'ab352171-741c-45ef-8bd0-8be26b0e3373';
  seen: boolean;
  username: string;
}

export interface NotificationSender {
  string: 'ab352171-741c-45ef-8bd0-8be26b0e3373';
  username: string;
}

export interface Notification {
  id: string;
  payload: string;
  type: NotificationType;
  link: string;
  to: NotificationReceiver;
  by: NotificationSender;
  insertedAt: ISOString;
}
