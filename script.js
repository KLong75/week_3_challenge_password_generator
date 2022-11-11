// store in variables an array for each character type
const lowercaseLetters = 
  ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

const upppercaseLetters = lowercaseLetters.map(letter => {
  return letter.toUpperCase();
});

const numbers = 
  ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const specialCharacters = 
  ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+", "_", "=", "[", "]", "{", "}", ";", ":", "'", ",", "<", ">", "/", "?"]


// function to get user input for password length and which character types to include in password
function getUserInput() {

  let length = parseInt(prompt("How long do you want your password to be? Please enter a number between 8 and 128."));
    // series of conditional statements to accomodate user errors with entering password parameters
    if (length < 8) {
      alert('The number you entered was too small. Your password must be at least 8 characters long. Please enter a number from 8 to 128.');
      return;
    }
    if (length > 128) {
      alert('The number you entered was too large. Your password must be less than 128 characters long. Please enter a number from 8 to 128.');
      return;
    }
    if (isNaN(length)) {
      alert('You did not enter a number. Please enter a number from 8 to 128.');
      return;
    }
  // Get user input for what types of characters they want to include in their password
  let includeLowercase = confirm("Click 'OK' to include lowercase letters in your password.");
  let includeUppercase = confirm("Click 'OK' to include uppercase letters in your password.");
  let includeNumbers = confirm("Click 'OK' to include numbers in your password.");
  let includeSpecialCharacters = confirm("Click 'OK' to include special characters in your password.")
// if statement in case user confirms no character types
  if (includeLowercase === false &&
      includeUppercase === false &&
      includeNumbers === false &&
      includeSpecialCharacters === false) {
        alert('You must include at least on character type in your password.');
        return;
      }  
  // store user input in an object
  let userInput = {
    length: length,
    includeLowercase: includeLowercase,
    includeUppercase: includeUppercase,
    includeNumbers: includeNumbers,
    includeSpecialCharacters: includeSpecialCharacters
  };
  console.log(userInput);
  return userInput;
}

function selectRandom(array) {
  let randomIndex = Math.floor(Math.random() * array.length); 
  let randomElement = array[randomIndex];
  return randomElement;
}
 
// var bugs = ['fly', 'gnat', 'bee']
// randomBug = selectRandom(bugs);
// console.log(randomBug);


function generatePassword() {

  let input = getUserInput();

  let possibleCharacters = [];

  let randomlyGeneratedPassword = ''

  if (input.includeLowercase) {
    possibleCharacters = possibleCharacters.concat(lowercaseLetters);
  }
  if (input.includeUppercase) {
    possibleCharacters = possibleCharacters.concat(upppercaseLetters);
  }
  if (input.includeNumbers) {
    possibleCharacters = possibleCharacters.concat(numbers);
  }
  if (input.includeSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
  }
  console.log(possibleCharacters);

  for (let i = 0; i < input.length; i++) {
    const randomCharacter = selectRandom(possibleCharacters)
    randomlyGeneratedPassword = randomlyGeneratedPassword + randomCharacter;
  }

  return randomlyGeneratedPassword;

}


var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  console.log(password)
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// call getUserInput to start the program
// getUserInput();