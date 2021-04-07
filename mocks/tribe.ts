// fixtures
import tribe1 from '../fixtures/tribe_1.json';
import tribe2 from '../fixtures/tribe_2.json';
import tribe3 from '../fixtures/tribe_3.json';
import tribe4 from '../fixtures/tribe_4.json';
import tribe_permissions from '../fixtures/permissions_tribe_1.json';

// types
import type { Tribe, Permissions } from '../types/tribe';

export const mockTribe = (props: Partial<Tribe> = {}) => ({
  ...tribe1,
  ...props,
});

export const mockTribes = (tribes: Array<Tribe> = []) => {
  return [tribe1, tribe2, tribe3, tribe4, ...tribes];
};

export const mockTribePermission = (props: Partial<Permissions> = {}) => ({
  ...tribe_permissions,
  ...props,
})