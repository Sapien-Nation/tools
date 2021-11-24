import uuid from '../../utils/uuidGenerator';

import type { Tribe } from '../../types/tribe/view';

export const mockTribeMedia = (props: Partial<Tribe> = {}): Tribe => ({
  avatar: '/fixtures/256x256/message.png',
  avatar_original: '/fixtures/256x256/message.png',
  cover: '/fixtures/normal/1920x200.png',
  cover_original: '/fixtures/normal/1920x200.png',
  description: '',
  followersCount: 0,
  identifier: 'sapien',
  isMember: false,
  membersCount: 0,
  memberBadge: {
    avatar: '/fixtures/256x256/message.png',
    id: uuid(),
    price: 0,
    blockchainId: uuid(),
    name: 'Sapien badge',
    parentBadgeId: uuid(),
  },
  name: 'Sapien',
  role: null,
  ...props,
});
