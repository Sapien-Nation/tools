// helpers
import { v4 as uuidv4 } from 'uuid';

import type { Square } from '../../types/square/view';

export const mockSquare = ({
  id = uuidv4(),
  ...rest
}: Partial<Square> = {}): Square => ({
  id,
  name: `Square ${id}`,
  description: '',
  membersCount: 0,
  ...rest,
});
