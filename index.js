const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const writeFileAsync = util.promisify(fs.writeFile);
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
      choices: ["Apache 2.0", "MIT", "GPLv3", "Creative Commons", "Simplified BSD"],
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
]);


const generateReadMe = (answers) => 

    `# ${answers.title}
    
    ## ${answers.description}

    ### ${answers.license}

    ## Table of Contents
        1. Installation 
        2. Usage
        3. Contribution 
        4. Test 

    
    
    
    ## Installation Instructions
        ${answers.installation}

    ## Usage information
        ${answers.usage}

    ## Contribution guidlines
        ${answers.guidlines}

    ## Test Instructions
        ${answers.test}
    
    
    ## Questions?
        ${answers.username}
        ### Please e-mail me with any questions!
        ${answers.email}
    `;


    
promptUser()
.then((answers) => writeFileAsync('README.md', generateReadMe(answers)))
.then(() => console.log('Successfully created README'))
.catch((err) => console.error(err));





// function to initialize program
// function init() {

//}

// function call to initialize program
// init();
