export interface Wallet {
  balance: string;
  transferSPN: (
    fromUserId: string,
    toUserId: string,
    toAddress: string,
    spnAmount: number,
  ) => void;
  purchaseBadge: (
    amount: number,
    blockchainId: number,
    ownerId,
    parentBadgeId,
    totalPrice: number,
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
