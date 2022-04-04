import type { ISOString } from './common';

export enum Types {
  User = 'USER',
}

export enum Status {
  A,
}

export interface User {
  avatar: string;
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
}
