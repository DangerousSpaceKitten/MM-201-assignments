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
  if (age < 13) {
    return "Child";
  } else if (13 <= age >= 19) {
    return "Teenager";
  } else {
    return "Adult";
  }
}
