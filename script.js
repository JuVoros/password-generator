// Assignment Code
var generateBtn = document.querySelector("#generate");

const alphabetLower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const alphabetUpper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const specialCharcaters = ['@','%','+','\\','/','"','!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];
const numbers = ['0','1','2','3','4','5','6','7','8','9',];



function passwordChoices(){
  var length = parseInt(prompt("Please input Password Length(6-128)"));
  var hasLower = confirm("Would you like lowercase letters in your password?")
  var hasUpper = confirm("Would you like uppercase letters in your password?")
  var hasSpecial = confirm("Would you like special charcaters in your password?")
  var hasNumbers = confirm("Would you like numbers in your password?")

  var passwordOptions = {
    length,
    hasLower,
    hasUpper,
    hasSpecial,
    hasNumbers
  }

  return passwordOptions;
}



function generatePassword() {
  var options = passwordChoices();
  var results = [];
  var possible = [];
// based on user choices create a pool of req characters





  for (let i = 0; i < options.length; i++) {
   let  Math.floor(Math.random() * generatePassword.length );
    
  }

  return results;
}
if (hasLower === true){
  then push

  
}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
passwordChoices();
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
