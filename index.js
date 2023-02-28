const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Joi = require("joi");

const schema = Joi.object({
  name: Joi.string().regex(/^[a-zA-Z\s]+$/),

  id: Joi.string()
    .pattern(/^[0-9]+$/)
    .min(1)
    .max(30),

  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ["com", "net"] },
  }),

  officeNumber: Joi.string()
    .pattern(/^[0-9]+$/)
    .min(1)
    .max(10),

  github: Joi.string().min(1).max(30),

  school: Joi.string().regex(/^[a-zA-Z\s]+$/),
});

team = [];

questions = [
  {
    type: "input",
    name: "name",
    message: "name?",
    validate: (input) => validateQuestion("name", input),
  },
  {
    type: "input",
    name: "id",
    message: "ID?",
    validate: (input) => validateQuestion("id", input),
  },
  {
    type: "input",
    name: "email",
    message: "email?",
    validate: (input) => validateQuestion("email", input),
  },
];

function init() {
  // Answers are fed to classes that generate people objects added to a team array.
  inquireNewTeam();
  // When finished, exit the prompt
}

function validateQuestion(field, input) {
  const obj = {}; // create an empty object
  obj[field] = input;
  const { error } = schema.validate(obj);
  if (error) {
    switch (field) {
      case "id":
        return "Please enter a valid ID containing only numbers.";
      case "name":
        return "Please enter a valid name containing only letters.";
      case "email":
        return "Please enter a valid email address.";
      case "officeNumber":
        return "Please enter a valid officeNumber containing only numbers.";
      case "github":
        return "Please enter a valid github.";
      case "school":
        return "Please enter a valid school.";
      default:
        return "Please enter a valid value.";
    }
  } else {
    return true;
  }
}

//generate team manager Inquirer prompts that the user will input: team manager’s name, employee ID, email address, and office number. After team manager prompt THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
function inquireNewTeam() {
  console.log("Adding new manager");
  questions.push({
    type: "input",
    name: "officeNumber",
    message: "What is the manager's office number?",
    validate: (input) => validateQuestion("officeNumber", input),
  }),
    inquirer.prompt(questions).then((answers) => {
      let manager = new Manager(
        answers.name,
        answers.id,
        answers.email,
        answers.officeNumber
      );
      team.push(manager);
      //console.log(team);
      questions.pop();
      addAnother();
    });
}

// selecting the engineer option prompts to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
function inquireEngineer() {
  console.log("Adding new engineer");
  questions.push({
    type: "input",
    name: "github",
    message: "What is the engineer's github profile?",
    validate: (input) => validateQuestion("github", input),
  }),
    inquirer.prompt(questions).then((answers) => {
      let engineer = new Engineer(
        answers.name,
        answers.id,
        answers.email,
        answers.github
      );
      team.push(engineer);
      //console.log(team);
      questions.pop();
      addAnother();
    });
}

// selecting the intern option prompts to enter the intern’s name, ID, email, and school, and I am taken back to the menu
function inquireIntern() {
  console.log("Adding new intern");
  questions.push({
    type: "input",
    name: "school",
    message: "What is the intern's school?",
    validate: (input) => validateQuestion("school", input),
  }),
    inquirer.prompt(questions).then((answers) => {
      let intern = new Intern(
        answers.name,
        answers.id,
        answers.email,
        answers.school
      );
      team.push(intern);
      //console.log(team);
      questions.pop();
      addAnother();
    });
}

//Check if the user wants to add another member
function addAnother() {
  inquirer
    .prompt({
      type: "confirm",
      name: "addAnother",
      message: "Do you want to add another team member?",
      default: true,
    })
    .then((answers) => {
      if (answers.addAnother) {
        inquirer
          .prompt({
            type: "list",
            name: "addMember",
            message: "Engineer or Intern?",
            choices: ["engineer", "intern"],
          })
          .then((answers) => {
            if (answers.addMember === "engineer") inquireEngineer();
            else if (answers.addMember === "intern") inquireIntern();
          });
      } else {
        const html = generateHTML(team);
        writeToFile(html);
        return;
      }
    });
}

//  HTML generated with all team members added as cards. Use template literal to create the skeleton.
function generateHTML(team) {
  const cards = team.map(
    (member, i) => `
  <div class="col-lg-4 col-md-6 col-sm-12">
    <div class="team-member-card">
      <h2>${member.getName()}</h2>
      <h2>${member.getRole()}</h2>
      <ul>
        <li>ID: ${member.getId()}</li>
        <li>Email: <a href="mailto:${member.getEmail()}">Send Email</a></li>
        ${
          member.getRole() === "Manager"
            ? `<li>Office Number: ${member.getOfficeNumber()}</li>`
            : ""
        }
        ${
          member.getRole() === "Engineer"
            ? `<li>GitHub: <a href="https://github.com/${member.getGithub()}/">Github Link</a></li>`
            : ""
        }
        ${
          member.getRole() === "Intern"
            ? `<li>School: ${member.getSchool()}</li>`
            : ""
        }
      </ul>
    </div>
  </div>
`
  );

  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <title>Team Members</title>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
      <link rel="stylesheet" href="./styles.css" />
    </head>
    <body>
      <header>
        <h1>Our Team Members</h1>
      </header>
      <main>
        <div class="container">
          <div class="row">
            ${cards.join("")}
          </div>
        </div>
      </main>
      <footer>
        <p>&copy; 2023 Our Company. All rights reserved.</p>
      </footer>
      <script
      src="https://code.jquery.com/jquery-3.6.3.min.js"
      integrity="sha256-pvPw+upLPUjgMXY0G+8O0xUf+/Im1MZjXxxgOcBQBXU="
      crossorigin="anonymous"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
    </body>
  </html>`;
}

//write the html to a file
function writeToFile(htmlPageContent) {
  fs.writeFile("./dist/index.html", htmlPageContent, (err) =>
    err ? console.log(err) : console.log("Successfully created index.html!")
  );
}

init();
