const Manager = require("../lib/manager");

describe("Employee", () => {
  test("defines getName()", () => {
    const manager = new Manager();
    expect(typeof manager.getName).toBe("function");
  });
  test("defines getId()", () => {
    const manager = new Manager();
    expect(typeof manager.getId).toBe("function");
  });
  test("defines getEmail()", () => {
    const manager = new Manager();
    expect(typeof manager.getEmail).toBe("function");
  });
});

describe("Manager", () => {
  describe("GetName", () => {
    test("It should return name:", () => {
      const manager = new Manager("John Doe", "1", "johndoe@gmail.com", "123");
      expect(manager.getName()).toEqual("John Doe");
    });
  });
  describe("GetEmail", () => {
    test("It should return email:", () => {
      const manager = new Manager("John Doe", "1", "johndoe@gmail.com", "123");
      expect(manager.getEmail()).toEqual("johndoe@gmail.com");
    });
  });
  describe("GetId", () => {
    test("It should return Id:", () => {
      const manager = new Manager("John Doe", "1", "johndoe@gmail.com", "123");
      expect(manager.getId()).toEqual("1");
    });
  });
  describe("GetofficeNumber", () => {
    test("It should return Office Number:", () => {
      const manager = new Manager("John Doe", "1", "johndoe@gmail.com", "123");
      expect(manager.getOfficeNumber()).toEqual("123");
    });
  });
  describe("GetRole", () => {
    test("It should return Role:", () => {
      const manager = new Manager("John Doe", "1", "johndoe@gmail.com", "123");
      expect(manager.getRole()).toEqual("Manager");
    });
  });
});
