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


generateBtn.addEventListener("click", writePassword);
