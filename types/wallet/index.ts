export interface Wallet {
  getBalance: () => void;
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
  ) => void;
}
