//Assignment 3 Code//
// User input variables//
var generateBtn = document.querySelector("#generate");
var length;
var upperCase;
var lowerCase;
var numbers;
var specialChar;
//Todo variables at the top//
//upper Case Array//
var uppercaseLettersArray = [
	"A",
	"B",
	"C",
	"D",
	"E",
	"F",
	"G",
	"H",
	"I",
	"J",
	"K",
	"L",
	"M",
	"N",
	"O",
	"P",
	"Q",
	"R",
	"S",
	"T",
	"U",
	"V",
	"W",
	"X",
	"Y",
	"Z",
];
//lower Case Array//
var lowercaseLettersArray = [
	"a",
	"b",
	"c",
	"d",
	"e",
	"f",
	"g",
	"h",
	"i",
	"j",
	"k",
	"l",
	"m",
	"n",
	"o",
	"p",
	"q",
	"r",
	"s",
	"t",
	"u",
	"v",
	"w",
	"x",
	"y",
	"z",
];
// Numbers Array//
var numbersArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
//Special Char Array//
var specialCharactersArray = [
	"!",
	"#",
	"$",
	"%",
	"&",
	"(",
	")",
	"*",
	"+",
	"-",
	".",
	"/",
	":",
	";",
	"<",
	"=",
	">",
	"?",
	"@",
];

//Propmt User for length of password 8-128//
function passwordLength() {
	length = prompt(
		"How many characters would you like in your password? Choose a number between 8 and 128."
	);
	if (length < 8 || length > 128) {
		//Validate user input//
		prompt("Number must be between 8 and 128.");
		passwordLength();
	}
	//prompt user to select a number betwee 8-128, if not valid entery call function again//
	//and store answer as numberLength//
	console.log(length);
	return length;
}
//prompt user to select upper, lower, special, number for password//
function passwordOptions() {
	//serial of IF statement and return user if invalid, proceed after valid selections//
	lowerCase = confirm(
		"Do you want the password to have LOWER case characters?"
	);
	console.log("Include LowerCase:", lowerCase);
	upperCase = confirm(
		"Do you want the password to have UPPER case characters?"
	);
	console.log("Include UpperCase:", upperCase);
	numbers = confirm("Do you want the password to have NUMBERS?");
	console.log("Include numbers", numbers);
	specialChar = confirm("Do you want the password to have SPECIAL characters?");
	console.log("Include Special Characters", specialChar);
	// All False//
	if (
		lowerCase === false &&
		upperCase === false &&
		numbers === false &&
		specialChar === false
	) {
		alert("Need to choose a critera to create password!");
		passwordOptions();

		// Determine what Arrays to include//
		// All True//
	} else if (
		lowerCase === true &&
		upperCase === true &&
		numbers === true &&
		specialChar === true
	) {
		var options = lowercaseLettersArray.concat(
			uppercaseLettersArray,
			numbersArray,
			specialCharactersArray
		);
		return options;

		// 3 True //
	} else if (
		lowerCase === false &&
		upperCase === true &&
		numbers === true &&
		specialChar === true
	) {
		var options = uppercaseLettersArray.concat(
			numbersArray,
			specialCharactersArray
		);
		return options;
	} else if (
		lowerCase === true &&
		upperCase === false &&
		numbers === true &&
		specialChar === true
	) {
		var options = lowercaseLettersArray.concat(
			numbersArray,
			specialCharactersArray
		);
		return options;
	} else if (
		lowerCase === true &&
		upperCase === true &&
		numbers === false &&
		specialChar === true
	) {
		var options = lowercaseLettersArray.concat(
			uppercaseLettersArray,
			specialCharactersArray
		);
		return options;
	} else if (
		lowerCase === true &&
		upperCase === true &&
		numbers === true &&
		specialChar === false
	) {
		var options = lowercaseLettersArray.concat(
			uppercaseLettersArray, numbers);
		return options;
		// 2 True//
	} else if (
		lowerCase === true &&
		upperCase === true &&
		numbers === false &&
		specialChar === false
	) {
		var options = lowercaseLettersArray.concat(
			uppercaseLettersArray);
		return options;
	} else if (
		lowerCase === true &&
		upperCase === false &&
		numbers === false &&
		specialChar === true
	) {
		var options = lowercaseLettersArray.concat(
			specialCharactersArray);
		return options;
	} else if (
		lowerCase === false &&
		upperCase === false &&
		numbers === true &&
		specialChar === true
	) {
		var options = numbersArray.concat(
			specialCharactersArray);
		return options;
	} else if (
		lowerCase === false &&
		upperCase === true &&
		numbers === true &&
		specialChar === false
	) {
		var options = uppercaseLettersArray.concat(
			numbersArray);
		return options;
	} else if (
		lowerCase === false &&
		upperCase === true &&
		numbers === false &&
		specialChar === true
	) {
		var options = uppercaseLettersArray.concat(
			specialCharactersArray);
		return options;
	} else if (
		lowerCase === true &&
		upperCase === false &&
		numbers === true &&
		specialChar === false
	) {
		var options = lowercaseLettersArray.concat(
			numbersArray);
		return options;
		// 	// 1 True//
	} else if (
		lowerCase === true &&
		upperCase === false &&
		numbers === false &&
		specialChar === false
	) {
		var options = lowercaseLettersArray;
		return options;
	} else if (
		lowerCase === false &&
		upperCase === true &&
		numbers === false &&
		specialChar === false
	) {
		var options = uppercaseLettersArray;
		return options;
	} else if (
		lowerCase === false &&
		upperCase === false &&
		numbers === true &&
		specialChar === false
	) {
		var options = numbersArray;
		return options;
	} else if (
		lowerCase === false &&
		upperCase === false &&
		numbers === false &&
		specialChar === true
	) {
		var options = specialCharactersArray;
		return options;

		//Use an object to help build password set of characters//
	}
	return options;
}

//return randomly generated password//
function generatePassword() {
	var length = passwordLength();
	console.log(length);
	var options = passwordOptions();
	console.log(options);
	var password = [];
	// password  is length
	for (var i = 0; i < length; i++) {
		var pickOptions = options[Math.floor(Math.random() * options.length)];
		password.push(pickOptions);
	}
	//return pw without commas//
	return password.join("");
}

// }
// // Write password to the #password input//
function writePassword() {
	var password = generatePassword();
	var passwordText = document.querySelector("#password");
	passwordText.value = password;
}
// // function calls
// // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
