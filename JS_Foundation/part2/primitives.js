// Number

let balance = 120;
// how to check if balance is a number
console.log(typeof balance);

let anotherBalance = new Number(120);
// console.log(anotherBalance); // Number { 120 }
// console.log(anotherBalance.valueOf()); // 120
console.log(typeof anotherBalance); // object

// boolean
let isActive = true;
// how to check if isActive is a boolean
console.log(typeof isActive);
let anotherIsActive = new Boolean(true);
// console.log(anotherIsActive); // Boolean { true }
// console.log(anotherIsActive.valueOf()); // true
console.log(typeof anotherIsActive); // object
// string
let name = "Abhishek";
// how to check if name is a string
console.log(typeof name);
let anotherName = new String("Abhishek");
// console.log(anotherName); // String { "Abhishek" }
// console.log(anotherName.valueOf()); // "Abhishek"
console.log(typeof anotherName); // object
// null
let emptyValue = null;
// how to check if emptyValue is null
console.log(typeof emptyValue);
let anotherEmptyValue = new Number(null);
// console.log(anotherEmptyValue); // Number { 0 }
console.log(anotherEmptyValue.valueOf()); // 0
console.log(typeof anotherEmptyValue); // object

// null and undefined are special types in JavaScript
// null is an object type, but it represents the absence of value
// undefined is a type that indicates a variable has not been assigned a value
// typeof null returns "object" due to a historical bug in JavaScript

let firstName;
console.log(firstName); // undefined
let lastName = null;
console.log(lastName); // null

// String
let myString = "hello";
let myStringOne = 'Hola';
let userName = 'Abhishek';
let greetMessage = `Hello, ${userName}!`; // Template literals - backticks - sting interpolation
console.log(greetMessage); // Hello, Abhishek!
let demoOne = `multiple ${4*4} lines are`;
console.log(demoOne); // multiple 16 lines are

let sm1 = Symbol();
console.log(sm1); // Symbol()
console.log(typeof sm1); // symbol
let sm2 = Symbol("description");
console.log(sm2); // Symbol(description)
console.log(typeof sm2); // symbol
// Symbols are unique and immutable primitive values
// They are often used to create unique object properties or identifiers
// Example of using Symbol to create a unique property
let obj = {};
obj[sm1] = "Unique Value";
console.log(obj[sm1]); // Unique Value
