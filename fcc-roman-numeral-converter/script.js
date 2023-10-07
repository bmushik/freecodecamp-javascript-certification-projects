function convertToRoman(num) {
  // Convert the given number to a string for easier manipulation.
  num = num.toString();

  // Reverse the digits of the number to start from the smallest digit.
  const reversedNum = num.split('').reverse().join('');

  // Create an array to store the converted Roman numerals.
  let convertedNum = [];

  // Split the digits of the number into an array and assign them to separate variables.
  const reversedNumArray = reversedNum.split('');
  const [indexZero, indexOne, indexTwo, indexThree] = reversedNumArray;

  // Common function to convert individual digits to Roman numerals.
  function digitConverter(indexNum, ones, fives, tens) {
    // For digits 1, 2, and 3, add the ones symbol for the number of times equal to the digit value.
    if (indexNum > 0 && indexNum < 4) {
      for (let i = 0; i < indexNum; i++) {
        convertedNum.push(ones);
      }
    } 
    // For digit 4, combine the ones and fives symbols to form the Roman numeral.
    else if (indexNum === "4") {
      convertedNum.push(ones + fives);
    } 
    // For digit 5, add the fives symbol directly.
    else if (indexNum === "5") {
      convertedNum.push(fives);
    } 
    // For digits 6, 7, and 8, add the fives symbol and then the ones symbol for the remaining count.
    else if (indexNum > 5 && indexNum < 9) {
      convertedNum.push(fives);
      for (let i = 0; i < indexNum - 5; i++) {
        convertedNum.push(ones);
      }
    } 
    // For digit 9, combine the ones and tens symbols to form the Roman numeral.
    else if (indexNum === "9") {
      convertedNum.push(ones + tens);
    } 
    // For other cases, do nothing and return from the function.
    else {
      return;
    }
  }

  // Call the `digitConverter` function for each digit to convert them to Roman numerals.
  digitConverter(indexThree, "M", "", ""); // Use "M" for the thousands place.
  digitConverter(indexTwo, "C", "D", "M"); // Use "C", "D", and "M" for the hundreds place.
  digitConverter(indexOne, "X", "L", "C"); // Use "X", "L", and "C" for the tens place.
  digitConverter(indexZero, "I", "V", "X"); // Use "I", "V", and "X" for the ones place.

  // Combine the converted Roman numerals array and return the final result.
  return convertedNum.join('');
}

console.log(convertToRoman(390)); // Output: CCCXC
