const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");


test('creates a manager object', () => {
    const employee = new Manager ('Aaron C', '08', 'asamcent@gmail.com', '88');

    expect(employee.name).toBe('Aaron C');
    expect(employee.id).toBe('08');
    expect(employee.email).toBe('asamcent@gmail.com');
    expect(employee.officeNumber).toBe('88');
});

test("Can set office number via constructor argument", () => {
    const testOffice = 88;
    const employee = new Manager("Aaron C", 8, "asamcent@gmail.com", testOffice);
    expect(employee.officeNumber).toBe(testOffice);
});
  
test('getRole() should return "Manager"', () => {
    const testRole = "Manager";
    const employee = new Manager("Aaron C", 8, "asamcent@gmail.com", 88);
    expect(employee.getRole()).toBe(testRole);
});

test("Can get office number via getOffice()", () => {
    const testOffice = 88;
    const employee = new Manager("Aaron C", 8, "asamcent@gmail.com", testOffice);
    expect(employee.getOfficeNumber()).toBe(testOffice);
});