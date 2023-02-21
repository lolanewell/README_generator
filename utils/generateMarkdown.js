// function to generate markdown for README
function generateTitle(title) {
  return `
  # Title
  ${title}`;
}

function generateDescription(description) {
  return `
  ## Description
  ${description}`;
}

function generateTableOfContents() {
  return `
  ## Table of Contents
  ${description} 
  ${installation}
  ${usage}
  ${license}
  ${contributtng}
  ${tests}
  ${questions}`;
}

function generateInstallation(installation) {
  return `
  ## Installation
  ${installation}`;
}

function generateUsage(usage) {
  return `
  ## Usage
  ${usage}`;
}

function generateLicense(license) {
  return `
  ## License
  ${license}`;
}

function generateContributing(contributing) {
  return `
  ## Contributing
  ${contributing}`;
}

function generateTests(tests) {
  return `
  ## Tests
  ${tests}`;
}
let questions = function generateQuestions() {
  return `
  ## Questions
  ### Github: ${gitHub}
  ### Email: ${email}`;
}


function generateMarkdown(data) {
  return `
  # ${data.title !== '' ? generateTitle(data.title) : ''}
  ## Table of Contents
  # ${tableOfContents !== '' ? generateTableOfContents(data.tableOfContents) : ''}
  ## Description
  ${data.description !== '' ? generateDescription(data.description) : ''}
  ## Installation
  ${data.installation !== '' ? generateInstallation(data.installation) : ''}
  ## Usage
  ${data.usage !== '' ? generateUsage(data.usage) : ''}
  ## License
  ${data.license !== '' ? generateLicense(data.license) : ''}
  ## Contributing
  ${data.contributing !== '' ? generateContributing(data.contributing) : ''}
  ## Tests
  ${data.tests !== '' ? generateTests(data.tests) : ''}
  ## Questions
  ${data.questions !== '' ? generateQuestions(data.questions) : ''}
  `;

}

module.exports = generateMarkdown;
