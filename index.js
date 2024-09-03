// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How to install the project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How to use the project?',
    },
    {
        type: 'input',
        name: 'Contributing',
        message: "who's comtribute in the this project?",
    },

    {
        type: 'input',
        name: 'Tests',
        message: "how can i test this project?",
    },

    {
        type: 'input',
        name: 'license',
        message: 'Provide the license for the project:',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How can others contribute to the project?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How to run tests for the project?',
    },
    {
        type: 'input',
        name: 'potential-enigma',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    }
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);

}

function generateReadMe(answers) {
    return `
# ${answers.title}

## Description
${answers.description}

## Installation
\⁠ \ ⁠\`
${answers.installation}
\⁠ \ ⁠\`

## Usage
\⁠ \ ⁠\`
${answers.usage}
\⁠ \ ⁠\`

## License
This project is licensed under the ${answers.license} license.

## Contributing
${answers.contributing}

## Tests
\⁠ \ ⁠\`
${answers.tests}
\⁠ \ ⁠\`

## Questions
For any questions, please contact me via [GitHub](https://github.com/${answers.githubUsername}) or [email](mailto:${answers.email}).
    `;
}




// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const readMeContent = generateReadMe(answers);
        writeToFile('README.md', readMeContent)

        console.log('README.md file has been generated!');
    });

}

// Function call to initialize app
init();
