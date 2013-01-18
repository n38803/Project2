// Shaun M Thompson
// SDI 1301
// 1/17/2013
// Assignment 2

// variables
var repairs = 5 // Number
var empNames = ["Shaun", "Jon", "Eric", "mMatt"]; // Array
var failure = "I Quit!"; // String

// functions

var division = function(firstNumber, secondNumber) {
	if (secondNumber = 0) {
			return "There are no phones left to repair!";
		} else {
				var outcome = firstNumber / secondNumber;
				return outcome;
		};
};



// main code
var divOutcome = division(10, 5);
console.log("Our outcome: " + divOutcome);
console.log("Our second outcome is: " + division(100,20));





















// variables
var repairs = 5 // Number
var empNames = ["Shaun", "Jon", "Eric", "Matt"]; // Array
var failure = "I Quit!"; // String



// procedure (function without return)
var delegation = function(repairs, employees) {
	if (repairs > 0) {
		console.log("By golly, we have some work to do!");
	} else {
		console.log("I guess there is no work for today, you're all fired!")
	};
	var outcome = repairs / employees;
	console.log("Each employee must complete " + outcome + " repairs.");
};
division(10, 5);
// boolean function (true or false w/return)
// number function
// string function
// array function
// returned values
// output

//maincode
delegation(120, empNames.length);


