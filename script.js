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
    confirmLowerCase = window.prompt ('Would you like to include lowercase characters?\nYes or No');
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

   // Function to ask for special characters
   function verifySpecialChar (){
    confirmSpecialChar = window.prompt ('Would you like to include special characters?\nYes or No');
      confirmSpecialChar = confirmSpecialChar.toUpperCase();

  if (confirmSpecialChar === "yes, y"){
    confirmSpecialChar = true;
    return confirmSpecialChar;
  }

  else if (confirmSpecialChar === "no, n"){
    confirmSpecialChar = false;
    return confirmSpecialChar;
  }

  else {
    alert ('Please answer Yes or No');
    verifySpecialChar();
  }
    return confirmSpecialChar;
  }

  // Function to ask for numbers characters
  function verifyNumbersChar (){
    confirmNumbersChar = window.prompt ('Would you like to include number characters?\nYes or No');
      confirmNumbersChar = confirmNumbersChar.toUpperCase();

  if (confirmNumbersChar === "yes, y"){
    confirmNumbersChar = true;
    return confirmNumbersChar;
  }

  else if (confirmNumbersChar === "no, n"){
    confirmNumbersChar = false;
    return confirmNumbersChar;
  }

  else {
    alert ('Please answer Yes or No');
    verifyNumbersChar();
  }
    return confirmNumbersChar;
  }
  
   