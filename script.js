// Uppercase, Lowercase, numbers and Special icon variables 

var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var special = '!@#$%^&*';
var numbers = '1234567890';

var password = '';

// Function to create random #password input

  

  // Function to ask for password length 
function verifyLength() {
  passwordLength = window.prompt ('Please enter length of password, (must be between 8 and 128 characters)');
  if (passwordLength < 8 || passwordLength > 128);{
    alert ('Incorrect character length!\nA number between 8 and 128 must be entered.\nPlease start from the beginning');
    verifyLength();
  } 
  return passwordLength;
}
      

  // Function to ask for lowercase characters
  function verifyLowerCase (){
    confirmLowerCase = window.prompt ('Would you like to include lowercase characters?');
      confirmLowerCase = confirmLowerCase.toUpperCase();

  if (confirmLowerCase === "yes, y"){
    confirmLowerCase = true;
    return confirmLowerCase;
  }

  else if (confirmLowerCase === "no, n"){
    confirmLowerCase = false;
    return confirmLowerCase;
  }

  else {
    alert ('Please answer Yes or No');
    verifyLowerCase();
  }
    return confirmLowerCase;
  }
  
   