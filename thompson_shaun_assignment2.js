// Shaun M Thompson
// SDI 1301
// 1/17/2013
// Assignment 2


// variables
var totalRepairs = 10 // Number
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
	console.log("Each employee must complete " + outcome + " repairs if we split the workload.");
};

// boolean function (true or false w/return)
var canFixPhones = function (totalRepairs) {
	var allocation = function (minutesPerRepair, hoursPerDay) {
		var workLoad = (hoursPerDay * 60) / minutesPerRepair;
		return (allocation === allocation);
	};
	if (allocation(30,8) < 0 ) {
		return true;
	} else {
		return false;
	};
};

// number function
// string function
// array function
// returned values
// output

//maincode
delegation(totalRepairs, empNames.length);
console.log("The thing is, it would be " + canFixPhones(totalRepairs) + " to say we can finish these in time.");
	

