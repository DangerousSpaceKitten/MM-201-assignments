//Task 1

let weatherForecastTomorrow = "Sunny";
// Good name because it's descriptive and tells us what the weather is for and when.

let studentGPA = 3.8;
// Good name because it clearly shows this is the GPA for a student.

let workplace = "TechCorp Inc.";
// Good name because it directly represents the concept of where someone works.

let eventProbability = 0.75;
// Good name because "probability" is the precise technical word for likelihood.

let textbookCostInNOK = 120.5;
// Good name because it indicates the object, what is being measured and the currency.

//Task 2

let example1 = 42;
let example2 = 21;

let temp = example1;
example1 = example2;
example2 = temp;

console.log(example1);
console.log(example2);

//Task 3

let temperature = Math.random() * 30;
if (temperature > 20) {
  console.log("It's warm outside.");
} else {
  console.log("It's cold outside");
}

//Task 4

function gradeMessage(score) {
  if (score >= 50) {
    console.log("Pass");
  } else {
    console.log("Fail");
  }
}

gradeMessage(60);
gradeMessage(50);
gradeMessage(42);

//Task 5

//Take the mod2 of a value and if it returns 0 the number is even and if it returns 1 the number is odd.

function isEven(number) {
  if (number % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isEven(2));
console.log(isEven(3));

//Task 6

function ageCategory(age) {
  let category = "";
  if (age < 13) {
    category = "Child";
  } else if (13 <= age && age <= 19) {
    category = "Teenager";
  } else {
    category = "Adult";
  }
  return category;
}

//Task 7

function greet(name, isMorning) {
  let greeting = "";
  if (isMorning) {
    greeting = "Good Morning, " + name + "!";
  } else {
    greeting = "Hello " + name + "!";
  }
  return greeting;
}

//Task 8

function calculate(x, y, operation) {
  let result = "";
  if (operation == "add") {
    result = x + y;
  } else if (operation == "subtract") {
    result = x - y;
  } else if (operation == "multiply") {
    result = x * y;
  } else if (operation == "divide") {
    result = x / y;
  } else {
    result = "Unknown operation";
  }
  return result;
}

//Task 9

function ticketPrice(age) {
  let price = "";

  if (age < 3) {
    price = 0;
  } else if (3 <= age && age <= 12) {
    price = 50;
  } else if (13 <= age && age <= 64) {
    price = 80;
  } else if (age >= 65) {
    price = 60;
  } else {
    price = "Invalid input";
  }
  return price;
}

//Task 10
function maxOfTwo(a, b) {
  let max = "";
  if (a > b) {
    max = a;
  } else if (a < b) {
    max = b;
  } else if (a == b) {
    max = "a and b are equal";
  } else {
    max = "invalid input";
  }
  return max;
}

//Task 11

function checkPassword(password) {
  let strength = "";
  if (password.length < 6) {
    strength = "Too short";
  } else {
    strength = "Strong enough";
  }
  return strength;
}

//Task 12

function isLeapYear(year) {
  let leapYear = false;
  if (year % 4 == 0 && year % 100 != 0) {
    leapYear = true;
  } else if (year % 400 == 0) {
    leapYear = true;
  }
  return leapYear;
}

//Task 13

function sameWord(wordA, wordB) {
  let isEqual = false;
  if (wordA === wordB) {
    isEqual = true;
  }
  return isEqual;
}

//Task 14

function isWeekend(day) {
  let isWeekday = true;
  if (day == "Saturday" || day == "Sunday") {
    isWeekday = false;
  }
  return !isWeekday;
}

//Task 15

function evaluateTriangleType(a, b, c) {
  let triangleType = "";
  if (a == b && b == c) {
    triangleType = "Equilateral";
  } else if (a == b || a == c || b == c) {
    triangleType = "Isosceles";
  } else if (a != b && a != c && b != c) {
    triangleType = "Scalene";
  } else {
    triangleType = "Error";
  }
  return triangleType;
}
