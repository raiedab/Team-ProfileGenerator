const Manager = require('../lib/manager');

describe("Create a new Manager", () => {
  const manager = new Manager('Hank', '123', 'hank@test.com', 'A321');
  it('should create a new employee name hank', () => {
    expect(manager.name).toEqual('hank');
  });
  it('should create a new employee with id 123', () => {
    expect(manager.id).toEqual('123');
  });
  it('should create a new employee with email hank@test.com', () => {
    expect(manager.email).toEqual('hank@test.com');
  });
  it('should set the new employee role to Manager', () => {
    expect(manager.getRole()).toEqual('Manager');
  });
  it('should set the new manager office number to A321', () => {
    expect(manager.officeNumber).toEqual('A321');
  });
});