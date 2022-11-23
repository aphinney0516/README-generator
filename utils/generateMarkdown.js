// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
if(license==='The MIT License'){
  return '[![MIT](https://img.shields.io/badge/license-MIT-blue)](https://opensource.org/licenses/MIT)'
} 
else if (license==='The GPL License') {
  return '[![GPL](https://img.shields.io/badge/license-GPL-green)](https://opensource.org/licenses/GPL)'
}

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
return `# ${data.title}
${renderLicenseBadge(data.license)}

## Table of Contents
- [Description](#description)





### Description
${data.description}
`;
}

module.exports = generateMarkdown;
