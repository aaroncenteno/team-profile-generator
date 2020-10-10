const Manager = require("../lib/Manager");

test('creates a manager object', () => {
    const employee = new Manager ('Aaron C', '08', 'asamcent@gmail.com', '88');

    expect(employee.name).toBe('Aaron C');
    expect(employee.id).toBe('08');
    expect(employee.email).toBe('asamcent@gmail.com');
    expect(employee.officeNumber).toBe('88');
});