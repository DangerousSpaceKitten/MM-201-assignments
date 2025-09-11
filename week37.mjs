//Task 1

let yourCity = "Oslo";
let birthYear = 1995;
let isHouseOnFire = false;

//Task 2

let hasTicket = true;
let door = 2;

if (hasTicket === true && door === 2) {
  console.log("Welcome in");
} else {
  console.log("No entry.");
}

//Task 3

let priceInNOK = 129;
let qty = 3;
let total = priceInNOK * qty;
console.log("The total is NOK " + total);

//Task 4

function area(w, h) {
  return w * h;
}
console.log(area(5, 4));

//Task 5

let data = {
  author: "Ada Lovelace",
  publishYear: 1843,
  title: "Notes on the Analytical Engine",
};
console.log(data["title"]);

//Task 6

function greet(name) {
  if (name === undefined) {
    console.log("Hello friend");
  } else {
    console.log("Hello " + name);
  }
}

greet();
greet("Ingrid");
//Task 7

let age = 17;

function checkVotingAge(age) {
  if (age >= 18) {
    console.log("you can vote in the parliamentary election");
  } else {
    console.log("You are not allowed to vote");
  }
}
checkVotingAge(age);

//Task 8

let number = 0;

function checkNumber(number) {
  if (number > 0) {
    console.log("positive");
  } else if (number < 0) {
    console.log("negative");
  } else if (number === 0) {
    console.log("Zero");
  }
}

checkNumber(number);

//Task 9

let inputUsername = "admin";
let inputPassword = 12345678;
let correctUsername = "admin";
let correctPassword = 12345678;

function login(username, password) {
  if (username === correctUsername && password === correctPassword) {
    return true;
  } else {
    return false;
  }
}

console.log(login(inputUsername, inputPassword));
