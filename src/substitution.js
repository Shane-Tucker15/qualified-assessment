// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  
  function isNotUnique(str) {
    return new Set(str).size !== str.length;
  }
  function substitution(input, alphabet, encode = true) {

      if (!alphabet || alphabet.length !== 26 || isNotUnique(alphabet)){
        return false;
      }

      const standardAlphabet = 'abcdefghijklmnopqrstuvwxyz';
      const lowerCaseInput = input.toLowerCase();
      let result = "";

      for (let i = 0; i <lowerCaseInput.length; i++) {
        const char = lowerCaseInput[i];
        let index;
        
        if (char === " ") {
          result += " ";
          continue;
        }
        if (encode) {
          index = standardAlphabet.indexOf(char);
          if (index !== -1) {
            result += alphabet[index];
          } else {
            result += char;
          }
        } else {
          index = alphabet.indexOf(char);
          if (index !== -1) {
            result += standardAlphabet[index];
          } else {
            result += char;
          }
        }
      }
      return result;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
