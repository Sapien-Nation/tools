// helpers
import uuid from '../utils/uuidGenerator';

import { User, Types, Status } from '../types/user';

export const mockUser = ({ id = uuid(), ...rest }: Partial<User> = {}) => ({
  avatar: '/fixtures/256x256/message.png',
  id,
  type: Types.User,
  username: 'jhondoe',
  status: Status.A,
  firstName: 'Jhon',
  lastName: 'Doe',
  displayName: 'Jhon Doe',
  email: 'jhondoe@gmail.com',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  ...rest,
});
