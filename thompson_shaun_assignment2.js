// Shaun M Thompson
// SDI 1301
// 1/17/2013
// Assignment 2


// variables
var totalRepairs = 10 
var empNames = ["Shaun", "Jon", "Eric", "Matt"];
var failure = "I Quit!"; 



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
var canFixPhones = function (minutesPerRepair, hoursPerDay) {
	var workLoad = (hoursPerDay * 60) / minutesPerRepair;
	if (workLoad > totalRepairs) {
		return booReturn === true;
	} else {
		return booReturn === false;
	};
};

// number function 		
var allocation = function(totalCustomers) {
	while (totalCustomers > 0) { 										// condition block
		console.log("Besides repairs, there are " + totalCustomers + " customers in the store.");	// code block
		totalCustomers--;
	}
	return;
};		


// array function
var adjectives = [
	"sleeps on the job",
	"doesn't even know where he is",
	"calls out all the time.",
	"is genuinely crazy."
	];
var termination = function() {
	console.log("I'm firing everyone!");
	for (var i=0, j=empNames.length; i < j; i++) {
		console.log(empNames[i] + " " + adjectives[i] + " ...");
	}; 
	return console.log("... I just can't take it anymore!");
};

//maincode
delegation(totalRepairs, empNames.length);

var booReturn = canFixPhones(30,8);
	console.log("The thing is, it would be " + booReturn + " to say we can finish these in time.");
	
allocation(6);

termination();




	

