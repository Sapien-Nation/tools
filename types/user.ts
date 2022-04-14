// constants
import { Types, Status } from '../constants/user';

// types
import type { ISOString } from './common';

export interface User {
  avatar: string;
  bio: string;
  id: string;
  type: Types.User;
  username: string;
  status: Status.A;
  firstName: string;
  lastName: string;
  displayName: string;
  email: string;
  createdAt: ISOString;
  updatedAt: ISOString;
  v2Id?: string;
  walletAddress: string;
}

export interface PublicProfile {
  avatar: string;
  id: string;
  bio: string;
  displayName: string;
}
