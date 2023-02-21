const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    // questions frm readme
    // project title
    {
        type: 'input',
        name: 'title',
        message: 'what is yout project title?'
    },
    // description
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project.'
    },
    // installation
    {
        type: 'input',
        name: 'installation',
        message: 'Please describe how to install your project.'
    },
    // usage
    {
        type: 'input',
        name: 'description',
        message: 'Please describe how you use your project.'
    },
    // liscence
    {
        type: 'list',
        choices: ['MIT', 'GPL', 'GNU', ],
        name: 'license',
        message: 'What license are you using for your project?'
    },
    // contributing
    {
        type: 'input',
        name: 'contributing',
        message: 'Please list the contributors to this project.'
    },
    // tests
    {
        type: 'input',
        name: 'tests',
        message: 'Please list the test you have done for your project.'
    },
    // questions
    {
        type: 'input',
        name: 'gitHub',
        message: 'Please provide a link to your gitHub profile'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter the email you can be contacted on regarding this project.'
    },
];

// function to write README file - not called this function
function writeToFile(fileName, data) {
    fs.writeFile('README.md', data, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log('Your README has been created succesfully!')
        }
        })
    }


// function to initialize program
function init() {
    inquirer
  .prompt(questions)
  .then(answers => {
    console.log(answers);
    const markdown = generateMarkdown(answers);
    // Use user feedback for... whatever!!
  })
  /* .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  }); */
}

// function call to initialize program
init(writeToFile);
