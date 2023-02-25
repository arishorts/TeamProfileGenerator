const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Team = require("./lib/team");

team = [];
//let team = new Team();

questions = [
  {
    type: "input",
    name: "name",
    message: "name?",
  },
  {
    type: "input",
    name: "id",
    message: "ID?",
  },
  {
    type: "input",
    name: "email",
    message: "email?",
  },
];

function init() {
  // Answers are fed to classes that generate people objects added to a team array.
  inquireNewTeam();
  // When finished, exit the prompt
}

//generate team manager Inquirer prompts that the user will input: team manager’s name, employee ID, email address, and office number. After team manager prompt THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
function inquireNewTeam() {
  console.log("Adding new manager");
  questions.push({
    type: "input",
    name: "officeNumber",
    message: "What is the manager's office number?",
  }),
    inquirer.prompt(questions).then((answers) => {
      let manager = new Manager(
        answers.name,
        answers.id,
        answers.email,
        answers.officeNumber
      );
      team.push(manager);
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
  }),
    inquirer.prompt(questions).then((answers) => {
      let engineer = new Engineer(
        answers.name,
        answers.id,
        answers.email,
        answers.github
      );
      team.push(engineer);
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
  }),
    inquirer.prompt(questions).then((answers) => {
      let intern = new Intern(
        answers.name,
        answers.id,
        answers.email,
        answers.school
      );
      team.push(intern);
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
        const html = generateHTML();
        writeToFile(html);
        return;
      }
    });
}

//  HTML generated with all team members added as cards. Use template literal to create the skeleton.
function generateHTML() {
  console.log(team);
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
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
