export interface RawContract {
  value: string;
  address: string;
  decimal: string;
}

export interface Transaction {
  blockNum: string;
  hash: string;
  from: string;
  to: string;
  value: number;
  erc721TokenId: string | null;
  erc1155Metadata: string | null;
  tokenId: string;
  asset: string;
  category: string;
  rawContract: RawContract;
}
