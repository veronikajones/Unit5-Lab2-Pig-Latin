let piglatin = require("./piglatin");

describe("translate function", () => {
  test("Hello should make ellohay", () => {
    let testTranslate = piglatin.translate("Hello");

    expect(testTranslate).toBe("ellohay");
  });

  test("One should make oneway", () => {
    let testTranslate = piglatin.translate("One");

    expect(testTranslate).toBe("oneway");
  });

  test("Food should make oodfay", () => {
    let testTranslate = piglatin.translate("Food");

    expect(testTranslate).toBe("oodfay");
  });

  test("Iodine should make iodineway", () => {
    let testTranslate = piglatin.translate("Iodine");

    expect(testTranslate).toBe("iodineway");
  });

  test("Strawberry should make awberrystray", () => {
    let testTranslate = piglatin.translate("strawberry");

    expect(testTranslate).toBe("awberrystray");
  });

  test("Awesome should make awesomeway", () => {
    let testTranslate = piglatin.translate("Awesome");

    expect(testTranslate).toBe("awesomeway");
  });

  test("Elephant should make elephantway", () => {
    let testTranslate = piglatin.translate("Elephant");

    expect(testTranslate).toBe("elephantway");
  });

  test("Umbrella should make umbrellaway", () => {
    let testTranslate = piglatin.translate("Umbrella");

    expect(testTranslate).toBe("umbrellaway");
  });

  test("Nothing should make othingnay", () => {
    let testTranslate = piglatin.translate("Nothing");

    expect(testTranslate).toBe("othingnay");
  });

  test("JSON should make onjsay", () => {
    let testTranslate = piglatin.translate("JSON");

    expect(testTranslate).toBe("onjsay");
  });
});
