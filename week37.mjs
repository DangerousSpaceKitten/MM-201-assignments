//Task 1
//These variables work, but the names are crap:

let a = "Oslo";
let b = 1995;
let c = false;
//Rename to clearly represent:

//where someone is from,
//when someone was born
//if a house is on fire.
//Task 2
//Fix logic and style (no double negatives, strict equality where appropriate):

let hasTicket = "true";
let door = 2;

if (!hasTicket === true && door === 2) {
  console.log("Welcome in");
} else {
  console.log("No entry.");
}
//Expected: Only log “Welcome in” when hasTicket is true (boolean) and door equals 2 (number).

//Task 3
//Rename and refactor:

let price = 129;
let qty = "3";
let total = price * qty;
//Make the currency explicit
//Ensure total is a number.
//Print a user-friendly line with the formatted total (e.g., NOK 387).
//Task 4
//The function should return the area of a rectangle:

function area(w, h) {
  return w * h;
}
console.log(area(5, 4));
//Fix syntax and ensure it returns the number.

//Task 5
//This is not great:

let data = {
  n: "Ada Lovelace",
  y: 1843,
  work: "Notes on the Analytical Engine",
};
console.log(data["title"]);
//Rename keys to meaningful names.
//Task 6
//Make a function that greets a person. If no name is provided, use "friend":

function greet(name) {
  console.log("Hello " + name);
}

greet();
greet("Ingrid");
//Task 7
//Create a function that tells a person based on their age if they can vote and if so in what election.
//Task 8
//Create a function that outputs "posetiv" for a number larger than 0, "negative" for a number less than 0, and finally "Zero" if the value is actually 0.
//Task 9
//Create a login function. i.e. a function that takes a username and password and returns true if the credentials are correct.
