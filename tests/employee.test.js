const Employee = require('../lib/employee');


describe("Create a new employee", () => {
  const emp = new Employee('walt', '123', 'walt@test.com');
  it('should create a new employee name walt', () => {
    expect(emp.name).toBe('walt');
  });
  it('should create a new employee with id 123', () => {
    expect(emp.id).toEqual('123');
  });
  it('should create a new employee with email walt@test.com', () => {
    expect(emp.email).toBe('walt@test.com');
  });
  it('should set the new employee role to employee', () => {
    expect(emp.getRole()).toBe('Employee');
  });
});
