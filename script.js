// Uppercase, Lowercase, numbers and Special icon variables 

var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var special = '!@#$%^&*';
var numbers = '1234567890';

var password = '';

// Function to create random #password input


function writePassword() {
  

  // Function to ask for password length 
  var passwordLength = window.prompt ('Please enter length of password, (must be between 8 and 128 characters)');
  if (passwordLength < 8 || passwordLength > 128);{
    alert ('Incorrect character length!\nA number between 8 and 128 must be entered.\nPlease start from the beginning');
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

   // Function to ask for special characters
   if (window.prompt ('Would you like to include special characters?') === true)
   specialFunction == true
   if (specialFunction === false){
     alert ('Please select at least one character')
   }


 // Function to ask for number characters
    if (window.prompt ('Would you like to include number characters?') === true)
        numbersFunction == true
        if (numbersFunction === false){
          alert ('Please select at least one character')
        }
  

  
