// constants
import {
  Types as UserTypes,
  Status as UserStatus,
  PassportStatus,
} from '../constants/user';

// types
import type { PublicProfile, User, UserPassport } from '../types/user';

export const mockUserPassport = ({
  ...rest
}: Partial<UserPassport> = {}): UserPassport => ({
  bio: '',
  title: '',
  media: '',
  tokenId: 1,
  image: '',
  username: 'jhondoe',
  passportId: 0,
  issueDate: new Date().toISOString(),
  issuingAuthority: 'Sapien Nation',
  status: PassportStatus.P,
  ...rest,
});

export const mockUser = ({
  id = '1000',
  ...rest
}: Partial<User> = {}): User => ({
  passport: null,
  avatar: '',
  id,
  title: '',
  bio: '',
  type: UserTypes.User,
  username: 'jhon',
  status: UserStatus.A,
  firstName: 'doe',
  lastName: 'doe',
  email: 'jhon@test.com',
  createdAt: new Date().toISOString(),
  displayName: 'jhon doe',
  updatedAt: new Date().toISOString(),
  walletAddress: '0xb794f5ea0ba39494ce839613fffba74279579268',
  ...rest,
});

export const mockPublicPofile = ({
  id = '1000',
  ...rest
}: Partial<PublicProfile> = {}): PublicProfile => ({
  avatar: '',
  passport: null,
  firstName: 'John',
  lastName: 'Doe',
  username: 'johndoe',
  title: '',
  id,
  bio: '',
  ...rest,
});
