const assert = require("assert");
/* (solution to problem-5)

* function printNumber has two arguments first is n and second one is type and it prints the first n even or odd numbers.
* for example if n=4 and type=odd the output will be:1,3,5,7
* if n=4 type=even the output will be: 2,4,6,8
* @param{number} n is the numbers needed.
* @param{string} type is the string it can be even or odd.
* @return{string} numbers that returns array of first n even or odd numbers.
*/

function printNumbers(n, evenOrOdd) {
  assert(typeof n === "number" && typeof evenOrOdd === "string");
  const numbers = [];
  let startNumber = evenOrOdd === "even" ? 2 : 1;
  const increment = evenOrOdd === "even" ? 2 : 2;
  for (let i = 0; i < n; i++) {
    numbers.push(startNumber);
    startNumber += increment;
  }
  return numbers.join(",");
}
printNumbers(4, "even");

/* (solution to problem-7)

* function convertToBinary converts decimal number to binary number.
* if the number decimal number 10 is passed then we get 1010.
@param{number} numInDecimal is a number in decimal format
@return{string} returns numInBinary that is in binary format.
*/
function convertToBinary(numInDecimal) {
  assert(typeof numInDecimal === "number");
  if (numInDecimal === 0) {
    return "0";
  }
  let numInBinary = "";
  while (numInDecimal > 0) {
    numInBinary = (numInDecimal % 2) + numInBinary;
    numInDecimal = Math.floor(numInDecimal / 2);
  }
  return numInBinary;
}
convertToBinary(100);

/* solution to problem-12
 * function getDayOfWeekthat will return you the day of week given a short string representation of  day's name.
 * @param{string} dayName is a string. It will be a 3 character long case insensitive string.
 * @return{number} the day Of Week.
 */
function getDayOfWeek(dayName) {
  assert(typeof dayName === "string");
  const daysOfWeek = {
    sun: 0,
    mon: 1,
    tue: 2,
    wed: 3,
    thu: 4,
    fri: 5,
    sat: 6,
  };

  const day = dayName.toLowerCase();
  if (day in daysOfWeek) {
    return daysOfWeek[day];
  } else {
    return -1;
  }
}
module.exports = { printNumbers, convertToBinary, getDayOfWeek };
