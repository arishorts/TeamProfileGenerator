const Intern = require("../lib/intern");

describe("Employee", () => {
  test("defines getName()", () => {
    const intern = new Intern();
    expect(typeof intern.getName).toBe("function");
  });
  test("defines getId()", () => {
    const intern = new Intern();
    expect(typeof intern.getId).toBe("function");
  });
  test("defines getEmail()", () => {
    const intern = new Intern();
    expect(typeof intern.getEmail).toBe("function");
  });
});

describe("Intern", () => {
  describe("GetName", () => {
    test("It should return name:", () => {
      const intern = new Intern("John Doe", "1", "johndoe@gmail.com", "UofA");
      expect(intern.getName()).toEqual("John Doe");
    });
  });
  describe("GetEmail", () => {
    test("It should return email:", () => {
      const intern = new Intern("John Doe", "1", "johndoe@gmail.com", "UofA");
      expect(intern.getEmail()).toEqual("johndoe@gmail.com");
    });
  });
  describe("GetId", () => {
    test("It should return Id:", () => {
      const intern = new Intern("John Doe", "1", "johndoe@gmail.com", "UofA");
      expect(intern.getId()).toEqual("1");
    });
  });
  describe("GetRole", () => {
    test("It should return Role:", () => {
      const intern = new Intern("John Doe", "1", "johndoe@gmail.com", "UofA");
      expect(intern.getRole()).toEqual("Intern");
    });
  });
  describe("getGithub", () => {
    test("It should return Github:", () => {
      const intern = new Intern("John Doe", "1", "johndoe@gmail.com", "UofA");
      expect(intern.getSchool()).toEqual("UofA");
    });
  });
});
