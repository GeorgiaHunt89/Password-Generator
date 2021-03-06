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
- Defined the variables for the user input.
- Created the passwordlength min and max input and alert.
- Created the function for lowercase characters, uppercase characters, special characters and number characters.
- During this point I over complicated the function and created an infinite loop in each input catagory by creating a window.prompt rather than a window.confirm which required users to input yes for true then return the function before adding the else if no then returning the function once again.
- Implemented consol logs for each function.
- Added the eventslistener.
- Added the missing function createPassword to connect allChars and return writePassword.
- Discovered the infinate loops and realised the unnecessary coding, changed all input catagories from window prompt to window confirm which resulted in the removal of all else if statements.

During the creation I learnt value, and how to correctly implement variables, arrays, functions, for loops, eventlisteners, and the best practices for naming variables and functions.

This application has given me a base level understanding of JavaScript which I hope to continue to expand upon.


## Screenshots of user prompts

![Generate-Password-Starting-Screen](https://github.com/GeorgiaHunt89/Password-Generator/blob/main/assets/Images/Generate-Password-Starting-screen.png)

![Password-length-prompt](https://github.com/GeorgiaHunt89/Password-Generator/blob/main/assets/Images/Password-length-prompt.png)

![Lowercase-characters-prompt](https://github.com/GeorgiaHunt89/Password-Generator/blob/main/assets/Images/Lowercase-characters-prompt.png)

![Number-Character-Prompt](https://github.com/GeorgiaHunt89/Password-Generator/blob/main/assets/Images/Number-Character-Prompts.png)

![Special-Characters-prompt](https://github.com/GeorgiaHunt89/Password-Generator/blob/main/assets/Images/Special-Characters-prompt.png)

![Uppercase-characters-prompt](https://github.com/GeorgiaHunt89/Password-Generator/blob/main/assets/Images/Uppercase-characters-prompt.png)

![User-Password-Generated](https://github.com/GeorgiaHunt89/Password-Generator/blob/main/assets/Images/User-Password-Generated.png)
