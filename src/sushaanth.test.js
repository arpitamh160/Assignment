/* global expect, test */

const sushaanth = require("./sushaanth.js");

test("checking padZerosBeforeNumber(number, numOfDigits) pads 0's to numbers", () => {
  expect(sushaanth.padZerosBeforeNumber(233, 6)).toBe("000233");
  expect(sushaanth.padZerosBeforeNumber(333333445, 4)).toBe("333333445");
  expect(sushaanth.padZerosBeforeNumber(4269, 7)).toBe("0004269");
  expect(sushaanth.padZerosBeforeNumber("1234", "3")).toBe(
    "argument: 1234 is not a number \nargument: 3 is not a number"
  );
  expect(sushaanth.padZerosBeforeNumber("20234", 7)).toBe(
    "argument: 20234 is not a number"
  );
  expect(sushaanth.padZerosBeforeNumber(204593, "5")).toBe(
    "argument: 5 is not a number"
  );
});
