// Special Character Code
const specialCharters = "!@#$%^&*()";
var generateBtn = document.querySelector("generate");
generateBtn.addEventListener("click", writePassword);
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// prompt response code upon click
function generatePassword() {
  var passwordLength = prompt("Please enter the number of characters you want your password to be. Must be between 8 and 128");

  var numbers = confirm("Do you want numbers in your password?");

  var lowerCases = confirm("Do you want lowercases in your password?");

  var upperCases = confirm("Do you want uppercases in your password?");

generateBtn.addEventListener("click", writePassword);
