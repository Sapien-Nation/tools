// helpers
import { v4 as uuidv4 } from 'uuid';

import type { TribeMedia } from '../../types/tribe/view';

export const mockTribeMedia = (props: Partial<TribeMedia> = {}): TribeMedia => ({
  avatar: '/fixtures/256x256/message.png',
  cover: '/fixtures/normal/1920x200.png',
  ...props,
});
