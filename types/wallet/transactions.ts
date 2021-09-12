// types
import type { ISOString } from '../common';

export enum TransactionStatus {
  P = 'pending',
  F = 'fail',
  A = 'confirmed',
}

export enum TransactionType {
  DEPOSIT_SPN = 'deposit',
  SELL_BADGE = 'sell',
  SEND_SPN = 'sent',
  RECEIVE_SPN = 'spn received',
  RECEIVE_BADGE = 'badge received',
  PURCHASE_BADGE = 'purchase',
  WITHDRAW_SPN = 'withdrawal',
}

export interface TransactionUser {
  avatar: string;
  displayName: string;
  id: string;
  email?: string;
  username?: string;
}

export interface TransactionInfo {
  amount: number;
  from: null | TransactionUser;
  status: TransactionStatus;
  type: TransactionType;
}

// export interface Transaction {
//   info: TransactionInfo;
//   createdAt: ISOString;
//   updatedAt: ISOString;
//   user: TransactionUser;
// }

export interface Transaction {
  amount: number;
  createdAt: ISOString;
  status: TransactionStatus;
  user?: TransactionUser;
  txHash: string;
  type: TransactionType;
}
