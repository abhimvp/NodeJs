// what is an object?
let username = { firstName: "Abhishek", lastName: "Kumar" };
console.log(username); // {}
console.log(typeof username); // object
// use ctrl d to select multiple lines
const user = {
  firstName: "Abhishek",
  lastName: "Kumar",
};
console.log(user); // { firstName: 'Abhishek', lastName: 'Kumar' }
// we can change the value of the constant object
user.firstName = "Abhi";
console.log(user); // { firstName: 'Abhi', lastName: 'Kumar' }
// add more values to the object
console.log(typeof user); // { firstName: 'Abhi', lastName: 'Kumar' }
user.age = 22;
user.lastName = "Kumar Singh";
console.log(user); // { firstName: 'Abhi', lastName: 'Kumar Singh', age: 22 }
// accessing object properties
console.log(user.firstName); // Abhi
console.log(user["lastName"]); // Kumar Singh
// deleting object properties
delete user.age;
console.log(user); // { firstName: 'Abhi', lastName: 'Kumar Singh' }
user["test syntax"] = "test value";
console.log(user); // { firstName: 'Abhi', lastName: 'Kumar Singh', 'test syntax': 'test value' }

let today = new Date();
console.log(today); // current date and time - utc
console.log(today.getDate()); // current date - 6

// Array - collection of values
let arr = [1, 2, 3, 4, 5];
console.log(arr); // [ 1, 2, 3, 4, 5 ]
console.log(typeof arr); // object
let diff = [1, "Abhi", true, null, undefined, { name: "Abhishek" }, [1, 2, 3]];
console.log(diff); // [ 1, 'Abhi', true, null, undefined, { name: 'Abhishek' }, [ 1, 2, 3 ] ]
console.log(diff[5].name); // Abhishek
// Implicit type conversion
let num = 10;
let str = "20";
let result = num + str; // 1020 - string concatenation
console.log(result); // 1020
console.log(typeof result); // string
