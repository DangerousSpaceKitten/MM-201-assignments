//Task 1
let homeCity = "Berlin";
let userAge = 23;
let userIsLoggedIn = true;

//Task 2
let bookTitle = "American Goods";
let authorName = "Neil Gaiman";
let ISBN = 0-380-97365-0;
let isAvailable = true;

//Task 3
let productName = "Donkey Kong Bananza";
let priceInUsd = 75;
let amountInCart = 1;
let hasFreeShipping = false;

//Task 4
let age = 20;

if (age >= 18) {
  console.log("You are an adult.");
}else{
  console.log("You are not an adult.");
}

//Task 5
let score = 75;

if (score >= 90) {
  console.log("Grade: A");
}else if (score >= 75){
  console.log("Grade: B");
}else{
  console.log("Grade: C");
}

//Task 6
let isLoggedIn = false;

if (isLoggedIn == true) {
  console.log("Welcome back!");
}else{
  console.log("Please log in.");
}

//Task 7 & Task 8
const name = "Urs";

function greet(name){
    console.log("Hello " + name);
}

greet(name);

//Task 9
const ageToBeChecked = 13;

function checkAge(age){
    if(age >= 18){
        console.log("you are an adult");
    }else if(age < 18){
        console.log("you are a minor");
    }else{
        console.log("invalid input");
    }
}

checkAge(ageToBeChecked)

//Task 10
function isEven(num) {
  if (num % 2 == 0) {
    console.log("The number is even.");
  }else{
    console.log("The number is odd.");
  }
}
