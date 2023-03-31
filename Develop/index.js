const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');

const questions = [
    {
        type: 'input',
        name: 'Description',
        message: 'Enter a description.',
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'What are the installation instructions?',
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'What is the usage information?',
    },
    {
        type: 'input',
        name: 'Contributing',
        message: 'What are the contribution guidelines?',
    },
    {
        type: 'input',
        name: 'Tests',
        message: 'What are the test instructions?',
    },
    {
        type: 'input',
        name: 'License',
        message: 'Which license will your project use?',
        choices: ['MIT', 'GNU GPLv3', 'Apache 2.0', 'ISC', 'No License'],
    },
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Readme file successfully made!')
    );
}

function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            const markdown = generateMarkdown(answers);
            writeToFile('Readme.md', markdown);
        })
        .catch((error) => {
            console.log(error);
        });
}

init();
