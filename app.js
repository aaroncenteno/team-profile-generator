const Employee = require("./lib/Employee");
const Enigneer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRender");

const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the manager's name?"
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the manager's ID?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the manager's email?"
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What the manager's office number?"
        }
    ]).then (managerData => {
        const{name, id, email, officeNumber} = managerData
        employee = new Manager(name, id, email, officeNumber)
        let role = {role: "Manger"};
        console.log(managerData);
        return {...managerData, ...role}
    })
}

promptManager();