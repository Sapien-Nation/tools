// types
import type { ISOString } from '../common';

export enum TransactionStatus {
  Pending = 'pending',
  Fail = 'fail',
  Confirmed = 'confirmed',
}

export enum TransactionType {
  Deposit = 'deposit',
  Sell = 'sell',
  Sent = 'sent',
  Received = 'received',
  Purchase = 'purchase',
  Withdrawal = 'withdrawal',
}

export interface TransactionUser {
  avatar: string;
  displayName: string;
  email: string;
  id: string;
  username: string;
};

export interface TransactionInfo {
  amount: number;
  from: null | TransactionUser;
  status: TransactionStatus;
  type: TransactionType;
}

export interface Transaction {
  info: TransactionInfo;
  createdAt: ISOString;
  updatedAt: ISOString;
  user: TransactionUser;
}
