// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    // project title
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (Required.)',
        validate: titleInput => {
          if (titleInput) {
            return true;
          } else {
            console.log('Please enter the title of your project.');
            return false;
          }
        }
    },
    //   description
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project. (Required.)',
        validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          } else {
            console.log('Please enter a description of your project.');
            return false;
          }
        }
    },
    //   installation instructions
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install your project? (Required.)',
        validate: installationInput => {
          if (installationInput) {
            return true;
          } else {
            console.log('Please enter the installation instructions.');
            return false;
          }
        }
    },
    //   usage information
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use the project? (Required.)',
        validate: usageInput => {
          if (usageInput) {
            return true;
          } else {
            console.log('Please enter the usage information.');
            return false;
          }
        }
    },
    //   contribution guidelines
    {
        type: 'input',
        name: 'contributing',
        message: 'How should people contribute to this project? (Required.)',
        validate: contributionInput => {
          if (contributionInput) {
            return true;
          } else {
            console.log('Please enter the contribution guidelines.');
            return false;
          }
        }
    },
    //   test instructions
    {
        type: 'input',
        name: 'testing',
        message: 'How do you test this project? (Required.)',
        validate: testInput => {
          if (testInput) {
            return true;
          } else {
            console.log('Please enter the test instructions.');
            return false;
          }
        }
    },
    // license options that I got from https://choosealicense.com/
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project. (Please select at least one of the options.)',
        choices: ['MIT', 'GNU General Public', 'Apache', 'Mozilla Public', 'Boost Software', 'The Unlicense', 'None']
    },
    // github username
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username. (Required.)',
        validate: githubInput => {
          if (githubInput) {
            return true;
          } else {
            console.log('Please enter your GitHub username.');
            return false;
          }
        }
    },
    // email address
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address. (Required.)',
        validate: emailInput => {
          if (emailInput) {
            return true;
          } else {
            console.log('Please enter your email address.');
            return false;
          }
        }
    },
];

// // TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`./dist/Sample-${fileName}`, data, err => {
        if (err) {
            throw err
        } else {
            console.log('Page created! Check out the dist directory to see your new README!');
        }
    });
};

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
};

// Function call to initialize app
init()
    .then(userAnswers => generateMarkdown(userAnswers))
    .then(pageMD => writeToFile('README.md', pageMD))
    .catch(err => {
        console.log(err)
    });