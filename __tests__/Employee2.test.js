const Employee = require("../lib/employee");
const Engineer = require("../lib/engineer");
const Intern = require("../lib/intern");
const Manager = require("../lib/manager");
jest.mock("../lib/employee");

beforeEach(() => {
  // Clear all instances and calls to constructor and all methods:
  Employee.mockClear();
});

test("We can check if the engineer called the employee class constructor", () => {
  const engineer = new Engineer();
  expect(Employee).toHaveBeenCalledTimes(1);
});

test("We can check if the intern called the employee class constructor", () => {
  const intern = new Intern();
  expect(Employee).toHaveBeenCalledTimes(1);
});

test("We can check if the manager called the employee class constructor", () => {
  const manager = new Manager();
  expect(Employee).toHaveBeenCalledTimes(1);
});
