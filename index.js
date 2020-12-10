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
      name: 'contribution',
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
      choices: [
          "Apache 2.0", 
          "MIT", 
          "GNU GPL v3", 
          "Mozilla", 
          "Boost"
        ],
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
    - [Installation](#Installation)
    - [Usage](#Usage)
    - [Contribution](#Contribution) 
    - [Test](#Test) 

 
 
 ## Installation
        ${answers.installation}

 ## Usage 
        ${answers.usage}

 ## Contribution
        ${answers.contribution}

 ## Test 
        ${answers.test}
    
    
 ## Questions?
    ${answers.username}
    ###Please e-mail me with any questions!
    ${answers.email}
`;


    
promptUser()
.then((answers) => writeFileAsync('README.md', generateReadMe(answers)))
.then(() => console.log('Successfully created README'))
.catch((err) => console.error(err));






