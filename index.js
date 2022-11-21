const inquirer = require('inquirer');
// const fs = require('fs');
// const { message } = require('statuses');

// User prompts for README creation
inquirer.createPromptModule(
    [
        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'title',
            validate: (value)=>{ if(value){return true} else {return 'Input required'}},
        },
        {
            type: 'input',
            message: 'What was your motivation to build this particular project?', 
            name: 'description',
            validate: (value)=>{ if(value){return true} else {return 'Input required'}},
        },
        {
            type: 'input',
            message: 'Why did you build this project?',  
            name: 'description',
            validate: (value)=>{ if(value){return true} else {return 'Input required'}},
        },
        {
            type: 'input',
            message: 'What problem does it solve?',  
            name: 'description',
            validate: (value)=>{ if(value){return true} else {return 'Input required'}},
        },
        {
            type: 'input',
            message: 'What did you learn?',  
            name: 'description',
            validate: (value)=>{ if(value){return true} else {return 'Input required'}},
        },
        {
            type: 'input',
            message: 'What makes your project stand out?',  
            name: 'description',
        },
        {
            type: 'input',
            message: 'What challenges did you face?', 
            name: 'description',
        },
        {
            type: 'input',
            message: 'What are the steps required to install your project?',
            name: 'installation',
            validate: (value)=>{ if(value){return true} else {return 'Input required'}},
        },
        {
            type: 'input',
            message: 'How do you use this project?',
            name: 'usage',
            validate: (value)=>{ if(value){return true} else {return 'Input required'}},
        },
        {
            type: 'input',
            message: 'What collaborators, third-party assets, or tutorials were used to build this project? (if any)',
            name: 'credits',
            validate: (value)=>{ if(value){return true} else {return 'Input required'}},
        },
        {
            type: 'input',
            message: 'What features does your project contain?',
            name: 'features',
            validate: (value)=>{ if(value){return true} else {return 'Input required'}},
        },
        {
            type: 'input',
            message:  'What features do you plan to implement in the future?',
            name: 'future development',
            validate: (value)=>{ if(value){return true} else {return 'Input required'}},
        },
        {
            type: 'input',
            message: 'What are the instructions for contributions?',
            name: 'contributions',
        },
    ]
)

// const questions = [
//     'What is the title of your project?',
//     'What was your motivation to build this particular project?', 
//     'Why did you build this project?', 
//     'What problem does it solve?', 
//     'What did you learn?', 
//     'What makes your project stand out?', 
//     'What challenges did you face?', 
//     'What are the steps required to install your project?',
//     'How do you use this project?',
//     'What collaborators, third-party assets, or tutorials were used to build this project? (if any)',
//     'What features does your project contain?',
//     'What features do you plan to implement in the future?',
//     'What are the instructions for contributions?'
// ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {

}

// Function call to initialize app
init();
