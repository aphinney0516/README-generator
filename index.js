const inquirer = require('inquirer');
const fs = require('fs');
const { message } = require('statuses');

// User prompts for README creation
inquirer
    .createPromptModule(
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
                message: 'What was your motivation to build this particular project?', 
                validate: (value)=>{ if(value){return true} else {return 'Input required'}},
            },
            {
                type: 'input',
                name: 'description',
                message: 'Why did you build this project?',  
                validate: (value)=>{ if(value){return true} else {return 'Input required'}},
            },
            {
                type: 'input',
                name: 'description',
                message: 'What problem does it solve?',  
                validate: (value)=>{ if(value){return true} else {return 'Input required'}},
            },
            {
                type: 'input',
                name: 'description',
                message: 'What did you learn?',  
                validate: (value)=>{ if(value){return true} else {return 'Input required'}},
            },
            {
                type: 'input',
                name: 'description',
                message: 'What makes your project stand out?',  
            },
            {
                type: 'input',
                name: 'description',
                message: 'What challenges did you face?', 
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
.then(({
    title,
    description,
    installation,
    usage,
    credits,
    license,
    features,
    futureDev,
    contributions
})=>{
const template = 
`# ${title}
## Description
${description}
## Installation
${installation}
## Usage
${usage}
## Credits
${credits}
## License
${license}
## Features
${features}
## Future Development
${futureDev}
## Contributions
${contributions}`

// Function that creates README via fs
createNewFile(title,template);
}
);

// Function to create a file for the README
function createNewFile(fileName,data) {
    fs.writeFile(`./${fileName.toLowerCase().split(' ').join('')}.md`,data,(err)=>{
        if(err){
            console.log(err)
        }
        console.log('Your README has been generated.');
    })
}