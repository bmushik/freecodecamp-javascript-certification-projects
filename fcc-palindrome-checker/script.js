// This function checks if a given string is a palindrome.
function palindrome(str) {
    // Remove special characters and punctuation from the string.
    let validStr = str.replace(/[^\w\s]|_/g, '');
    // Remove spaces from the string and convert it to lowercase.
    let joinedStr = validStr.replace(/\s+/g, '').toLowerCase();
    // Iterate through the string.
    for (let i = 0; i < joinedStr.length / 2; i++) {
        let j = joinedStr.length;

        // Compare characters from the beginning and end of the string.
        if (joinedStr[i] !== joinedStr[j - i - 1]) {
            return false; // If characters don't match, it's not a palindrome.
        }
    }
    return true; // All characters matched, so it's a palindrome.
}

// Test the function with a sample string.
palindrome("ey edip adanada pide ye");
