// Most of this code was obtained from: natashagils/Simple-Password-Generator after study, did not find more efficient method
const specialCharacters = "!@#$%^&*()";
const generateBtn = document.querySelector("generate");
generateButton.addEventListener("click", writePassword);
// Write password 
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Prompt  response code upon click
function generatePassword() {
    let passwordLength = prompt("Please enter the number of characters you want your password to be. Must be between 8 and 128");

    let numbers = confirm("Do you want numbers in your password?");

    let lowerCases = confirm("Do you want lowercases in your password?");

    let upperCases = confirm("Do you want uppercases in your password?");

    let Special = confirm("Do you want special characters in your password?");

// Minimum character count
    let minimumCount = 0;

    let minimumNumbers = "";
    let minimumLowerCases = "";
    let minimumUpperCases = "";
    let minimumSpecialCharacters = "";

// Generate Code-considered long hand change, but not as clean/efficient

  let functionArray = {
    getNumbers: function() {
      return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
    },

    getLowerCases: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
    },

    getUpperCases: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
    },

    getSpecialCharacters: function() {
      return specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
    }

  };

  // if check Statement

    if (numbers === true) {
      minimumNumbers = functionArray.getNumbers();
    }

    if (lowerCases === true) {
      minimumLowerCases = functionArray.getLowerCases();
      minimumCount++;
    }

    if (upperCases === true) {
      minimumUpperCases = functionArray.getUpperCases();
      minimumCount++;
    }

    if (Special = true) {
      minimumSpecialCharacters = functionArray.getSpecialCharacters();
      minimumCount++;
    }

    // run variable for loop below
    let randomPasswordGenerated = "";

    // run random character loop
    for (var i = 0; i < (parseInt(passwordLength) - minimumCount); i++) {
      let randomNumberPicked = Math.floor(Math.random() * 5);

      randomPasswordGenerated += randomNumberPicked;

    }
  
    randomPasswordGenerated += minimumNumbers;
    randomPasswordGenerated += minimumLowerCases;
    randomPasswordGenerated += minimumUpperCases;
    randomPasswordGenerated += minimumSpecialCharacters;

    return randomPasswordGenerated;

}