// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return '![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)';
  } else if (license === 'GNU GPLv3') {
    return '![GNU GPLv3 License](https://img.shields.io/badge/license-GPLv3-blue.svg)';
  } else if (license === 'Apache 2.0') {
    return '![Apache 2.0 License](https://img.shields.io/badge/license-Apache%202.0-blue.svg)';
  } else if (license === 'ISC') {
    return '![ISC License](https://img.shields.io/badge/license-ISC-blue.svg)';
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return '[MIT License](https://opensource.org/licenses/MIT)';
  } else if (license === 'GNU GPLv3') {
    return '[GNU GPLv3 License](https://www.gnu.org/licenses/gpl-3.0)';
  } else if (license === 'Apache 2.0') {
    return '[Apache 2.0 License](https://opensource.org/licenses/Apache-2.0)';
  } else if (license === 'ISC') {
    return '[ISC License](https://opensource.org/licenses/ISC)';
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'No License') {
    return `## License
    
This project is licensed under the ${renderLicenseLink(license)}.\n\n${renderLicenseBadge(license)}`
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.License)}

  ## Description

  ${data.Description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)

  ${renderLicenseLink(data.License)}

  - [Questions](#questions)

  ## Installation

  ${data.Installation}

  ## Usage

  ${data.Usage}

  ## Contributing

  ${data.Contributing}

  ## Tests

  ${data.Tests}

  ${renderLicenseSection(data.License)}

  ## Questions

  If you have any questions about the repo, open an issue or contact me directly at ${data.Email}. You can find more of my work at ${data.Username}.
  `;
}

module.exports = generateMarkdown;
