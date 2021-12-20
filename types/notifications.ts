// types
import type { ISOString } from './common';

export enum NotificationType {
  BadgeUser = 'token.badge_user',
  BadgePost = 'token.badge_post',
  BadgePurchased = 'store.badge_purchased',
  BadgePurchasedForAdmin = 'store.badge_purchased_for_admin',
  BadgePriceUpdatedForAdmin = 'store.badge_price_updated_for_admin',
  ChannelInvite = 'tribe.channel_invite',
  DepositSPN = 'token.deposit_spn',
  JoinRequestResolved = 'tribe.join_request_resolved',
  LeaveTribe = 'store.leave_tribe',
  Mentioned = 'tribe.mentioned',
  NewReply = 'tribe.new_reply',
  ReportPost = 'tribe.report_post',
  SendSPNUser = 'token.send_spn_user',
  SendSPNPost = 'token.send_spn_post',
  SapienBadgeReceived = 'store.sapien_badge_received',
  WithdrawSPN = 'token.withdraw_spn',
}

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
  type: NotificationType;
  link: string;
  to: NotificationReceiver;
  by: NotificationSender;
  insertedAt: ISOString;
}
