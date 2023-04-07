/* global expect, test */
const { printNumbers, convertToBinary, getDayOfWeek } = require("./arpita.js");
test("test even numbers", () => {
  expect(() => printNumbers()).toThrow();
  expect(printNumbers(0, "even")).toEqual("");
  expect(printNumbers(1, "even")).toEqual("2");
  expect(printNumbers(5, "even")).toEqual("2,4,6,8,10");
  expect(printNumbers(8, "even")).toEqual("2,4,6,8,10,12,14,16");
  expect(printNumbers(15, "even")).toEqual(
    "2,4,6,8,10,12,14,16,18,20,22,24,26,28,30"
  );
});

test("test odd numbers", () => {
  expect(() => printNumbers()).toThrow();
  expect(printNumbers(0, "odd")).toEqual("");
  expect(printNumbers(1, "odd")).toEqual("1");
  expect(printNumbers(5, "odd")).toEqual("1,3,5,7,9");
  expect(printNumbers(8, "odd")).toEqual("1,3,5,7,9,11,13,15");
  expect(printNumbers(15, "odd")).toEqual(
    "1,3,5,7,9,11,13,15,17,19,21,23,25,27,29"
  );
});

test("test decimal to binary", () => {
  expect(() => convertToBinary()).toThrow();
  expect(convertToBinary(10)).toEqual("1010");
  expect(convertToBinary(4)).toEqual("100");
  expect(convertToBinary(1000)).toEqual("1111101000");
  expect(convertToBinary(8)).toEqual("1000");
  expect(convertToBinary(1200)).toEqual("10010110000");
});

test("test days of week", () => {
  expect(() => getDayOfWeek()).toThrow();
  expect(getDayOfWeek("sun")).toEqual(0);
  expect(getDayOfWeek("mon")).toEqual(1);
  expect(getDayOfWeek("Mon")).toEqual(1);
  expect(getDayOfWeek("tue")).toEqual(2);
  expect(getDayOfWeek("thu")).toEqual(4);
});
