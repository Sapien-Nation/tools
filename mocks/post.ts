// fixtures
import post from '../fixtures/post_1.json';

// types
import type { Post } from '../types/post';

export const mockPost = (props: Partial<Post> = {}) => ({
  ...post,
  ...props,
});
