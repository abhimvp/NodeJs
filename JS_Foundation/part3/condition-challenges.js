// check if a number is greater than another number

let num1 = 10;
let num2 = 5;

if (num1 > num2) {
  console.log(num1 + " is greater than " + num2);
} else {
  console.log(num1 + " is not greater than " + num2);
}

// check if a string is equal to another string

let str1 = "hello";
let str2 = "hello";

if (str1 == str2) {
  console.log(str1 + " is equal to " + str2);
} else {
  console.log(str1 + " is not equal to " + str2);
}

// checking if a variable is number or not

let variable = "123";
if (typeof variable === "number") {
  console.log(variable + " is a number");
} else {
  console.log(variable + " is not a number");
}

// check if a boolean value is true or false

let isTrue = true;
if (isTrue) {
  console.log(isTrue + " is true");
} else {
  console.log(isTrue + " is false");
}

// check if an array is empty or not
let arr = [];
if (arr.length === 0) {
  console.log("The array is empty");
} else {
  console.log("The array is not empty");
}
