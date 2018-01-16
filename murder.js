/*
 * Programming Quiz: Murder Mystery (3-4)
 */

// change the value of `room` and `suspect` to test your code
var room = "ballroom";
var suspect = "Mr. Kalehoff";

var weapon = "";
var solved = false;

if (room === "dining room") {
    if(suspect === "Mr. Parkes"){
    weapon = "knife";
    solved = true;
  }
} else if (room === "gallery") {
    if(suspect === "Ms. Van Cleve") {
    weapon = "trophy";
    solved = true;
  }
} else if (room === "billards room") {
    if(suspect === "Mrs. Sparr") {
    weapon = "pool stick";
    solved = true;
  }
} else {
    weapon = "posion";
    solved = true;
}

if (solved) {
	console.log(suspect + " did it in the " + room + " with the " + weapon + "!");
}
