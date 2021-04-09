// fixtures
import square1 from '../fixtures/square_1.json';
import square2 from '../fixtures/square_2.json';
import square3 from '../fixtures/square_3.json';
import square4 from '../fixtures/square_4.json';

// types
import type { Square } from '../types/square';

export const mockSquare = ({ ...props }: Partial<Square> = {}) => ({
  ...square1,
  ...props
});

export const mockSquares = (squares: Array<Square> = []) => ([
  square1, square2, square3, square4, ...squares
])