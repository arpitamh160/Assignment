/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
// importing asserts to check for preconditions.
// eslint-disable-next-line prettier/prettier

const assert = require("assert");

// solution 8

/**
 * Returns a substring containing all characters in a string until the first repeating character is found.
 *
 * @param {string} str - The input string to search.
 * @returns {string} - The resulting substring.
 */
function getStringSpecial(str) {
  assert(typeof str === "string", "The input is not a string");
  // Create an empty set to keep track of unique characters seen so far
  const charSet = new Set();
  // Create an empty string to store the resulting substring
  let result = "";

  // Loop through each character in the input string
  for (let i = 0; i < str.length; i++) {
    // Check if the current character has already been seen before
    if (charSet.has(str[i])) {
      // If the character has already been seen, break out of the loop and return the current result string
      break;
    } else {
      // If the character has not been seen before, add it to the set and append it to the result string
      charSet.add(str[i]);
      result += str[i];
    }
  }

  // Return the resulting substring
  return result;
}

// solution 10

/**
 * Computes the length of a string.
 *
 * @param {string} str - The input string.
 * @returns {number} - The length of the string.
 */
function lengthOfString(str) {
  assert(typeof str === "string", "The input is not a string");

  // Initialize a counter variable to keep track of the number of characters seen so far
  let count = 0;

  // Loop through each character in the input string
  for (const char of str) {
    // Increment the counter for each character seen
    count++;
  }

  // Return the length of the string
  return count;
}

// solution 11

/**
 * Returns an array of the first 'n' perfect squares.
 *
 * @param {number} n - The number of perfect squares to generate.
 * @returns {number[]} - An array of the first 'n' perfect squares.
 */
function generateFirstSquares(n) {
  assert(typeof n === "number", "The input is not a number");
  // Initialize an empty array to store the perfect squares
  const squares = [];

  // Loop through numbers starting from 1 until we find 'n' perfect squares
  for (let i = 1; squares.length < n; i++) {
    // Compute the square of the current number and push it to the 'squares' array
    squares.push(i * i);
  }

  // Return the array of perfect squares
  return squares;
}

// Exporting the functions
module.exports = { getStringSpecial, lengthOfString, generateFirstSquares };
