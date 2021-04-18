var inquirer = require('inquirer');
const fs = require('fs');

const generateREADME = (answers) =>
  `# Title
${answers.title}
# Discription 
${answers.description}
# GitHub Name
${answers.github}
# Problems I Faced
${answers.problems}
# Contact Me
${answers.email}
# license
![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)
# Test
${answers.test}
# Dependencies Used
${answers.dependencies}
# More Information
${answers.need}
`;

inquirer
  .prompt([
    {
      type: 'input',
      name: 'github',
      message: 'What is your GITHUB username?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
    },
    {
      type: 'input',
      name: 'title',
      message: 'What is your project name?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Write a description of your project.',
    },
    {
      type: 'input',
      name: 'License',
      message: 'What kind of license should your project have?',
    },
    {
      type: 'input',
      name: 'dependencies',
      message: 'What command should you run to install dependencies?',
    },
    {
      name: 'test',
      message: 'What command shoud you run to run test?'
    },
    {
      name: 'need',
      message: 'What does the user need to know about using the repo?'
    },
    {
      name: 'repo',
      message: 'What does the user need to know about contributing to the repo?'
    },
    {
      name: 'problems',
      message: 'What problems did you face?'
    },

  ])
  .then((answers) => {
    const READMEContent = generateREADME(answers);

    fs.writeFile('README.MD', READMEContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
  });
