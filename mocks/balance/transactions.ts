// type
import { Transaction } from '../../types/balance/transactions';

// fixtures
import transaction1 from '../../fixtures/transactions/transaction1.json';

export const mockTransactions = (transactions: Array<Transaction> = []) => {
  return [transaction1, ...transactions];
};
