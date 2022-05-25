// constants
import { NotificationsType } from '../constants/notifications';

// types
import type {
  Notification,
  NotificationReceiver,
  NotificationSender,
} from '../types/notifications';

export const mockNotificationReceiver = ({
  id = '1000',
  ...props
}: Partial<NotificationReceiver> = {}): NotificationReceiver => ({
  id,
  name: 'jhon doe',
  seen: false,
  username: 'jhondoe',
  ...props,
});

export const mockNotificationSender = ({
  id = '1000',
  ...props
}: Partial<NotificationSender> = {}): NotificationSender => ({
  id,
  username: 'jhondoe',
  ...props,
});

export const mockNotification = ({
  id = '1000',
  ...props
}: Partial<Notification> = {}): Notification => ({
  extra: {},
  id,
  payload: 'This is a Message payload',
  tribeId: '1000',
  type: NotificationsType.BadgeRequestApproval,
  link: '',
  to: mockNotificationReceiver(),
  by: mockNotificationSender(),
  insertedAt: new Date().toISOString(),
  ...props,
});
