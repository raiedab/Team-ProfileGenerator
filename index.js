const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Employee = require('./lib/Employee');
const generateHtml = require('./src/template');

const teamMembers = [];

const generateManager = [
    {
        type: 'input',
        name: 'name',
        message: "What is the manager's name?"
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the Manager's ID number?"
    },
    {
        type: 'input',
        name: 'email',
        message: "what is the Manager's email address?"
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "What is the Manager's office number?"
    }
];

const generateTeamMember = (role) => {
    const prompts = [
        {
            type: 'input',
            name: 'name',
            message: `What is the ${role}'s name?`
        },
        {
            type: 'input',
            name: 'id',
            message: `What is the ${role}'s ID Number?`
        },
        {
            type: 'input',
            name: 'email',
            message: `What is the ${role}'s Email?`
        },
        {
            type: 'input',
            name: 'special',
            message: `What is the ${role}'s ${role === 'Engineer' ? 'Github username' : 'school'}?`
        }
    ];
    inquirer.prompt(prompts).then((answers) => {
        switch (role) {
            case 'Manager':
                teamMembers.push(new Manager(answers.name, answers.id, answers.email, answers.special));
                break;
            case 'Engineer':
                teamMembers.push(new Engineer(answers.name, answers.id, answers.email, answers.special));
                break;
            case 'Intern':
                teamMembers.push(new Intern(answers.name, answers.id, answers.email, answers.special));
                break;
        }
        generateTeam();
    });
};

const generateTeam = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'team',
            message: 'Which team member do you want to add? Please select their role.',
            choices: ['Engineer', 'Intern', 'Generate Team']
        }
    ]).then((answers) => {
        switch (answers.team) {
            case 'Engineer':
                generateTeamMember('Engineer');
                break;
            case 'Intern':
                generateTeamMember('Intern');
                break;
            default:
                const output = generateHtml(teamMembers);
                fs.writeFileSync('index.html', output);
                break;
        }
    });
};

generateTeamMember('Manager');
