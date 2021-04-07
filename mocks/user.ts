// fixtures
import user1 from '../fixtures/user_1.json';

// types
import type { User } from '../types/user';

export const mockUser = (props: Partial<User> = {}) => ({
  ...user1,
  ...props,
});

export const mockUsers = (users: Array<User> = []) => {
  return [user1, ...users];
};
