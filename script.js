// All of our password options are stored up here, as well as, two empty variables we'll reference/fill down the line
var passwordLength;
var password = "";
// The password variable is empty until line 59
var number = "1234567890";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialCharacters = "!#$%&()*+,-./:;<=>?@][\^_{|}~";
var passwordChoices = "";
// PasswordChoices will hold each of the above strings that the user includes as options for their password

function generatePassword() {

  while (true) {
    passwordLength = prompt("How long would you like your password to be? (8-128 characters available)");
    if (passwordLength === null) {
      return;
    } else if (passwordLength < 8 || passwordLength > 128) {
      alert("The value entered is outside the scope of 8 to 128 characters. Please try again.");
    } else {
      alert("Your password will be " + passwordLength + " characters long.");
// User input determines the value for our var passwordLength here, this alert also confirms (for the user) that their desired password length has been accepted
      console.log(passwordLength);
      break;
    };
  }

  alert("Next, please select which character types you would like present in your password.");

  var selection1 = confirm("Would you like to include numbers in your password?");
  if (selection1) {
    passwordChoices = (passwordChoices + number);
// Ran into an issue where only the var number was displaying after making all password choices, so I started logging passwordChoices after each selection to see if the issue was within that variable or the var password 
    console.log(passwordChoices);
  } 

  var selection2 = confirm("Would you like to include lowercase letters in your password?");
  if (selection2) {
    passwordChoices = (passwordChoices + lowerCase);
    console.log(passwordChoices);
  }

  var selection3 = confirm("Would you like to include uppercase letters in your password?");
  if (selection3) {
    passwordChoices = (passwordChoices + upperCase);
    console.log(passwordChoices);
  }

  var selection4 = confirm("Would you like to include special characters in your password?");
  if (selection4) {
    passwordChoices = (passwordChoices + specialCharacters);
    console.log(passwordChoices);
  }

  for (var i = 0; i < passwordLength; i++) {
    var passwordResult = passwordChoices[Math.floor(Math.random() * passwordChoices.length)];
    console.log(passwordResult);
     
    password += passwordResult
// Concatenates the passwordResult variable (containing our randomly selected characters) with the empty password variable on line 3 
  }

  console.log(password);
  return password;

};


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  

  
} 

// Without this function I noticed making more than one password would generate concatenated results and the the user's passwordLength choice was getting overwritten
function restoreValues() { 
  password = "";
  console.log(password);
  passwordChoices = "";
  console.log(passwordChoices);
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
