// helpers
import { v4 as uuidv4 } from 'uuid';

import { User, Types, Status } from '../types/user';

export const mockUser = ({ id = uuidv4(), ...rest }: Partial<User> = {}) => ({
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
