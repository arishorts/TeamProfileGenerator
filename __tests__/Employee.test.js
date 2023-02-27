const Employee = require("../lib/employee");

describe("Employee", () => {
  describe("GetName", () => {
    test("It should return name:", () => {
      const employee = new Employee({
        name: "John Doe",
        id: "1",
        email: "johndoe@gmail.com",
      });
      expect(employee.getName()).toEqual("John Doe");
    });
  });
  describe("GetEmail", () => {
    test("It should return email:", () => {
      const employee = new Employee({
        name: "John Doe",
        id: "1",
        email: "johndoe@gmail.com",
      });
      expect(employee.getEmail()).toEqual("johndoe@gmail.com");
    });
  });
  describe("GetId", () => {
    test("It should return Id:", () => {
      const employee = new Employee({
        name: "John Doe",
        id: "1",
        email: "johndoe@gmail.com",
      });
      expect(employee.getId()).toEqual("1");
    });
  });
  describe("GetRole", () => {
    test("It should return Role:", () => {
      const employee = new Employee({
        name: "John Doe",
        id: "1",
        email: "johndoe@gmail.com",
      });
      expect(employee.getRole()).toEqual("employee");
    });
  });
});
