/* eslint-disable no-undef */
/* global test,expect */
// Importing the functions for testing purposes

const {
  getStringSpecial,
  lengthOfString,
  generateFirstSquares,
} = require("./atikram");

// Testing the first function(solution 8)

describe("getStringSpecial", () => {
  test("returns a substring of all characters in the input string until the first repeating character", () => {
    expect(() => getStringSpecial()).toThrow();
    expect(getStringSpecial("abcdef")).toBe("abcdef");
    expect(getStringSpecial("aabbcc")).toBe("a");
    expect(getStringSpecial("")).toBe("");
    expect(getStringSpecial("abcdeabc")).toBe("abcde");
    expect(getStringSpecial("abbcdefg")).toBe("ab");
    expect(() => getStringSpecial(1234)).toThrow("The input is not a string");
  });
});

// Testing the second function(solution 10)

describe("lengthOfString", () => {
  test("returns the correct length of the input string", () => {
    expect(() => lengthOfString()).toThrow();
    expect(lengthOfString("")).toBe(0);
    expect(lengthOfString("a")).toBe(1);
    expect(lengthOfString("hello")).toBe(5);
    expect(lengthOfString("12345")).toBe(5);
    expect(lengthOfString("lengthOfString")).toBe(14);
    expect(() => lengthOfString(753942)).toThrow("The input is not a string");
  });
});

// Testing the third function(solution 11)

describe("generateFirstSquares", () => {
  test("returns an empty array when n is 0", () => {
    expect(() => generateFirstSquares()).toThrow();
    expect(generateFirstSquares(0)).toEqual([]);
  });

  test("returns the first n perfect squares", () => {
    expect(generateFirstSquares(1)).toStrictEqual([1]);
    expect(generateFirstSquares(3)).toStrictEqual([1, 4, 9]);
    expect(generateFirstSquares(5)).toStrictEqual([1, 4, 9, 16, 25]);
    expect(generateFirstSquares(10)).toStrictEqual([
      1, 4, 9, 16, 25, 36, 49, 64, 81, 100,
    ]);
    expect(() => generateFirstSquares("abcd")).toThrow(
      "The input is not a number"
    );
  });
});
