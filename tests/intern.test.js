const Intern = require('../lib/intern');

describe("Create a new Intern", () => {
  const intern = new Intern('mike', '808', 'mike@test.com', 'RWU');
  it('should create a new employee name mike', () => {
    expect(intern.name).toEqual('mike');
  });
  it('should create a new employee with id 808', () => {
    expect(intern.id).toEqual('808');
  });
  it('should create a new employee with email mike@test.com', () => {
    expect(intern.email).toEqual('mike@test.com');
  });
  it('should set the new employee role to Intern', () => {
    expect(intern.getRole()).toEqual('Intern');
  });
  it('should set the new Intern school to FSU', () => {
    expect(intern.school).toEqual('FSU');
  });
});