// Uppercase, Lowercase, numbers and Special icon variables 

var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var special = '!@#$%^&*';
var numbers = '1234567890';

var password = [''];

// Uppercase, Lowercase, numbers and Special icon Function Booleans

var lowerCaseFunction = 'false'
var upperCaseFunction = 'false'
var specialFunction = 'false'
var numbersFunction = 'false'

// Function to create random #password input

function writePassword() {
  var passwordLength = '';

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
        if (lowerCaseFunction === false){
          alert ('Please select at least one character')
        }
  }
  
   // Function to ask for uppercase characters
    if (window.prompt ('Would you like to include uppercase characters?') === true)
        upperCaseFunction == true
        if (upperCaseFunction === false){
          alert ('Please select at least one character')
        }
  }




  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var generateBtn = document.querySelector("#generate");