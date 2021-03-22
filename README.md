# Password-Generator

## Description
This application helps to eliminate weak passwords by generating random passwords based on specific input criteria. The user selects the following requirements: <br>

1. Password length must be between 8 and 128 characters <br>
2. The user has the choice to include lowercase characters <br>
3. The user has the choice to include upperercase characters <br>
4. The user has the choice to include special characters <br>
5. The user has the choice to include number characters <br>

## GitHub link
https://georgiahunt89.github.io/Password-Generator/Index.html

## Repo contents
1. This README file
2. Javascript code
3. HTML code
4. Assets folder containing:
- CSS code
- Images

## What I learnt
While creating this application I learnt the fundamental aspects of JavaScript. As displayed in my commits, I began by:
- defining the variables for the user input.
- then created the passwordlength min and max input and alert.
- then created the function for lowercase characters, uppercase characters, special characters and number characters.
- it was during this point that I over complicated the function and created an infinite loop in each input by creating a window prompt rather than a window confirm which required users to input yes for true then returning the function before adding the else if no.
- I then implemented consol logs for each function.
- added the eventslistener.
- added the missing function createPassword to connect allChars and return writePassword.
-  discovered the infinate loops and realised the unnecessary coding, changed all input catagories from window prompt to window confirm which resulted in the removal of all else if statements.

During the creation I learnt value and how to correctly implement variables, arrays, functions, for loops, eventlisteners, and the best practices for naming variables and functions.


## Screenshots of user prompts

![Generate-Password-Starting-Screen](https://github.com/GeorgiaHunt89/Georgia-Hunt-Portfolio/blob/main/assets/Images/Generate-Password-Starting-screen.png)

![Password-length-prompt](https://github.com/GeorgiaHunt89/Georgia-Hunt-Portfolio/blob/main/assets/Images/Password-length-prompt.png)

![Lowercase-characters-prompt](https://github.com/GeorgiaHunt89/Georgia-Hunt-Portfolio/blob/main/assets/Images/Lowercase-characters-prompt.png)

![Number-Character-Prompt](https://github.com/GeorgiaHunt89/Georgia-Hunt-Portfolio/blob/main/assets/Images/Number-Character-Prompt.png)

![Special-Characters-prompt](https://github.com/GeorgiaHunt89/Georgia-Hunt-Portfolio/blob/main/assets/Images/Special-Characters-prompt.png)

![Uppercase-characters-prompt](https://github.com/GeorgiaHunt89/Georgia-Hunt-Portfolio/blob/main/assets/Images/Uppercase-characters-prompt.png)

![User-Password-Generated](https://github.com/GeorgiaHunt89/Georgia-Hunt-Portfolio/blob/main/assets/Images/User-Password-Generated.png)
