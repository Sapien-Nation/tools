// helpers
import { v4 as uuidv4 } from 'uuid';

// type
import type { Transaction, TransactionInfo, TransactionUser } from '../../types/balance/transactions';

// constants
import { TransactionStatus, TransactionType } from '../../types/balance/transactions';

export const mockTransactionUser = ({ id = uuidv4(), ...rest } : Partial<TransactionUser> = {}): TransactionUser => ({
  id: "1",
  avatar: '/fixtures/256x256/message.png',
  displayName: 'Jhon Doe',
  email: 'jhondoe@gmail.com',
  username: 'jhondoe',
  ...rest,
});

export const mockTransactionInfo = (props: Partial<TransactionInfo> = {}): TransactionInfo => ({
  amount: 100,
  from: null,
  status: TransactionStatus.Pending,
  type: TransactionType.Deposit,
  ...props,
});

export const mockTransaction = (props: Partial<Transaction> = {}): Transaction => ({
  info: mockTransactionInfo(),
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  user: mockTransactionUser(),
  ...props,
});