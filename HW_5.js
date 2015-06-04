//1. VARIABLES

var x = 10
var y = 5
var z = x + y;



//2. DEBUGGINS 

// A) Alerts
alert("What do you need, bro?")

// B) Comments

//One line comments look like this

/* Two line comments 
look like this */

// C) The Console

// Can be used in browsers
// Content does not display on the page



//3. DATA TYPES

// A) String - "Hello World"

// B) Number - 1, 1.1, 1000

// C) Boolean - true, false

// D) Undefined (no value)



//4. ARRAYS

// Holds a collection of data

// Examples:
["Apple", "Orange", "Banana", "Grape"];
[10, 20, 30, 40, 50];
[5, 10, 15, 20, "red", "black", "green", "yellow"];
//Arrays can also be stored in variables
var weekdays = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];

//Indexes
// First item in an array is "0", second is "1"
["dog", "cat"]
//"dog" is 0, "cat" is 1

// Multi-dimensional array
// Example:
var westcoast = ["California", "Oregon"];
var eastcoast = ["New York", "Massachusetts"];
var states = [westcoast, eastcoast]

//To Access items in the multi-dimensional array
//Example
//First, declare the array:
var states = ["California", "Oregon"], ["New York", "Massachusetts"]
//Then, declare first array, then first item
console.log(states[0][0]);
Will be "California"
//Example
console.log(states[1][0]);
Will be "New York"



//5. TESTING

// A) Boolean
// To test True or False
// Use three equal signs ===
"stringone" === "stringtwo" ---> True or False

// Can test if one number is greater than another
5 > 10;
False

// Can test using <, >, <=, >=



//6. LOGIC

// "If" Statement

// Allows code to run only if a certain test evaluates to be true

if(1>200){
	console.log("This will not display because it is not true");
}

if(1<200{
	console.log("This will display because it is true");
}

// C) "Else" Statement

// "Else" Statement runs when "If" Statement is False
if(1>200){
	console.log("This will not display because 1 is not greater than 200");
} else{
	console.log("This will be display because it is false")
}

// "Else-If" Statement
if(1>200){
	console.log("This will not display because 1 is not greater than 200");
} else if (1===1){
	console.log("Yes, 1 is equal to 1, so this will display in the console")
} else {
	console.log("This will not display because else-if is true");
}

//7. FUNCTIONS

// A function is a way to encapsulate code for later
// It can take arguments, which are sued as variables inside the function
// Usually returns a value, which can be used later on or displayed immediately

//Examples
function openDoor(door) {
	if (door === 1) {
		return "Walk this way, sir";
	} else if (door === 2) {
		return "On second thought, wait here";
	} else {
		return "Go back home"
	}



