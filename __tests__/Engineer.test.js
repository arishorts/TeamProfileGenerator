const Engineer = require("../lib/engineer");

describe("Employee", () => {
  test("defines getName()", () => {
    const engineer = new Engineer();
    expect(typeof engineer.getName).toBe("function");
  });
  test("defines getId()", () => {
    const engineer = new Engineer();
    expect(typeof engineer.getId).toBe("function");
  });
  test("defines getEmail()", () => {
    const engineer = new Engineer();
    expect(typeof engineer.getEmail).toBe("function");
  });
});
describe("Engineer", () => {
  describe("GetName", () => {
    test("It should return name:", () => {
      const engineer = new Engineer(
        "John Doe",
        "1",
        "johndoe@gmail.com",
        "johndoegithub"
      );
      expect(engineer.getName()).toEqual("John Doe");
    });
  });
  describe("GetEmail", () => {
    test("It should return email:", () => {
      const engineer = new Engineer(
        "John Doe",
        "1",
        "johndoe@gmail.com",
        "johndoegithub"
      );
      expect(engineer.getEmail()).toEqual("johndoe@gmail.com");
    });
  });
  describe("GetId", () => {
    test("It should return Id:", () => {
      const engineer = new Engineer(
        "John Doe",
        "1",
        "johndoe@gmail.com",
        "johndoegithub"
      );
      expect(engineer.getId()).toEqual("1");
    });
  });

  describe("GetRole", () => {
    test("It should return Role:", () => {
      const engineer = new Engineer(
        "John Doe",
        "1",
        "johndoe@gmail.com",
        "johndoegithub"
      );
      expect(engineer.getRole()).toEqual("Engineer");
    });
  });
  describe("getGithub", () => {
    test("It should return Github:", () => {
      const engineer = new Engineer(
        "John Doe",
        "1",
        "johndoe@gmail.com",
        "johndoegithub"
      );
      expect(engineer.getGithub()).toEqual("johndoegithub");
    });
  });
});
