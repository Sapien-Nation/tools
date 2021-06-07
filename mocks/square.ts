// helpers
import { v4 as uuidv4 } from 'uuid';

import { Square } from '../types/square';

export const mockSquare = ({
  id = uuidv4(),
  ...rest
}: Partial<Square> = {}): Square => ({
  id,
  name: `Square ${id}`,
  ...rest,
});
