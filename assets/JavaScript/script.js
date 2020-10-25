var characters;
var passwordLength;
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//Ask for password specifications
function passwordSpecifications() {
  if (window.confirm("Do you want numbers in your password?")) {
    characters += "0123456789";
  }
  if (window.confirm("Do you want capital letters? in yout password?")) {
    characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  if (window.confirm("Do you want lower case letters in your password?")) {
    characters += "abcdefghijklmnopqrstuvwxyz";
  }
  if (window.confirm("Do you want special characters in your password?")) {
    characters += "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  }
  if (!characters) {
    window.alert(
      "Please make sure you accept at least ONE password specification."
    );
  }
}

//Generate password
function generatePassword() {
  var getPassword = "";
  do {
    passwordLength = window.prompt(
      "How long would you like your password?  (At least 8 and no greater than 128)"
    );
  } while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128);
  //Call password
  do {
    passwordSpecifications();
  } while (!characters);
  for (i = 0; i < passwordLength; i++) {
    getPassword += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  // console.log(getPassword);
  return getPassword;
}

// Write password to the #password input
function writePassword() {
  characters = "";
  passwordLength = 0;
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
