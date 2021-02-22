//Assignment 3 Code//
// User input variables//
var generateBtn = document.querySelector("#generate");
var input;
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
var numbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
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

//Prompt User for length of password 8-128//
//Validate user input//
function passwordLength() {
	input = parseInt (prompt(
		"How many characters would you like in your password? Choose a number between 8 and 128."
	));
	if (isNaN(input) || input < 8 || input > 128) {
		// while (isNaN(length) || length < 8 || length > 128) length = Number
		//Validate user input//
	
		//prompt user to select a number betwee 8-128, if not valid entery call function again//
		alert("Sorry, need another input, OK?");
		passwordLength();
	}
	//prompt user to select a number betwee 8-128, if not valid entery call function again//
	//and store answer as numberLength//
	//console.log(input);
	return input;
}
//prompt user to select upper, lower, special, number for password//
function passwordOptions() {
	var options = [];
	//series of IF statements and return user if invalid, proceed after valid selections//
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

	// Reviewed from Manuel Ramirez (MR)
	if (lowerCase){
		options = options.concat(lowercaseLettersArray);
	}

	if (upperCase){
		options = options.concat(uppercaseLettersArray);
	}

	if (numbers){
		options = options.concat(numbersArray);
	}

	if (specialChar){
		options = options.concat(specialCharactersArray);
	// end from MR above
	}
	console.log (options);
	return options; 

}

//return randomly generated password//
function generatePassword() {
	var length = passwordLength();
	console.log(length);
	var selOpt = passwordOptions();
	console.log(selOpt);
	var password = [];
	// password  is length
	for (var i = 0; i < length; i++) {
		// select random char from arrays
		var pickOptions = selOpt[Math.floor(Math.random() * selOpt.length)];
		console.log(pickOptions);
		password.push(pickOptions);
	}
	//return pw without commas//
	console.log(password);
	return password.join("");
}

// Write password to the #password input//
function writePassword() {
	var password = generatePassword();
	var passwordText = document.querySelector("#password");
	passwordText.value = password;
}

// // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
