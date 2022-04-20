// types
import type { Passport } from '../types/passport';

export const mockUserPassport = ({
  passportId = 1,
  ...rest
}: Partial<Passport> = {}): Passport => ({
  ...rest,
  avatar: '',
  passportId: 0,
  issueDate: new Date().toISOString(),
  issuingAuthority: 'Sapien Nation',
});
