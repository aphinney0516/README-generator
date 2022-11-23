const inquirer = require('inquirer');
const fs = require('fs');
const template = require('./utils/generateMarkdown');
const path = require('path');

// User prompts for README creation
inquirer
    .prompt(
        [
            {
                type: 'input',
                name: 'title',
                message: 'What is the title of your project?',
                validate: (value)=>{ if(value){return true} else {return 'Input required'}},
            },
            {
                type: 'input',
                name: 'description',
                message: 'Describe your project (what, why, problems solved, lessons learned, and challenges faced)', 
                validate: (value)=>{ if(value){return true} else {return 'Input required'}},
            },
            {
                type: 'input',
                name: 'installation',
                message: 'What are the steps required to install your project?',
                validate: (value)=>{ if(value){return true} else {return 'Input required'}},
            },
            {
                type: 'input',
                name: 'usage',
                message: 'How do you use this project?',
                validate: (value)=>{ if(value){return true} else {return 'Input required'}},
            },
            {
                type: 'input',
                name: 'credits',
                message: 'What collaborators, third-party assets, or tutorials were used to build this project? (if any)',
                validate: (value)=>{ if(value){return true} else {return 'Input required'}},
            },
            {
                type: 'list',
                name: 'license',
                message: 'What license did you use?',
                choices: ['The MIT License', 'The GPL License', 'Apache License', 'GNU License', 'N/A'],
                validate: (value)=>{ if(value){return true} else {return 'Input required'}},
            },
            {
                type: 'input',
                name: 'features',
                message: 'What features does your project contain?',
                validate: (value)=>{ if(value){return true} else {return 'Input required'}},
            },
            {
                type: 'input',
                name: 'futureDev',
                message:  'What features do you plan to implement in the future?',
                validate: (value)=>{ if(value){return true} else {return 'Input required'}},
            },
            {
                type: 'input',
                name: 'contributions',
                message: 'What are the instructions for contributions?',
            },
        ]
    )
// README template
.then(answers=>createNewFile('README.md',template(answers)))

// Function to create a file for the README
function createNewFile(fileName,data) {
    fs.writeFile(path.resolve(__dirname,'dist',fileName),data,(err)=>{
        if(err){
            console.log(err)
        }
        console.log('Your README has been generated.');
    })
}

// Add license links and badge section???