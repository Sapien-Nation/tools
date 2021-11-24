// helpers
import uuid from '../../utils/uuidGenerator';

import type { Square } from '../../types/square/view';

export const mockSquare = ({
  id = uuid(),
  ...rest
}: Partial<Square> = {}): Square => ({
  id,
  name: `Square ${id}`,
  description: '',
  membersCount: 0,
  ...rest,
});
