"use strict";
// " program no. 3 of 45 from assignment "
// " Uppercase , Lowercase & Title case "
// " This exercise done by Naushad Hussain, Class time (Sudnay,9-12) "
// " assign a name is variable and First convert into Upper case"
let pname1 = "ahmed sami";
let ucname1 = pname1.toUpperCase();
console.log("Upper Case Name ..... " + ucname1);
// " assigned name convert into Lower case"
let lcname1 = ucname1.toLowerCase();
console.log("Lower Case Name ..... " + lcname1);
// " assigned name convert into Title case"
let pn1 = pname1.split(" "); // split variable data into array
//console.log(pn) // display splited result into array
let fname1 = pn1[0].toUpperCase();
let lname1 = pn1[1].toUpperCase();
let tcfname1 = fname1.charAt(0) + fname1.toLowerCase().slice(1);
let tclname1 = lname1.charAt(0) + lname1.toLowerCase().slice(1);
console.log("Title Case Name ..... " + tcfname1 + " " + tclname1);
