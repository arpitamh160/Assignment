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

/**
 * 9. Write a function called addArrays, that will generate a result array where it contains the some of corresponding numbers
 * in the source arrays.
 */

/**
 * A function that adds two numeric Arrays.
 * @param {Array} a - The first Array to add.
 * @param {Array} b - The second Array to add.
 * @returns {Array} The sum of a and b.
 */
function addArrays(a, b) {
  if (!Array.isArray(a) && !Array.isArray(b)) {
    return `${a} is not an Array \n${b} is not an Array`;
  }
  if (!Array.isArray(a)) {
    return `${a} is not an Array`;
  }
  if (!Array.isArray(b)) {
    return `${b} is not an Array`;
  }

  let aTypeChecker = "";
  for (let i = 0; i < a.length; i++) {
    if (typeof a[i] !== "number") {
      aTypeChecker += `${a[i]} in [${a}] at index ${i} is not a number \n`;
    }
  }

  let bTypeChecker = "";
  for (let j = 0; j < b.length; j++) {
    if (typeof b[j] !== "number") {
      bTypeChecker += `${b[j]} in [${b}] at index ${j} is not a number \n`;
    }
  }

  if (aTypeChecker !== "" && bTypeChecker !== "") {
    return aTypeChecker + bTypeChecker.replace(/\n$/, "");
  }
  if (aTypeChecker !== "") {
    return aTypeChecker.replace(/\n$/, "");
  }
  if (bTypeChecker !== "") {
    return bTypeChecker.replace(/\n$/, "");
  }

  const result = [];
  const minimumLength = a.length > b.length ? b.length : a.length;
  const maximumArray = a.length < b.length ? b : a;
  let k = 0;
  for (; k < minimumLength; k++) {
    result.push(a[k] + b[k]);
  }
  for (; k < maximumArray.length; k++) {
    result.push(maximumArray[k]);
  }
  return result;
}

module.exports = { padZerosBeforeNumber, addArrays };
