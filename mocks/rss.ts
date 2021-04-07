// fixtures
import rss from '../fixtures/rss_1.json';

// types
import { Rss } from '../types/rss';

export const mockRSS = (props: Partial<Rss> = {}) => ({
  ...rss,
  ...props,
})