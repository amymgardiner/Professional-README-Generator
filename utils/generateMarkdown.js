// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'None') {
    return '';
  } else {
    return `[![License](https://img.shields.io/badge/License-${license}-blue.svg)]`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return `[${license}](https://choosealicense.com/licenses/mit)`;
  } else if (license === 'GNU General Public') {
    return `[${license}](https://choosealicense.com/licenses/gpl-3.0/)`;
  } else if (license === 'Apache') {
    return `[${license}](https://choosealicense.com/licenses/apache-2.0/)`;
  } else if (license === 'Mozilla Public') {
    return `[${license}](https://choosealicense.com/licenses/mpl-2.0/)`;
  } else if (license === 'Boost Software') {
    return `[${license}](https://choosealicense.com/licenses/bsl-1.0/)`;
  } else if (license === 'The Unlicense') {
    return `[${license}](https://choosealicense.com/licenses/unlicense/)`;
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return '';
  } else {
    return `## License:
    The application is covered under the following license:
    ${renderLicenseLink(license)}`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ${renderLicenseSection(data.license)}

  ${renderLicenseBadge(data.license)}

  ## Table of Contents 
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Description:
  ${data.description}

  ## Installation:
  ${data.installation}

  ## Usage:
  ${data.usage}

  ## Contributing:
  ${data.contributing}

  ## Tests:
  ${data.testing}

  ## Questions:
  If you have any questions on this program, feel free to contact me here:
  - Github: [${data.github}] (https://github.com/${data.github})
  - Email: ${data.email} (mailto:${data.email})
`;
}

module.exports = generateMarkdown;
