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


const generateReadMe = (answers) => {
    let title =""
    let badge= "";
    if(answers.license == "Apache 2.0"){
        title = "Apache 2.0 License"
        badge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    }
    else if (answers.license == "MIT"){
        title = "MIT License"
        badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"

    }
return `# ${answers.title}
    
 ## Description: 
 ${answers.description}

<br>

 ### ${title}
 ${badge}

<br>

 ## Table of Contents
- [Installation](#Installation)
- [Usage](#Usage)
- [Contribution](#Contribution) 
- [Test](#Test) 
- [Email](#Questions?)

 
 
 ## Installation
        ${answers.installation}

 ## Usage 
        ${answers.usage}

 ## Contribution
        ${answers.contribution}

 ## Test 
        ${answers.test}
    
    
 ## GitHub
 ### https://github.com/${answers.username}
 
 <br>

 ### Questions?
 ## Please e-mail me with any!
 ### ${answers.email}
`;
}

    
promptUser()
.then((answers) => writeFileAsync('README.md', generateReadMe(answers)))
.then(() => console.log('Successfully created README'))
.catch((err) => console.error(err));






