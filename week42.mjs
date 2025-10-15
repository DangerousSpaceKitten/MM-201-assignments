//Task 1
let listOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 4];

for (let i = 0; i < listOfNumbers.length; i++) {
  //console.log("#" + i + "=>" + listOfNumbers[i]);
}

//Task 2
function insertAt(arr, index, value) {
  let newArray = [];
  let isInserted = false;
  for (let i = 0; i < arr.length; i++) {
    if (i == index) {
      newArray.push(value);
      isInserted = true;
    }
    newArray.push(arr[i]);
  }
  if (!isInserted) {
    newArray.push(value);
  }
  return newArray;
}

//console.log(insertAt(listOfNumbers, 37, "👽"));

//Task 3
function sliceManual(arr, start, end) {
  let sliceValues = [];
  if (start < 0 || start > arr.length - 1) {
    return [];
  }
  if (end == undefined) {
    end = arr.length;
  }
  for (let i = start; i < end; i++) {
    sliceValues.push(arr[i]);
  }
  return sliceValues;
}

//console.log(sliceManual(listOfNumbers, 3, 7));

//Task 4
let listOfOtherNumbers = [42, 56, 67, 69];

function merge(a, b) {
  let mergedArray = [];
  for (let i = 0; i < a.length + b.length; i++) {
    if (i < a.length) {
      mergedArray.push(a[i]);
    } else {
      mergedArray.push(b[i - a.length]);
    }
  }
  return mergedArray;
}

//console.log(merge(listOfNumbers, listOfOtherNumbers));

//Task 5
let listOfLetters = ["a", "b", "a", "a", "b", "c", "d", "b", "a", "d", "c"];
function frequencyCount(items) {
  let output = {};
  for (let i = 0; i < items.length; i++) {
    if (Object.keys(output).includes(items[i].toString())) {
      output[items[i]] += 1;
    } else {
      output[items[i]] = 1;
    }
  }
  return output;
}

//console.log(frequencyCount(listOfLetters));

//Task 6
function firstIndexOf(arr, target) {
  let output = -1;
  for (let i = 0; i < arr.length; i++) {
    if (listOfNumbers[i] == target) {
      output = i;
      break;
    }
  }
  return output;
}

//console.log(firstIndexOf(listOfNumbers, 4));

//Task 7
function removeAll(arr, target) {
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != target) {
      output.push(arr[i]);
    }
  }
  return output;
}

//console.log(removeAll(listOfNumbers, 4));

//Task 8
function chunk(arr, size) {
  let listOfChunks = [];
  for (let i = 0; i < arr.length / size; i++) {
    let newChunk = [];
    for (let j = 0; j < size; j++) {
      newChunk.push(arr[i * size + j]);
    }
    for (let j = size - 1; j > 0; j--) {
      if (newChunk[j] === undefined) {
        newChunk.pop();
      }
    }
    listOfChunks.push(newChunk);
  }
  return listOfChunks;
}

//console.log(chunk(listOfNumbers, 3));

//Task 9
function reverseString(s) {
  let output = "";
  for (let i = s.length - 1; i >= 0; i--) {
    output += s[i];
  }
  return output;
}

//console.log(reverseString("hello"));

//Task 10
function isPalindrome(s) {
  if (s == reverseString(s)) {
    return true;
  } else {
    return false;
  }
}

//console.log(isPalindrome("hellolleh"));

//Task 11
function fib(n) {
  let output = [0, 1];
  for (let i = 0; i < n - 2; i++) {
    output.push(output[i] + output[i + 1]);
  }
  return output;
}

//console.log(fib(10));

//Task 12
function simulateDiceRolls(trials) {
  let diceRolls = [];
  for (let i = 0; i < trials; i++) {
    diceRolls.push(Math.round(Math.random() * 5 + 1));
  }
  console.log(diceRolls);
  let output = frequencyCount(diceRolls);
  return output;
}

//console.log(simulateDiceRolls(20));

//Task 13
function wordsFromText(text) {
  let amountOfLettersInWord = 0;
  let letterAmounts = [];
  let currentWord = "";
  let listOfWords = [];
  for (let i = 0; i < text.length; i++) {
    if (text[i] == " ") {
      letterAmounts.push(amountOfLettersInWord);
      listOfWords.push(currentWord);
      amountOfLettersInWord = 0;
      currentWord = "";
    } else {
      amountOfLettersInWord++;
      currentWord += text[i];
    }
  }
  let indexOfLongestWord = 0;
  let currentLongestWord = "";
  for (let i = 0; i < listOfWords.length; i++) {
    if (currentLongestWord.length < listOfWords[i].length) {
      currentLongestWord = listOfWords[i];
      indexOfLongestWord = i;
    }
  }
  console.log("Longest word: " + listOfWords[indexOfLongestWord]);
  console.log("Index of longest word: " + indexOfLongestWord);
}

/*wordsFromText(
   "Lorem ipsum dolor sit amet consectetur adipiscing elit Morbi suscipit pharetra justo vel tincidunt"
 );
 */
