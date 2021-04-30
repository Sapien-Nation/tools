// helpers
import { v4 as uuidv4 } from 'uuid';

// types
import type { Topic, Tribe } from '../types/discover';

export const mockTopic = ({ id = uuidv4(), ...rest }: Partial<Topic> = {}) => ({
  id,
  name: `Topic ${id}`,
  ...rest
})

export const mockTribe = (props: Partial<Tribe> = {}) => ({
  avatar: '/fixtures/256x256/general.png',
  cover: '',
  description: '',
  name: 'Tribe',
  membersCount: 0,
  ...props
});
