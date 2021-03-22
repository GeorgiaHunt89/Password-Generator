// Uppercase, Lowercase, numbers and Special icon variables 

var generateBtn = document.querySelector('#generate')
var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var special = '!@#$%^&*';
var numbers = '1234567890';
var passwordLength;
var confirmLowerCase;
var confirmUpperCase;
var confirmNumbersChar;
var confirmSpecialChar;
var password = "";
var userChoices = {};


// Function to generate random #password input
  

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

  // Function to ask for uppercase characters
  function verifyUpperCase (){
    confirmUpperCase = window.prompt ('Would you like to include uppercase characters?\nYes or No');
      
  if (confirmUpperCase === "yes, y"){
    confirmUpperCase = true;
    return confirmUpperCase;
  }

  else if (confirmUpperCase === "no, n"){
    confirmUpperCase = false;
    return confirmUpperCase;
  }

  else {
    alert ('Please answer Yes or No');
    verifyUpperCase();
  }
    return confirmUpperCase;
  }

   // Function to ask for special characters
   function verifySpecialChar (){
    confirmSpecialChar = window.prompt ('Would you like to include special characters?\nYes or No');
      
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

  // Function to collate all previous results and generate a random password
var userChoices {
  verifyLength ();
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
function writePassword (){
  let password = '';
  for(var i = 0; i < passwordLength; i++){
  password += userChoices.charAt(Math.floor(Math.random() * userChoices.length)); 
}
return password;
}

// Function to connect create Password to querySelector

function createPassword (){
  var firstpassword = "";
  firstpassword = characters ();
  var passwordtext = documnet.querySelector ('#password');
  passwordtext.value = firstpassword;


  // Event Listener button
  generateBtn.addEventListener("Click", createPassword);


}