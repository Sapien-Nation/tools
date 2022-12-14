// constants
import { Types, Status, PassportStatus } from '../constants/user';

// types
import type { ISOString } from './common';

export interface UserPassport {
  bio: string;
  title: string;
  tokenId: number;
  username: string;
  media?: string;
  image: string;
  passportId: number;
  issueDate: ISOString;
  issuingAuthority: string;
  status: PassportStatus;
}

export interface User {
  passport: UserPassport | null;
  avatar: string;
  displayName: string;
  bio: string;
  id: string;
  type: Types.User;
  username: string;
  status: Status.A;
  firstName: string;
  lastName: string;
  email: string;
  title: string;
  createdAt: ISOString;
  updatedAt: ISOString;
  v2Id?: string;
  walletAddress: string;
  flairBadges: Array<{
    badgeid: string;
    name: string;
    avatar: string;
    color: string;
  }>;
}

export interface PublicProfile {
  avatar: string;
  id: string;
  bio: string;
  passport: UserPassport | null;
  firstName: string;
  lastName: string;
  username: string;
  title: string;
}
