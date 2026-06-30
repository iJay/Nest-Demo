import { LoginCheckGuard } from './login-check.guard';

describe('LoginCheckGuard', () => {
  it('should be defined', () => {
    expect(new LoginCheckGuard()).toBeDefined();
  });
});
