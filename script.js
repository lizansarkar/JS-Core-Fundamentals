// This code demonstrates JavaScript's type coercion when using the + operator with different data types.
// problem 1
console.log(1 + "20" + 3 + "20");
// problem 2
console.log("5" - 2);
// The minus operator forces numeric conversion, so the string "5" is converted to a number.
// problem 3
// console.log("5" + 2 - 1);
// The plus operator performs string concatenation first, then the minus operator forces numeric conversion.
// problem 4
// console.log(true + true + false);
// In numeric operations, JavaScript converts booleans into numbers.
// problem 5
// console.log([] + []);
// Empty arrays are converted to empty strings during string concatenation.
// problem 6
// console.log([] + {});
// JavaScript may treat an empty object as a block, and the unary plus converts the array into a number.
// problem 7
// console.log(null + 1);
// Null is converted to zero in numeric operations.
// problem 8
// console.log(undefined + 1);
// Null is converted to zero in numeric operations.
// problem 9
// console.log("10" * "2");
// The multiply operator always converts strings into numbers.
// problem 10
// console.log(0 == false);
// console.log(0 === false);
// These outputs occur due to JavaScript’s implicit type coercion and operator behavior.

//difference between var, let, and const
// var is function-scoped and can be redeclared and updated. It is hoisted to the top of its scope, meaning it can be used before it is declared, but it will be undefined until the declaration is encountered.

// let is block-scoped and can be updated but not redeclared within the same scope. It is also hoisted, but it cannot be accessed before its declaration (temporal dead zone).

// const is block-scoped and cannot be updated or redeclared. It must be initialized at the time of declaration.
var x = 10;
let y = 20;
const z = 30;






