// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    if (shift === 0 || shift < -25 || shift > 25) {
      return false;
    }
    const shiftLetter = (letter, shift) => {
      const alphabet = 'abcdefghijklmnopqrstuvwxyz';
      lowerCaseLetter = letter.toLowerCase();
      const alphabetLength = alphabet.length;
    
      const index = alphabet.indexOf(lowerCaseLetter)
      
      if (index === -1) {
        return letter;
      }
      let shiftedIndex = (index + shift + alphabetLength) % alphabetLength;
      if (shiftedIndex < 0) {
        shiftedIndex += alphabetLength;
      }
      return alphabet[shiftedIndex];
    }
    

    return input.split('').map(char => shiftLetter(char, encode ? shift : -shift)).join('');
  }
  
  return {
    caesar,
  };
}) ();

module.exports = { caesar: caesarModule.caesar };
