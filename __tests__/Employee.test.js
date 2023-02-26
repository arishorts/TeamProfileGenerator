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
});
