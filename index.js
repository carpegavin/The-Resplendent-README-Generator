const inquirer = require('inquirer');

// array of questions for user
const promptUser = () => 
  inquirer.prompt([
    {
      type: 'input',
      name: 'title',
    message: 'What is the title of your README?',
    },
    {
      type: 'input',
      name: 'description',
    message: 'Please describe your README',
    },
    {
      type: 'input',
      name: 'installation',
    message: 'What are the installation instructions?',
    },
    {
      type: 'input',
      name: 'usage',
    message: 'Enter usage information',
    },
    {
      type: 'input',
      name: 'guidlines',
    message: 'What are the contribution guidlines?',
    },
    {
      type: 'input',
      name: 'test',
    message: 'What are the testing instructions?',
    },
    {
      type: 'list',
      name: 'license',
    message: 'Please choose a license from the following',
    choices: [],
    },
    {
      type: 'input',
      name: 'username',
    message: 'What is your GitHub username?',
    },
    {
      type: 'input',
      name: 'email',
    message: 'What is your e-mail address?',
    },
])

    



// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
