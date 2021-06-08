// types
import type { Profile } from '../types/profile';

export const mockProfile = (props: Partial<Profile> = {}) => ({
  avatar: '/fixtures/256x256/general.png',
  username: 'jhondoe',
  ...props,
});
