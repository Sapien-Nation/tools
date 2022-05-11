// types
import type { RawContract, Transaction } from '../types/web3';

export const mockRawContract = (
  props: Partial<RawContract> = {},
): RawContract => ({
  value: '0x000000000000',
  address: null,
  decimal: '0x12',
  ...props,
});

export const mockTxHistory = (
  props: Partial<Transaction> = {},
): Transaction => ({
  blockNum: '0x000000',
  hash: '0x000000000000000000000000000000000000000000000000000000000000',
  from: '0x000000000000000000000000000000000000',
  to: '0x000000000000000000000000000000000000000000000000',
  value: 0,
  erc721TokenId: null,
  erc1155Metadata: null,
  tokenId: null,
  asset: 'ETH',
  category: 'external',
  rawContract: mockRawContract(),
  ...props,
});
