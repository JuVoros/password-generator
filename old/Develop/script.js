// Assignment Code
var generateBtn = document.querySelector("#generate");
 choicesBtn = document.querySelector("#choices")
const alphabetLower = "abcdefghijklmnopqrstuvwxyz";
const alphabetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const special = "!#$%&()*+,-./:;<=>?@[]^_`{|}~";
const numbers = "0123456789";
// Write password to the #password input
function generatePassword(){
    return "password"
  } 


// Write password to the #password 
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  let displayedPassword = "";
  let generatedPassword = "";
 
  passwordText.value = password;
}

// Lowercase
if (document.querySelector("#lowerCase").checked) {
  generatePassword = alphabetLower;
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

let slider = document.getElementById("choseLength");
let output = document.getElementById("demo");
output.innerHTML = this.value;

slider.oninput = function () {
  output.innerHTML = this.value;
};





