const Employee = require("./employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super({ name, email, id });
    this.github = github;
  }
  getRole() {
    return "Engineer";
  }
  getGithub() {
    return this.github;
  }
}

module.exports = Engineer;
