// types
import { User } from '../user';

export interface TransactionType {
  amount: number;
  from: null | User;
  status: 'pending' | 'fail' | 'confirmed';
  type: 'withdrawal' | 'deposit' | 'sent' | 'received' | 'purchase' | 'sell';
}

export interface Transaction {
  info: TransactionType;
  createdAt: ISOString;
  updatedAt: ISOString;
  user: User;
}
