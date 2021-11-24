// helpers
import uuid from '../utils/uuidGenerator';

// types
import type { Topic, Tribe } from '../types/discover';

export const mockTopic = ({
  id = uuid(),
  ...rest
}: Partial<Topic> = {}): Topic => ({
  id,
  name: `Topic ${id}`,
  ...rest,
});

export const mockTribe = (props: Partial<Tribe> = {}): Tribe => ({
  avatar: '/fixtures/256x256/general.png',
  cover: '',
  description: '',
  name: 'Tribe',
  membersCount: 0,
  ...props,
});
