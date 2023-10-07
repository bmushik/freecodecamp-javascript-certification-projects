# Caesar's Cipher Shift

This is a JavaScript function that applies the Caesar Cipher encryption technique to a given string. The Caesar Cipher is a simple form of substitution cipher where each letter in the plaintext is shifted a certain number of places down or up the alphabet.

## Usage

You can use this function to encrypt or decrypt a string using the Caesar Cipher technique with a specified shift value. It supports both positive and negative shifts, and non-letter characters are left unchanged.

```javascript
// Import the function or copy the code into your project

// Example usage
const encryptText = CaesarsCipherShift("this is your shifted sentence.", 15);
console.log(encryptText); // Output: "iwxh xh ndjg hwxuits htcitcrt."

const decryptText = CaesarsCipherShift("iwxh xh ndjg hwxuits htcitcrt.", 11); //shift with -15 will also work
console.log(decryptText); // Output: "this is your shifted sentence."
```
## Parameters
str: The input string that you want to encrypt or decrypt.

shift: The number of positions each letter in the string should be shifted. Positive values shift to the right, negative values shift to the left.

## Visualization with CodePen

For a hands-on experience of the Caesar's Cipher encryption, you can try it out on CodePen. Visit the following CodePen link to interact with the encryption and decryption visualization:

[![Try it on CodePen](https://img.shields.io/badge/Try%20it%20on-CodePen-blue?style=for-the-badge)](https://codepen.io/bmushik/pen/qBQzNBy)
