const Engineer = require("../lib/Engineer")

test('creates an engineer object', () => {
    const employee = new Engineer('Aaron C', '08', 'asamcent@gmail.com', 'acenteno');

    expect(employee.name).toBe('Aaron C');
    expect(employee.id).toBe('08');
    expect(employee.email).toBe('asamcent@gmail.com');
    expect(employee.github).toBe('acenteno');
});