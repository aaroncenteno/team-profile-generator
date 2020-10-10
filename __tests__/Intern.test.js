const Intern = require("../lib/Intern");

test('creates an intern object', () => {
    const employee = new Intern('Aaron C', '08', 'asamcent@gmail.com', 'UCLA');

    expect(employee.name).toBe('Aaron C');
    expect(employee.id).toBe('08');
    expect(employee.email).toBe('asamcent@gmail.com');
    expect(employee.school).toBe('UCLA');
});