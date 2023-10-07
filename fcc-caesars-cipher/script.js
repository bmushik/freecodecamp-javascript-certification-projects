// This function applies Caesar Cipher encryption to a given string with a specified shift value.
function CaesarsCipherShift(str, shift) {
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const indexMap = {};
    let newStr = [];
    // Create a mapping between index and letter for easier lookup.
    letters.split('').forEach((letter, index) => {
        indexMap[index] = letter;
        indexMap[letter] = index;
    });
    // Iterate through each character in the input string.
    for (let i = 0; i < str.length; i++) {
        if (letters.includes(str[i])) {
            let letter = indexMap[str[i]];
            // Apply the Caesar Cipher shift, considering wrap around for positive and negative shifts.
            if (letter + shift > 25) {
                newStr.push(indexMap[letter + shift - 26])
            } else if (letter + shift < 0) {
                newStr.push(indexMap[letter + shift + 26])
            } else {
                newStr.push(indexMap[letter + shift])
            }
        } else {
            // Keep non-letter characters unchanged.
            newStr.push(str[i])
        }
    }
    // Display the encrypted result and return it.
    console.log(newStr.join(''))
    return newStr.join('');
}
// Test the function with an example.
CaesarsCipherShift("estd td jzfc dstqepo dpyepynp.", 15); //Output: this is your shifted sentence.

// Please note that this code operates only with lowercase letters. Please use toLowerCase and toUpperCase where necessary, considering the case sensitivity.
