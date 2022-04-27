// types
import type { Passport } from '../types/passport';

export const mockUserPassport = ({
  passportId = 1,
  ...rest
}: Partial<Passport> = {}): Passport => ({
  ...rest,
  bio: '',
  title: 'Founder Member',
  tokenId: 1,
  username: 'johndoe',
  image: '',
  name: 'Ghandi',
  passportId: 0,
  issueDate: new Date().toISOString(),
  issuingAuthority: 'Sapien Nation',
});
