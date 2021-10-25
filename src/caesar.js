// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    
      if (!shift || shift > 25 || shift < -25){
          return false;
      }
      if (!encode) {shift *= -1};
      // encode/decode and return
      return input.toLowerCase().split('').map((letter) => {
          if (letter.charCodeAt(0) < 97) {return letter};
          let charNumber = letter.charCodeAt(0) + parseInt(shift)
          if (charNumber > 122){
              charNumber = 96 + (charNumber - 122)
          }
          else if(charNumber < 97){
              charNumber += 26
          } 
                return String.fromCharCode(charNumber)
      }).join('');
  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
