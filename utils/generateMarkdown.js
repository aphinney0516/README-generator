// function gererates license badge and links
function renderLicenseBadge(license) {
if(license==='The MIT License'){
  return '[![MIT](https://img.shields.io/badge/license-MIT-blue)](https://opensource.org/licenses/MIT)'
} 
else if (license==='GNU License') {
  return '[![GPL](https://img.shields.io/badge/license-GPL-blue)](https://opensource.org/licenses/gpl-license)'
}
else if (license==='Apache License') {
  return '[![GPL](https://img.shields.io/badge/license-apache-blue)](https://opensource.org/licenses/Apache-2.0)'
}
else if (license==='BSD License') {
  return '[![GPL](https://img.shields.io/badge/license-BSD-green)](https://opensource.org/licenses/BSD-2-Clause)'
}
else {return ' '}
} 

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  
}

// function generates markdown for README
function generateMarkdown(data) {
return `# ${data.title}
${renderLicenseBadge(data.license)}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Features](#features)
- [Future Development](#futureDev)
- [Contributions](#contributions)

### Description
${data.description}

### Installation
${data.installation}

### Usage
${data.usage}

### Credits
${data.credits}

### Features
${data.features}

### Future Development
${data.futureDev}

### Contributions
${data.contributions}`;
}
module.exports = generateMarkdown;
