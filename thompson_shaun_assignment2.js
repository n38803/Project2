// Shaun M Thompson
// SDI 1301
// 1/17/2013
// Assignment 2

/*

*/

var phoneNames = [ "iPhone", "Galaxy S III", "Optimus G", "Blackberry" ],
	minutesPerFix = [ 30, 45, 20, 35 ];
var fixOnePhone = function (phoneNumber) {
	var phoneName = phoneNames[phoneNumber],
		minutesThisFix = minutesPerFix[phoneNumber];
	console.log("Boy, I just can't wait to fix the " + phoneName + ".  Shaun only gave me " + minutesThisFix + " minutes.");
	for (var minutes = 0; minutes < minutesThisFix; minutes += 5) {
	var minutesRemain = minutesThisFix - minutes;
	console.log(minutes + " minutes down, " + minutesRemain + " more to go!");
	};
	console.log("Piece of cake, " + phoneName + " done!");
};
var fixAllPhones = function () {
	for (var phoneNumber = 0; phoneNumber < phoneNames.length; phoneNumber++) {
		fixOnePhone(phoneNumber);
	}; // for phoneNumber
};

fixAllPhones();

console.log("Yup Shaun, I'm awesome at this... BUT I STILL QUIT!");

// procedure (function without return)

// boolean function (true or false w/return)

// number function

// string function

// array function

// returned values

// output


