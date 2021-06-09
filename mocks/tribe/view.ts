import type { Tribe } from '../../types/tribe/view';

export const mockTribeMedia = (props: Partial<Tribe> = {}): Tribe => ({
  avatar: '/fixtures/256x256/message.png',
  cover: '/fixtures/normal/1920x200.png',
  description: '',
  followersCount: 0,
  identifier: 'sapien',
  membersCount: 0,
  name: 'Sapien',
  ...props,
});
