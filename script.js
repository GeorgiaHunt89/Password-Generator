// Define Uppercase, Lowercase, numbers and Special icon variables 

var lowercase = 'abcdefghijklmnopqrstuvwxyz';
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var special = '!@#$%^&*';
var numbers = '1234567890';

var password = ['#password'];



// Function to create random #password input

function writePassword() {
  var passwordlength = '#password';

  // Function to ask for password length 
  While (passwordlength >= 8 && passwordlength <=128){
    passwordlength = prompt ("Please enter length of password, (must be between 8 and 128 characters)") 
      if (passwordlength === undefined){
        passwordlength = prompt ("Incorrect character length, please enter a number between 8 and 128")
      }
  }
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

ar generateBtn = document.querySelector("#generate");