// types
import type { ISOString } from './common';

export interface Passport {
  bio: string;
  title: string;
  displayName: string;
  username: string;
  image: string;
  passportId: number;
  issueDate: ISOString;
  issuingAuthority: string;
}
