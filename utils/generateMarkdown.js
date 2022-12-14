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

// function that returns the license link or empty string in table of contents
function renderLicenseLink(license) {
  if (license === 'N/A') {
    return ' '
  } else {
    return `- [License](#license)`
  }
}

// function that returns the license section of README or empty string
function renderLicenseSection(license) {
  if (license !== 'N/A') {
    return `### License
Licensed under ${license}`
  } else {
    return ''
  }
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
- [Questions](#questions)
${renderLicenseLink(data.license)}

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
${data.contributions}

${renderLicenseSection(data.license)}

### Questions
Please use the issues section of https://github.com/${data.githubUserName}/${data.repository}/issues
`;
}
module.exports = generateMarkdown;