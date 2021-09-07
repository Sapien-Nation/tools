export interface Wallet {
  balance: string;
  transferSPN: (
    fromUserId: string,
    toUserId: string,
    toAddress: string,
    spnAmount: number,
    contentId?: string,
  ) => void;
  purchaseBadge: (
    amount: number,
    blockchainId: number,
    ownerId,
    parentBadgeId,
    totalPrice: number,
    isJoiningTribe?: boolean,
  ) => Promise<void>;
  transferBadge: (
    fromUserId: string,
    toUserId: string,
    toAddress: string,
    amount: number,
    badgeId: string,
    badgeBlockchainId: number,
    userIsAdmin: boolean,
    contentId?: string,
  ) => Promise<void>;
}
