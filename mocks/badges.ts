// fixtures
import badge1 from '../fixtures/badge_1.json';
import badge2 from '../fixtures/badge_2.json';
import badge3 from '../fixtures/badge_3.json';
import badge4 from '../fixtures/badge_4.json';
import badge5 from '../fixtures/badge_5.json';
import badge6 from '../fixtures/badge_6.json';
import badge7 from '../fixtures/badge_7.json';
import badge8 from '../fixtures/badge_8.json';

// type
import type { Badge } from '../types/badge';

export const mockTribeBadges = (badges: Array<Badge> = []) => {
  return [badge1, badge2, badge3, badge4, badge5, badge6, ...badges];
};

export const mockSubscriptionBadges = (badges: Array<Badge> = []) => {
  return [badge7, badge8, ...badges];
};

export const mockTribeBadge = (props: Partial<Badge> = {}) => ({ ...badge1, ...props });

export const mockSubscriptionBadge = (props: Partial<Badge> = {}) => ({ ...badge7, ...props });
