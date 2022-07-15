// constants
import { NotificationsType } from '../constants/notifications';

// types
import type { ISOString } from './common';

export interface NotificationReceiver {
  id: string;
  name?: string;
  seen: boolean;
  username: string;
}

export interface NotificationSender {
  id: string;
  username: string;
}

export interface Notification {
  extra?: any;
  id: string;
  payload: string;
  tribeId: string;
  type: NotificationsType;
  link: string;
  to: NotificationReceiver;
  by: NotificationSender;
  insertedAt: ISOString;
  extra: any;
}
