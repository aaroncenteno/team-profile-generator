const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school
    }

    async getSchool() {
        return this.school;
    }

    async getRole() {
        return "Intern";
    }
}

module.exports = Intern;
