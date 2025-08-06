// operator precedence
let score  = 2 * 3 + 4 - 1 / 2; // bad practice
console.log(score); // 9.5
// use parantheses to clarify precedence
score = 2 * (3 + 4) - (1 / 2);
console.log(score); // 13.5