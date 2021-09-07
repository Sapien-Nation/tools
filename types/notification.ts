export enum EventType {
  ChannelInvite = 'tribe.channel_invite',
  JoinRequestResolved = 'tribe.join_request_resolved',
  NewReply = 'tribe.new_reply',
  ReportPost = 'tribe.report_post',
  Mentioned = 'tribe.mentioned',
  BadgeUser = 'token.badge_user',
  BadgePost = 'token.badge_post',
  SendSPNUser = 'token.send_spn_user',
  SendSPNPost = 'token.send_spn_post',
  DepositSPN = 'token.deposit_spn',
  WithdrawSPN = 'token.withdraw_spn',
  BadgePurchasedForAdmin = 'store.badge_purchased_for_admin',
  BadgePurchased = 'store.badge_purchased',
  BadgePriceUpdatedForAdmin = 'store.badge_price_updated_for_admin',
  leaveTribe = 'store.leave_tribe',
  SapienBadgeReceived = 'store.sapien_badge_received',
}

export type UserBase = {
  id: string;
  username: string;
};

export type EventBase = {
  to: UserBase & {
    seen: boolean;
  };
  by: UserBase;
};

export type EventData = EventBase & {
  type: string;
  payload: string;
  extra?: any;
  link: string;
  insertedAt: string;
};

export type UserEventData = EventBase & {
  id: string;
  avatar: string;
  type: string;
  payload: string;
  extra?: any;
  link: string;
  insertedAt: string;
};

export interface NotificationWebSocket {
  type: EventType;
  data: EventData;
}

export interface UserNotificationResult {
  count: number;
  notifications: Array<UserEventData>;
}
