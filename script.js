// Assignment Code
//var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;
// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

// Pseudo-Code
// 1. Set up length of password- create array that length is assigned to(uppercase,lower, special char.)
// 2.  lowercase letters(ascii) 97-122
// 3. uppercase letters 65-90
// 4. numbers 48-57
// 5. Special char. -array
// code String.fromCharCode(#)

var characters;
var upperCase;
var number;
var specialCharacter;
var minLowercase = 97;
var maxLowercase = 122;
var minUppercase = 65;
var maxUppercase = 90;
var specialCharactersArray = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "/",
];

// function to get random number
function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
// function to shuffle array
function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// on click handler for generate button
document.getElementById("generate").addEventListener("click", function (event) {
  event.preventDefault();
  characters = document.getElementById("length").value;
  number = document.getElementById("number").checked;
  specialCharacter = document.getElementById("specialCharacter").checked;
  upperCase = document.getElementById("upperCase").checked;
  var newPassword = [];

  characters = characters - number - specialCharacter - upperCase;
  // Adding lowercase letters to password
  for (var i = 0; i < characters; i++) {
    var newCharacter = randomIntFromInterval(minLowercase, maxLowercase);

    newPassword.push(String.fromCharCode(newCharacter));
  }
  console.log(number);
  console.log(newPassword);
  console.log(specialCharacter);
  console.log(upperCase);
  // Add number to password if selected
  if (number === true) {
    var randomNumber = randomIntFromInterval(0, 9);
    console.log(randomNumber);
    newPassword.push(randomNumber);
    console.log(newPassword);
  }
  //Add special character if selected
  if (specialCharacter === true) {
    var randomNumberForSpecial = randomIntFromInterval(
      0,
      specialCharactersArray.length - 1
    );

    newPassword.push(specialCharactersArray[randomNumberForSpecial]);
    console.log(newPassword);
  }
  // Add uppercase if selected
  if (upperCase === true) {
    var upperCaseRandom = randomIntFromInterval(minUppercase, maxUppercase);

    newPassword.push(String.fromCharCode(upperCaseRandom));
    console.log(newPassword);
  }
  var randomizedString = shuffle(newPassword).join("");
  console.log(randomizedString);

  document.getElementById("password").value = randomizedString;
});
