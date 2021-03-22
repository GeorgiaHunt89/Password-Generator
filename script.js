// Uppercase, Lowercase, numbers and Special icon variables 

var lowerCase = 'abcdefghijklmnopqrstuvwxyz'.split('');
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
var special = '!@#$%^&*';
var numbers = '1234567890';
var passwordLength;
var confirmLowerCase;
var confirmUpperCase;
var confirmNumbersChar;
var confirmSpecialChar;
var password = "";
var userChoices = [];


// Function to ask for password length 
function verifyLength() {
  passwordLength = parseInt(window.prompt('Please enter length of password, (must be between 8 and 128 characters.)'));
  if (passwordLength < 8 || passwordLength > 128){
    alert ('Incorrect character length!\nA number between 8 and 128 must be entered.\nPlease start from the beginning.');
    verifyLength();
  } 
}
      

// Function to ask for lowercase characters
function verifyLowerCase() {
  confirmLowerCase = window.confirm ('Would you like to include lowercase characters?\nYes or No');
}

// Function to ask for uppercase characters
function verifyUpperCase(){
  confirmUpperCase = window.confirm ('Would you like to include uppercase characters?\nYes or No');
}

// Function to ask for special characters
function verifySpecialChar (){
  confirmSpecialChar = window.confirm ('Would you like to include special characters?\nYes or No');
}

// Function to ask for numbers characters
function verifyNumbersChar (){
  confirmNumbersChar = window.confirm ('Would you like to include number characters?\nYes or No');
}

  // Function to collate all previous results and generate a random password
function allChars(){
  verifyLength();
  console.log(passwordLength);
  verifyLowerCase();
  console.log(confirmLowerCase);
  verifyUpperCase();
  console.log(confirmUpperCase);
  verifySpecialChar();
  console.log(confirmSpecialChar);
  verifyNumbersChar();
  console.log(confirmNumbersChar);
}

// For loop function used to generate password
function writePassword(){
  let password = '';
    for(var i = 0; i < passwordLength; i++){
    password += userChoices[Math.floor(Math.random() * userChoices.length)]; 
}
console.log(password)
return password;
}

// Function to list allChars and writePassword
function generatePassword() {
  allChars()
  if (confirmLowerCase) {
    userChoices = userChoices.concat(lowerCase)
  }

  if (confirmUpperCase) {
    userChoices = userChoices.concat(upperCase)
  }

  if (confirmSpecialChar) {
    userChoices = userChoices.concat(special)
  }

  if (confirmNumbersChar) {
    userChoices = userChoices.concat(numbers)
  }

  if (passwordLength) {
    userChoices = userChoices.concat(passwordLength)
  }

  return writePassword()
}

// Function to connect create Password to querySelector
function createPassword () {
  var newpassword = "";
  newpassword = generatePassword();
  var passwordtext = document.querySelector ('#password');
  passwordtext.value = newpassword;

}

 // Event Listener button
var generateBtn = document.querySelector('#generate');
generateBtn.addEventListener("click", createPassword);