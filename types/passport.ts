// types
import type { ISOString } from './common';

export interface Passport {
  avatar: string;
  passportId: number;
  issueDate: ISOString;
  issuingAuthority: string;
}
