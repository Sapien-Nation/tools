// constants
import { Types as UserTypes, Status as UserStatus } from '../constants/user';

// types
import type { User } from '../types/user';

export const mockUser = ({
  id = '1000',
  ...rest
}: Partial<User> = {}): User => ({
  avatar: '',
  id,
  bio: '',
  type: UserTypes.User,
  username: 'jhon',
  status: UserStatus.A,
  firstName: 'doe',
  lastName: 'doe',
  displayName: 'Jhon Doe',
  email: 'jhon@test.com',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  ...rest,
});
