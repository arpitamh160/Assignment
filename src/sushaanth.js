/*
 * 6. We want a function that will pad zeros before a number to ensure it has said number of digits.
 * So if the number is  123, we should prepend a 0, to it and print 0123 if we want the 4 digit format.
 * IF the provided number itself contains more than the digits mentioned, nothing needs be done, simply return the number string as is.
 */

/**
 * A function that pads 0's (zeros) to a number.
 * @param {number} number - The number you want to pad 0's (zeros) with.
 * @param {number} numOfDigits - The max length of string, adds (numOfDigits - length of number) zeros to left side of number
 * @returns {string} The string which is padded with 0's (zeros)
 */
function padZerosBeforeNumber(number, numOfDigits) {
  if (typeof number !== "number" && typeof numOfDigits !== "number") {
    return `argument: ${number} is not a number \nargument: ${numOfDigits} is not a number`;
  }

  if (typeof number !== "number") {
    return `argument: ${number} is not a number`;
  }

  if (typeof numOfDigits !== "number") {
    return `argument: ${numOfDigits} is not a number`;
  }

  return number.toString().padStart(numOfDigits, "0");
}

module.exports = { padZerosBeforeNumber };
