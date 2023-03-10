const Engineer = require('../lib/engineer');

describe("Create new Engineer", () => {
  const eng = new Engineer('Diana', '112', 'diana@test.com', 'dianagithub');
  it('should create a new employee name diana', () => {
    expect(eng.name).toEqual('Diana');
  });
  it('should create a new employee with id 112', () => {
    expect(eng.id).toEqual('112');
  });
  it('should create a new employee with email diana@test.com', () => {
    expect(eng.email).toEqual('diana@test.com');
  });
  it('should set the new employee role to Engineer', () => {
    expect(eng.getRole()).toEqual('Engineer');
  });
  it('should set the new Engineer github username to dianagithub', () => {
    expect(eng.github).toEqual('dianagithub');
  });
});