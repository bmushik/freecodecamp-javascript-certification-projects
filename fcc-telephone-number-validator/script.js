function telephoneCheck(str) {
    // Remove all non-digit characters from the string
    var numbersOnly = str.replace(/\D/g, "");
    // Remove all spaces from the string
    var withoutSpaces = str.replace(/\s/g, "");

    // Check each character in the string
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        // If the character is not a digit, parentheses, hyphen, or space, return false
        if (!/[\d\(\)-\s]/.test(char)) {
            return false;
        }
    }

    // If the string starts with a hyphen, return false
    if (str[0] === "-") {
        return false;
    }

    // Check for valid phone number formats
    if (numbersOnly.length === 11) {
        if (numbersOnly[0] !== "1") {
            return false; // If the first digit is not 1, return false
        } else {
            return isValid(withoutSpaces.slice(1)); // Check the validity of the rest of the number
        }
    } else if (numbersOnly.length !== 10) {
        return false; // If the length is not 10 or 11, return false
    } else {
        return isValid(withoutSpaces); // Check the validity of the number
    }

    // Function to validate phone number formats
    function isValid(phoneNumber) {
        return /^(\d{3}-\d{3}-\d{4}|\(\d{3}\)\d{3}-\d{4}|\(\d{3}\) \d{3}-\d{4}|\d{3} \d{3} \d{4}|\d{10})$/.test(phoneNumber);
    }
}

// Test the function with a phone number
console.log(telephoneCheck("1 555)555-5555"));
