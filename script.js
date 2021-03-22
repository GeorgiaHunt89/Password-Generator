// Uppercase, Lowercase, numbers and Special icon variables 

var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var special = '!@#$%^&*';
var numbers = '1234567890';

var password = ['#password'];

// Function to create random #password input

function writePassword() {
  var passwordLength = '#password';

  // Function to ask for password length 
  Const (passwordLength >= 8 && passwordLength <=128);{
    passwordLength = window.prompt ('Please enter length of password, (must be between 8 and 128 characters)'); 
      if (passwordLength === undefined){
        alert ('Incorrect character length, please enter a number between 8 and 128');
      }
  }

  // Function to ask for lowercase characters
  if (passwordLength){
    if (window.prompt ('Would you like to include lowercase characters?') === true)
        lowerCaseFunction == true
  }
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var generateBtn = document.querySelector("#generate");