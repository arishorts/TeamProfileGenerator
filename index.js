const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

team = [];
// class Team {
//   constructor() {
//     //this.count = count;
//     _team.set(this, []);
//   }
//   peek() {
//     const items = _items.get(this);
//     if (items.length === 0) throw new Error("There are no items");
//     return items[items.length - 1];
//   }
//   pop() {
//     if (_items.get(this).length === 0) throw new Error("There are no items");
//     return _items.get(this).pop();
//   }
//   push(obj) {
//     _items.get(this).push(obj);
//   }
//   get count() {
//     return _items.get(this).length;
//   }
// }
// const team = new Team();

//generate team manager Inquirer prompts that the user will input: team manager’s name, employee ID, email address, and office number

function init() {
  managerQ = [
    {
      type: "input",
      name: "name",
      message: "What is the manager's name?",
    },
    {
      type: "input",
      name: "id",
      message: "What is the manager's ID?",
    },
    {
      type: "input",
      name: "email",
      message: "What is the manager's email?",
    },
    {
      type: "input",
      name: "officeNumber",
      message: "What is the manager's office number?",
    },
  ];

  inquirer.prompt(managerQ).then((answers) => {
    let manager = new Manager(
      answers.name,
      answers.id,
      answers.email,
      answers.officeNumber
    );
    team.push(manager);
  });

  //After team manager prompt THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team

  // WHEN I select the engineer option
  // THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu

  // WHEN I select the intern option
  // THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu

  // When finished building my team then exit the prompts
  // Answers are fed to functions that use Classes to generate people objects that are added to an array of team members.If there are no people of a role return an empty object
}

function generateEngineer() {}
function generateIntern() {}

// Once all members have objects created in the team array, HTML file will be generated. Use template literal to create the skeleton.
function generateHTML(data) {
  return ` 
    ${data}
  `;
}

//write the html to a file
function writeToFile() {
  fs.writeFile("index.html", htmlPageContent, (err) =>
    err ? console.log(err) : console.log("Successfully created index.html!")
  );
}

init();
