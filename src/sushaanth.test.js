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

test("checking addArrays(a, b) to add numeric Arrays", () => {
  expect(sushaanth.addArrays([2, 3, 5], [5, 6, 4])).toStrictEqual([7, 9, 9]);
  expect(sushaanth.addArrays([2, 2], [4, 5, 6])).toStrictEqual([6, 7, 6]);
  expect(sushaanth.addArrays([4, 5, 5], [])).toStrictEqual([4, 5, 5]);
  expect(sushaanth.addArrays(23, 45)).toStrictEqual(
    "23 is not an Array \n45 is not an Array"
  );
  expect(sushaanth.addArrays([22, 45, 86], "45")).toStrictEqual(
    "45 is not an Array"
  );
  expect(sushaanth.addArrays(35, [56, 94, 10, 4])).toStrictEqual(
    "35 is not an Array"
  );
  expect(
    sushaanth.addArrays([23, 45, 6, "25"], [40, 18, 100, 50])
  ).toStrictEqual("25 in [23,45,6,25] at index 3 is not a number ");
  expect(sushaanth.addArrays([30, 89, 51, 12], ["16", 47, 10])).toStrictEqual(
    "16 in [16,47,10] at index 0 is not a number "
  );
  expect(
    sushaanth.addArrays([97, 16, "35", "73"], [73, "18", "100", 15, 36])
  ).toStrictEqual(
    "35 in [97,16,35,73] at index 2 is not a number \n73 in [97,16,35,73] at index 3 is not a number \n18 in [73,18,100,15,36] at index 1 is not a number \n100 in [73,18,100,15,36] at index 2 is not a number "
  );
});
