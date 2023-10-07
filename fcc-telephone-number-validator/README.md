# Telephone Number Validator

This is a JavaScript function that validates different formats of phone numbers. It checks whether a given phone number follows the acceptable formats.

## Valid Phone Number Formats

This function validates phone numbers in the following formats:

1. `555-555-5555`
2. `(555)555-5555`
3. `(555) 555-5555`
4. `555 555 5555`
5. `5555555555`
6. `1 555 555 5555`

Please note that the function assumes that the input string only contains valid characters (digits, parentheses, hyphens, and spaces) and does not account for other potential formatting issues.

## How It Works

The function first removes all non-digit characters and spaces from the input string. It then checks the characters one by one to ensure they are either digits, parentheses, hyphens, or spaces. It also performs checks to eliminate invalid cases such as a string starting with a hyphen.

After the initial checks, the function validates the input based on the length of the remaining digits. If the length is 10, it directly validates the format. If the length is 11 and the first digit is "1," it validates the rest of the number.
