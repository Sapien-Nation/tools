// types
import type { ISOString } from './common';

export interface Passport {
  bio: string;
  title: string;
  username: string;
  tokenId: number;
  image: string;
  name: string;
  passportId: number;
  issueDate: ISOString;
  issuingAuthority: string;
}
