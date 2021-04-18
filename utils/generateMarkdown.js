// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  var renderLicenseBadge = str.repeat(num);

  if(num < 0){
    renderLicenseBadge = '';
  }else {
    return renderLicenseBadge;
  }
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  var renderLicenseLink = str.repeat(num);

  if(num < 0){
    renderLicenseLink = '';
  }else {
    return renderLicenseLink;
  }
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  var renderLicenseSection = str.repeat(num);

  if(num < 0){
    renderLicenseSection = '';
  }else {
    return renderLicenseSection;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  return `

# ${response.title}

# Table of Content
-[description](#description)
-[installation](#installation)
-[usage](#usage)
-[licenses](#licenses)
-[contribution](#contribution)
-[test](#test)
-[username](#username)
-[profile](#profile)

${response.username}
##username: CoderLeE920

    ${response.description}
##description: Readme-Generater

    ${response.installation}
##installation:

    ${response.usage}
##usage:

    ${response.licenses}
##licenses: ISC

    ${response.contribution}
##contribution:

    ${response.test}
##test:

    ${response.email}
##email: leethai56@outlook.com

    ${response.profile}
##profile:
`;
}

module.exports = generateMarkdown;
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
