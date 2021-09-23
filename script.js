// Assignment Code
var generateBtn = document.querySelector("#generate");

const alphabetLower = ["a",'b','c','d','e','f','g','h','i','j','k','l',"m",'n','o','p','q','r','s','t','u','v','w','x','y','z'];
const alphabetUpper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const specialCharacters = ['@','%','+','\\','/','"','!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];
const numbers = ['0','1','2','3','4','5','6','7','8','9'];


function generatePassword() {
  
    var passLength = parseInt(prompt("Please input Password Length(8-128)"));
    var hasLower = confirm("Would you like lowercase letters in your password?")
    var hasUpper = confirm("Would you like uppercase letters in your password?")
    var hasSpecial = confirm("Would you like special charcaters in your password?")
    var hasNumbers = confirm("Would you like numbers in your password?")
  
    if (!hasLower && !hasUpper && !hasNumbers && !hasSpecial) {
      alert("One option must be selected");
      userInput()
    }

  var randomized = [];
  var results = [];
  var possible = [];
  // based on user choices create a pool of req characters

  if (hasLower === true){
    possible.push(...alphabetLower);  
  }
  if (hasUpper === true){
    possible.push(...alphabetUpper);  
  }
  if (hasSpecial === true){
    possible.push(...specialCharacters);  
  }
  if (hasNumbers === true){
    possible.push(...numbers);  
  }

  for (let i = 0; i < possible.length; i++) {
   randomized.push(possible[Math.floor(Math.random() * possible.length)])
  }

for (let i = 0; i < passLength; i++) {
  results.push(randomized[Math.floor(Math.random() * randomized.length)])
  
}

return results.join('');
// Convert results into a string

}







// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
