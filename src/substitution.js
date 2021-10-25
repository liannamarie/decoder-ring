// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  
    
  function substitution(input, alphabet, encode = true) {
    // default
      if (!input || !alphabet || alphabet.length !== 26){return false};
      if (Array.from(new Set(alphabet)).length !== 26){return false};
    // variables
      let abcs = 'abcdefghijklmnopqrstuvwxyz';
      alphabet = alphabet.split('');
      input = input.toLowerCase();
      let subResult = {};
      let decode = {};
      let result = '';

      abcs.split('').forEach((letter, index) => {
          subResult[letter] = alphabet[index];
          decode[alphabet[index]] = letter;
      })
     // if false
      if (!encode) subResult = decode;
      input.split('').forEach(input => {
          result += input === ' ' ? ' ' : subResult[input]
      })

      // return

      return result;
  }

    // subsitution function ends
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };