//04. Declare three variables, one using let, one using var, and one using const, all inside a block scope. Assign them values and log their values to the console before and after they are declared to demonstrate variable hoisting.


//Solution........

console.log(a);
//console.log(b); // Cannot access 'b' before initialization
//console.log(c);// Cannot access 'c' before initialization

var a = "PW";
let b = "Skills";
const c = "@";
console.log(a);
console.log(b);
console.log(c);