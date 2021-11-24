// helpers
import uuid from '../../utils/uuidGenerator';

// type
import type {
  Transaction,
  TransactionInfo,
  TransactionUser,
} from '../../types/wallet/transactions';

// constants
import {
  TransactionStatus,
  TransactionType,
} from '../../types/wallet/transactions';

export const mockTransactionUser = ({
  id = uuid(),
  ...rest
}: Partial<TransactionUser> = {}): TransactionUser => ({
  id: '1',
  avatar: '/fixtures/256x256/message.png',
  displayName: 'Jhon Doe',
  email: 'jhondoe@gmail.com',
  username: 'jhondoe',
  ...rest,
});

export const mockTransactionInfo = (
  props: Partial<TransactionInfo> = {},
): TransactionInfo => ({
  amount: 100,
  from: null,
  status: TransactionStatus.P,
  type: TransactionType.DEPOSIT_SPN,
  ...props,
});

export const mockTransaction = (
  props: Partial<Transaction> = {},
): Transaction => ({
  // @ts-ignore
  info: mockTransactionInfo(),
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  user: mockTransactionUser(),
  ...props,
});
