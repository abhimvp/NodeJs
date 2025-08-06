// console.log("irani chai"); - ctrl slash to comment - which won't be executed
/* 
Notes on what we are doing:
Multi-line comments are used to explain the code or provide context.

Data types in JavaScript:
String: A sequence of characters, enclosed in single or double quotes.
Number: Numeric values, can be integers or floating-point numbers.

Boolean: Represents true or false values.

Undefined: A variable that has been declared but not assigned a value.
BigInt: Represents integers with arbitrary precision, created by appending 'n' to the number. very less used.
Null: Represents the intentional absence of any value.

Object: A collection of key-value pairs, where keys are strings and values can be of any type. we will learn more later.

Symbol: A unique and immutable primitive value, often used as object property keys. very less used
*/

// variable is just like a placeholder for a value
// let is used to declare a variable - new way of declaring variable - it has block scope
let chai = "irani chai";
console.log(chai);
// var is also used to declare a variable, but it has function scope
var coffee = "south indian coffee"; // old way of declaring variable - pretty problematic
// behind the scenes - on our memory block (RAM) - it reserves a space for the variable - now we can access it anywhere in the code
console.log(coffee);
// Right now we may not see the difference between let and var, but as we go deeper into JavaScript, we will see the difference
let name = "Abhishek";
let age = 25;
let isStudent = true; // boolean - true or false
let salary = null; // null - intentional absence of value
let bigNumber = 1234567890123456789012345678901234567890n; // BigInt - very large number
let undefinedVariable; // undefined - variable declared but not assigned a value
// object
let teaTypes = ["masala chai", "green tea", "black tea", "lemon tea"]; // array - a collection of values
let user = {
  firstName: "Abhishek",
  lastName: "Hitesh",
  age: 25,
};
let score = 90; // number - numeric value
let getScore = score; // variable can hold any data type
console.log(getScore); // printing the value of getScore

console.log(typeof chai); // checking the data type of chai
console.log(user)