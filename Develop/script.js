// Assignment Code
var generateBtn = document.querySelector("#generate");
 choicesBtn = document.querySelector("#choices")
const alphabetLower = "abcdefghijklmnopqrstuvwxyz";
const alphabetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const special = "!#$%&()*+,-./:;<=>?@[]^_`{|}~";
const numbers = "0123456789";
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  let displayedPassword = "";
  let generatedPassword = "";

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Slider Bar
var rangeslider =document.getElementById("sliderRange");
var output = document.getElementById("demo");
output.innerHTML = rangeslider.value;

rangeslider.oninput = function() {
  output.innerHTML = this.value;
}

// LowerCase
// if (document.querySelector("#lowerCase").checked) {
//   generatePassword = alphabetLower;
// }

// // Test Code
// // Options code
// const UNInum = [48, 57];
// const UNIupper = [65, 90];
// const UNIlower = [97, 122];
// const UNIsym = [33, 47];
// // checkboxes attribute
// const upper = document.querySelector("#uppercase").checked;
// const lower = document.querySelector("#lowercase").checked;
// const numbers = document.querySelector("#numbers").checked;
// const symbols = document.querySelector("#symbols").checked;

