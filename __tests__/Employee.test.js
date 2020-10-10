const Employee = require("../lib/Employee");

test('creates an employee object', () => {
    const employee = new Employee('Aaron C', '08', 'asamcent@gmail.com');

    expect(employee.name).toBe('Aaron C');
    expect(employee.id).toBe('08');
    expect(employee.email).toBe('asamcent@gmail.com');
});