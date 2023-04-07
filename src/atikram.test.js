/* global test,expect */
// Importing the functions for testing purposes

const{ getStringSpecial, lengthOfString, generateFirstSquares } = require("./pavan");

//Testing the first function(solution 8)

describe("getStringSpecial", () => {
  test("returns a substring of all characters in the input string until the first repeating character", () => {
    expect(getStringSpecial("abcdef")).toBe("abc");
    expect(getStringSpecial("aabbcc")).toBe("a");
    expect(getStringSpecial("")).toBe("");
    expect(getStringSpecial("abcdeabc")).toBe("abcde");
    expect(getStringSpecial("abbcdefg")).toBe("ab");
  });
});


//Testing the second function(solution 10)

describe("lengthOfString", () => {
    test("returns the correct length of the input string", () => {
      expect(lengthOfString("")).toBe(0);
      expect(lengthOfString("a")).toBe(1);
      expect(lengthOfString("hello")).toBe(5);
      expect(lengthOfString("12345")).toBe(5);
      expect(lengthOfString("lengthOfString")).toBe(14);
    });
  });


  //Testing the third function(solution 11)

  describe("generateFirstSquares", () => {
    test("returns an empty array when n is 0", () => {
      expect(generateFirstSquares(0)).toEqual([]);
    });
  
    test("returns the first n perfect squares", () => {
      expect(generateFirstSquares(1)).toEqual([1]);
      expect(generateFirstSquares(3)).toEqual([1, 4, 9]);
      expect(generateFirstSquares(5)).toEqual([1, 4, 9, 16, 25]);
      expect(generateFirstSquares(10)).toEqual([1, 4, 9, 16, 25, 36, 49, 64, 81, 100]);
    });
  });